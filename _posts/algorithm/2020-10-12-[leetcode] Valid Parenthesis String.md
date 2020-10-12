---
title: "[leetcode] Valid Parenthesis String"
date: 2020-10-12
categories: algorithm
---
## [leetcode] Valid Parenthesis String
[문제 링크](https://leetcode.com/problems/valid-parenthesis-string/)

```c++
class Solution {
public:
    stack <char> open;
    stack <char> star;
    bool checkValidString(string s) {
        if(!s.length()) return true;
        
        for(int i=0; i<s.length(); i++) {
            if(s[i] == '*') {
                star.push(i);
            } else if(s[i] == '('){
                open.push(i);
            } else {
                if(!open.empty()) open.pop();
                else if(!star.empty()) star.pop();
                else if(open.empty()) return false;
            }
        }
        
        while(!open.empty() && !star.empty()) {
            if(open.top() > star.top()) return false;
            open.pop();
            star.pop();
        }
        
        return open.empty();
        
    }
};
```
- stack 2개로 접근 한 문제
- 처음에는 인덱스가 아닌 char자체를 넣었는데 오답이었다. 인덱스를 넣게 되면 언제 들어갔는지 확인 할 수 있어서 답을 도출 해 낼 수 있다.
- 열리는 브라켓과 별모양은 바로 push 해 주고, 닫히는 브라켓일 경우에
  - 열리는 브라켓에서 팝 -> 스타에서 팝 -> 비어있다면 false
  - 순으로 체크 해 줘야 한다.
- 반복문이 끝난 후에는 둘 중 하나가 빌 때까지 pop 해주는데, 이 때 open의 인덱스가 star의 인덱스보다 크다면, 그 브라켓은 닫을 수 없기 때문에 false이다.
- dp로 푸는 방법도 있던데 따로 인강이 없어서 패스 ><~