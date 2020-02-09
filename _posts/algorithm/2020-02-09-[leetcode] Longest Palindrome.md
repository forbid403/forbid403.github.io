---
title: "[leetcode] Longest Palindrome"
date: 2020-02-09
categories: algorithm
---

# 409. Longest Palindrome

Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

**Input:**
    "abccccdd"

**Output:**
    7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.

---
```c++
class Solution {
public:
    int longestPalindrome(string s) {
        unordered_map <char, int> m;
        
        for(auto c : s){
            m[c]++;
        }
        
        int ans = 0;
        int flag = false;
        
        for (unordered_map<char, int>::
             const_iterator it = m.begin(); it != m.end(); ++it){
            if(it->second == 1){
                if(flag) continue;
                ans += 1;
                flag = true;
            }else if(it->second % 2 == 1){
                if(flag){
                    ans += (it->second - 1);
                }
                else {
                    ans += it->second;
                    flag = true;
                }
            }else if(it->second % 2 == 0){
                ans += (it->second);
            }
        }
        return ans;
    }
};
```
- 문제풀이
    해쉬 맵에 글자들의 갯수를 저장한다.
    
    palindrome이 되는 조건은 가운데 기준으로 대칭을 이루면 된다.
   1개인 경우는 대칭의 기준이 되는 애 1개면 충분 하기 때문에 flag로 구분 해 준다.
   홀수인 경우는 n-1개로 짝수로 만들어서 대칭을 만든다.
   이 때에, 기준이 되는 1개가 없을 경우 ex) "ccc" 를 예외처리 해준다.
   짝수인 경우는 그냥 대칭을 만든다.
   
