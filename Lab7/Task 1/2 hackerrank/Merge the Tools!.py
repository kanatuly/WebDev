def merge_the_tools(s, k):
    for i in range(0, len(s)//k):
        was = set()
        for j in range(i*k, (i+1)*k):
            if s[j] not in was:
                print(s[j], end = "")
                was.insert(s[j])
        print("")

if __name__ == '__main__':
    string, k = input(), int(input())
    merge_the_tools(string, k)