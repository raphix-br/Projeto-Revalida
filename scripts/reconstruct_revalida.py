#!/usr/bin/env python3
"""Reconstruct a Revalida objective PDF into one JSON record per question.

Usage:
  python scripts/reconstruct_revalida.py INPUT.pdf OUTPUT.json

The parser is intentionally edition-agnostic. It preserves the original page,
reconstructs two-column layouts, merges continuations, removes page markers and
keeps the raw extracted question text. A later validation/import step is
responsible for splitting the stem and alternatives and assigning the official
answer key.
"""
import json, re, subprocess, sys
from pathlib import Path

if len(sys.argv) != 3:
    raise SystemExit("usage: reconstruct_revalida.py INPUT.pdf OUTPUT.json")

pdf, output = map(Path, sys.argv[1:])
work = Path("/tmp/revalida_extract.txt")
subprocess.run(["pdftotext", "-layout", str(pdf), str(work)], check=True)
text = work.read_text(encoding="utf-8", errors="replace").replace("\r", "")
questions = []

def column_parts(lines):
    cols = [[], []]
    for line in lines:
        if not line.strip():
            continue
        runs = list(re.finditer(r" {5,}", line))
        internal = [m for m in runs if m.start() > 0 and m.end() < len(line)]
        if internal:
            gap = max(internal, key=lambda m: m.end() - m.start())
            left, right = line[:gap.start()].strip(), line[gap.end():].strip()
            if left: cols[0].append(left)
            if right: cols[1].append(right)
        else:
            leading = len(line) - len(line.lstrip(" "))
            cols[1 if leading >= 45 else 0].append(line.strip())
    return ["\n".join(c) for c in cols]

def segments(text):
    ms = list(re.finditer(r"QUESTÃO\s+(\d+)", text))
    prefix = text[:ms[0].start()].strip() if ms else text.strip()
    out = []
    for i, m in enumerate(ms):
        n = int(m.group(1))
        if not 1 <= n <= 100:
            continue
        end = ms[i + 1].start() if i + 1 < len(ms) else len(text)
        seg = text[m.end():end].strip()
        seg = re.sub(r"PRIMEIRA EDIÇÃO|SEGUNDA EDIÇÃO|ÁREA LIVRE", "", seg)
        seg = re.sub(r"\n{3,}", "\n\n", seg).strip()
        out.append((n, seg))
    return prefix, out

previous = None
for page_no, page in enumerate(text.split("\f"), 1):
    left, right = column_parts(page.splitlines())
    lp, left_q = segments(left)
    rp, right_q = segments(right)
    if lp and left_q:
        n, seg = left_q[-1]
        left_q[-1] = (n, (seg + "\n" + lp).strip())
        lp = ""
    if rp and right_q:
        n, seg = right_q[-1]
        right_q[-1] = (n, (seg + "\n" + rp).strip())
        rp = ""
    for continuation in (lp, rp):
        if continuation and previous:
            previous["texto"] = (previous["texto"] + "\n" + continuation).strip()
    for n, seg in left_q + right_q:
        previous = {"numero": n, "pagina": page_no, "texto": seg}
        questions.append(previous)

out = {}
for q in questions:
    if q["numero"] in out:
        out[q["numero"]]["texto"] = (out[q["numero"]]["texto"] + "\n" + q["texto"]).strip()
    else:
        out[q["numero"]] = q

result = [out[n] for n in sorted(out)]
missing = [n for n in range(1, 101) if n not in out]
print(f"QUESTOES={len(result)} MISSING={missing}")
Path(output).write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
if missing:
    raise SystemExit(2)
