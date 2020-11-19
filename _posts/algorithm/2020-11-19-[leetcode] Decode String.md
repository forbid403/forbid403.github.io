---
title: "[leetcode] Decode String"
date: 2020-11-19
categories: algorithm
---
## [leetcode] Decode String
[문제 링크](https://leetcode.com/problems/decode-string/)

```c++
class Solution {
public:
    string decodeString(string s) {
        stack <char> st;
        
        for(char c: s) {
            if(c == ']') {        
                string temp;

                while(!st.empty()) {
                    if(st.top() == '[') { st.pop(); break; }
                    temp += st.top();
                    st.pop();
                }
                
                reverse(temp.begin(), temp.end());
                
                string number;
                while(!st.empty() && isdigit(st.top())){
                    number = st.top() + number;
                    st.pop();
                }
                
                int num = stoi(number);
                while(num--) {
                    for(int i=0; i<temp.size(); i++) st.push(temp[i]);
                }
                
            } else {
                st.push(c);
            }
        }
                
        string ans;

        while(!st.empty()) {
            ans += st.top();
            st.pop();
        }
                
        reverse(ans.begin(), ans.end());
        return ans;
    }
};
```

- 코테에서 비슷한 문제를 본 것 같아서 기록한다.
- `]`가 아니면 스택에 넣어주고,
- `]`를 만나면 해당 괄호를 처리 해 준다.
  - 괄호가 닫힐 때까지 글자들을 더해준다.
  - 괄호가 닫히면 더한 글자들을 거꾸로 돌려준다.
  - 괄호 앞의 숫자들을 구한다.
  - 숫자만큼 글자들을 스택에 다시 넣어준다.
- 모든 처리가 끝나면 스택에 들어있는 글자들을 ans에 더해주고, reverse 처리 해 준다.