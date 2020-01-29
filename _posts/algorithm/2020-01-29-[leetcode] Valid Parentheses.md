---
title: "[leetcode] Valid Parentheses"
date: 2020-01-29
categories: algorithm
---
# Valid Parentheses

Algorithm: 스택
Type: LeetCode
level: 1
link: https://leetcode.com/problems/valid-parentheses/

Given a string containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

**Example 1:**

    Input: "()"
    Output: true

**Example 2:**

    Input: "()[]{}"
    Output: true

**Example 3:**

    Input: "(]"
    Output: false

**Example 4:**

    Input: "([)]"
    Output: false

**Example 5:**

    Input: "{[]}"
    Output: true

---

### First Solution
```c++
    class Solution {
    public:
        stack <char> st;
        bool isValid(string s) {
            
            for(int i=0; i<s.length(); i++){
                char c = s[i];
                
                if(c == ')'){
                    if(!st.empty() &&st.top() == '(') {
                        st.pop();
                        continue;
                    }else return false;
                }else if(c == '}'){
                    if(!st.empty() &&st.top() == '{'){
                        st.pop();
                        continue;
                    }else return false;
                    
                }else if(c == ']'){
                    if(!st.empty() && st.top() == '['){
                        st.pop();
                        continue;
                    }else return false;
                }else{
                    st.push(c);
                }
            }
            
            if(!st.empty()) return false;
            else return true;
        }
    };
```
### Second Solution

좀더 가시적인 코드
```c++
    class Solution {
    public:
        stack <char> st;
        bool isValid(string s) {
            
            for(int i=0; i<s.length(); i++){
                char c = s[i];
                if(c == '(' || c == '[' || c == '{'){
                    st.push(c);
                }else{
                    if(st.empty()) return false;
                    if(c == ']' && st.top()!= '[') return false;
                    if(c == '}' && st.top()!= '{') return false;
                    if(c == ')' && st.top()!= '(') return false;
                    st.pop();
                }
                
            }
            
            return st.empty();
        }
    };
```
- 문제풀이

    스택에 하나씩 넣으면서 닫는 괄호 라면 앞에 여는 괄호가 있는지 st.top()으로 확인한다.

    여는 괄호가 없거나 스택이 비었다면 return false

    여는 괄호가 있으면 pop을 해준다.

    다 돈 다음에 스택에 남아있는게 있으면 짝이 없다는 뜻이므로 return false

    스택이 비었다면 다 짝을 찾았으므로 return true를 해준다!

- 후기

    비슷한 문제를 자료구조 시간에 풀어서 잘 .. 풀었다 ㅎ 아래 코드가 더 깔끔한데 시간이 더 걸린다 왤까~~