import json, re

text=open("/tmp/prova.txt",encoding="utf-8").read().replace("\r","")
questions=[]
prev_question=None

def column_parts(lines):
    cols=[[],[]]
    for line in lines:
        if not line.strip(): continue
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
            cols[1 if leading>=45 else 0].append(line.strip())
    return ["\n".join(c) for c in cols]

def segments(t):
    matches=list(re.finditer(r"QUESTÃO\s+(\d+)",t))
    prefix=t[:matches[0].start()].strip() if matches else t.strip()
    out=[]
    for i,m in enumerate(matches):
        n=int(m.group(1))
        end=matches[i+1].start() if i+1<len(matches) else len(t)
        seg=t[m.end():end].strip()
        seg=re.sub(r"PRIMEIRA EDIÇÃO|SEGUNDA EDIÇÃO","",seg)
        seg=re.sub(r"ÁREA LIVRE","",seg)
        seg=re.sub(r"\n{3,}","\n\n",seg)
        out.append((n,seg))
    return prefix,out

for page_no,page in enumerate(text.split("\f"),1):
    cols=column_parts(page.splitlines())
    left_prefix,left=segments(cols[0])
    right_prefix,right=segments(cols[1])

    # A column may begin with the continuation of the last question from the other column.
    if right_prefix and left:
        n,seg=left[-1]
        left[-1]=(n,(seg+"\n"+right_prefix).strip())
        right_prefix=""
    elif left_prefix and right:
        n,seg=right[-1]
        right[-1]=(n,(seg+"\n"+left_prefix).strip())
        left_prefix=""

    if left_prefix and prev_question is not None:
        prev_question["texto"]=(prev_question["texto"]+"\n"+left_prefix).strip()
        left_prefix=""
    if right_prefix and prev_question is not None:
        prev_question["texto"]=(prev_question["texto"]+"\n"+right_prefix).strip()
        right_prefix=""

    for n,seg in left+right:
        q={"numero":n,"pagina":page_no,"texto":seg}
        questions.append(q)
        prev_question=q

out={}
for q in questions:
    if q["numero"] in out:
        out[q["numero"]]["texto"]=(out[q["numero"]]["texto"]+"\n"+q["texto"]).strip()
    else:
        out[q["numero"]]=q

for q in out.values():
    q["texto"]=re.split(r"QUESTIONÁRIO DE PERCEPÇÃO DA PROVA|Em relação ao tempo total de aplicação, você considera que a prova foi|As informações/instruções fornecidas para a resolução das questões foram suficientes para resolvê-las\?|Você já participou, no Brasil, de outro\(s\) processo\(s\) de revalidação",q["texto"],maxsplit=1)[0].strip()\n    q["texto"]=re.sub(r"\n?\s*\d{1,2}\s*$","",q["texto"]).strip()

missing=[n for n in range(1,101) if n not in out]
print("QUESTOES=",len(out),"MISSING=",missing)
with open("provas/2025/2025-2/2025_2_questions_raw.json","w",encoding="utf-8") as f:
    json.dump([out[n] for n in sorted(out)],f,ensure_ascii=False,indent=2)
