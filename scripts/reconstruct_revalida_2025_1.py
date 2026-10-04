import json, re, xml.etree.ElementTree as ET

root = ET.parse("/tmp/prova.xml").getroot()
questions = []

pages = root.findall(".//{*}page")
for page_no, page in enumerate(pages, 1):
    words = []
    for w in page.findall(".//{*}word"):
        try:
            x = float(w.attrib["xMin"])
            y = float(w.attrib["yMin"])
        except (KeyError, ValueError):
            continue
        words.append((y, x, w.text or ""))

    words.sort(key=lambda z: (z[0], z[1]))
    lines = []
    for y, x, t in words:
        if not lines or abs(y - lines[-1][0]) > 1.8:
            lines.append([y, []])
        lines[-1][1].append((x, t))

    width = float(page.attrib.get("width", "595"))
    mid = width / 2
    cols = [[], []]
    for y, ws in lines:
        left = [t for x, t in ws if x < mid]
        right = [t for x, t in ws if x >= mid]
        if left:
            cols[0].append(" ".join(left))
        if right:
            cols[1].append(" ".join(right))

    for col in cols:
        text = "\n".join(col)
        matches = list(re.finditer(r"QUESTÃO\s+(\d+)", text))
        for idx, m in enumerate(matches):
            n = int(m.group(1))
            if not 1 <= n <= 100:
                continue
            end = matches[idx + 1].start() if idx + 1 < len(matches) else len(text)
            seg = text[m.end():end].strip()
            seg = re.sub(r"PRIMEIRA EDIÇÃO", "", seg)
            seg = re.sub(r"ÁREA LIVRE", "", seg)
            seg = re.sub(r"\n{3,}", "\n\n", seg)
            questions.append({"numero": n, "pagina": page_no, "texto": seg})

out = {}
for q in questions:
    out.setdefault(q["numero"], q)

missing = [n for n in range(1, 101) if n not in out]
print("QUESTOES=", len(out), "MISSING=", missing)

with open("provas/2025/2025-1/2025_1_questions_raw.json", "w", encoding="utf-8") as f:
    json.dump([out[n] for n in sorted(out)], f, ensure_ascii=False, indent=2)
