---
title: "[leetcode] Remove Duplicate Letters"
date: 2020-10-24
categories: algorithm
---
## [leetcode] Remove Duplicate Letters
[문제 링크](https://leetcode.com/problems/remove-duplicate-letters/)

```c++
class Solution {
public:
    string removeDuplicateLetters(string s) {
        map <char, int> count;
        for(char c : s) count[c]++;
        
        map <char, int> used;
        string ans = "";
        for(char c : s) {
            count[c]--;
            if(used[c]) continue;
            
            while (count[ans.back()] && ans.back() > c) {
                used[ans.back()] = 0;
                ans.pop_back();
            }
            used[c] = 1;
            ans.push_back(c);
        }
        
        return ans;
    }
};
```
- stack을 이용한 문제.
- 글자가 몇 개 있는지 count에 저장 해 준다.
- string의 길이만큼 돌면서 글자들을 더해준다.
- 들어갈 글자가 이미 사용 된 글자라면 다음으로 넘어간다.
- 글자의 마지막이 (`ans.back()`) 현재 들어갈 글자보다 알파벳 순으로 더 늦고, 이후에 더 나올 글자라면 (`count[ans.back()]`) 글자를 없애준다.
- 들어갈 글자를 넣어주고, 방문 처리 해 준다.