import json, re
text=open("/tmp/prova.txt",encoding="utf-8").read().replace("\r","")
questions=[]
for page_no,page in enumerate(text.split("\f"),1):
    cols=[[],[]]
    for line in page.splitlines():
        if not line.strip(): continue
        stripped=line.strip()
        # Split lines containing both columns at the largest visual gutter.
        runs=list(re.finditer(r" {5,}",line))
        internal=[m for m in runs if m.start()>0 and m.end()<len(line)]
        if internal:
            gap=max(internal,key=lambda m:m.end()-m.start())
            left=line[:gap.start()].strip()
            right=line[gap.end():].strip()
            if left: cols[0].append(left)
            if right: cols[1].append(right)
        else:
            leading=len(line)-len(line.lstrip(" "))
            cols[1 if leading>=45 else 0].append(stripped)
    for col in cols:
        t="\n".join(col)
        matches=list(re.finditer(r"QUESTÃO\s+(\d+)",t))
        for idx,m in enumerate(matches):
            n=int(m.group(1))
            if not 1<=n<=100: continue
            end=matches[idx+1].start() if idx+1<len(matches) else len(t)
            seg=t[m.end():end].strip()
            seg=re.sub(r"PRIMEIRA EDIÇÃO|SEGUNDA EDIÇÃO","",seg)
            seg=re.sub(r"ÁREA LIVRE","",seg)
            seg=re.sub(r"\n{3,}","\n\n",seg)
            questions.append({"numero":n,"pagina":page_no,"texto":seg})
out={}
for q in questions: out.setdefault(q["numero"],q)
missing=[n for n in range(1,101) if n not in out]
print("QUESTOES=",len(out),"MISSING=",missing)
with open("provas/2025/2025-2/2025_2_questions_raw.json","w",encoding="utf-8") as f:
    json.dump([out[n] for n in sorted(out)],f,ensure_ascii=False,indent=2)
