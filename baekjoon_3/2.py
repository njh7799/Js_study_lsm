#Python Code
num=int(input())
hl=[]
for i in range(num):
    x=map(int, input().split())
    x=list(x)
    hl.append(x)

for i in hl:
    res=0
    for a in i:
        res+=a
    print(res)
