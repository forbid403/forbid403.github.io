---
title: "[leetcode] Palindromic Substrings"
date: 2020-10-03
categories: algorithm
---
## [leetcode] Palindromic Substrings
[문제 링크](https://leetcode.com/problems/palindromic-substrings/)

```c++
class Solution {
public:
    int dp[1004][1004];
    int countSubstrings(string s) {
        int answer = s.length();
        
        for(int i=0; i<s.length(); i++) {
            dp[i][i] = 1;
        }
        
        for(int i=0; i<s.length() - 1; i++) {
            if(s[i] == s[i+1]) {
                dp[i][i+1] = 1;
                answer++;
            }
        }
                
        for(int i=2; i<s.length(); i++) {
            for(int j=0; j<i; j++) {
                if(s[i] == s[j] && dp[j+1][i-1]) {
                    dp[j][i] = 1;
                    answer++;
                }
            }
        }
        
        return answer;
    }
};
```

- palindrome인 경우는 3가지 경우가 있다.
  - 문자의 길이가 1개인 경우
  - 문자의 길이가 2개 이고, 둘이 같은 경우
  - 문자의 길이가 3개 이상이고, 양 끝의 문자가 같으며, 양 끝 문자 사이의 문자열도 palindrome이어야 한다.

- `dp[i][j]`는 `i~j`의 palindrome 여부이다.
  - `dp[0][2]`라면 `s[0~2]`가 palindrome인지 아닌지를 표시한다.
- 문자의 길이가 1개, 2개인 경우는 단순 반복문으로 처리를 해 준다.
- 문자의 길이가 3개 이상일 경우에만 주의 해 주면 된다.
  - i, j를 palindrome을 판별 할 처음과 끝의 인덱스로 지정 해 준다.
  - `s[i] == s[j]`, 즉 양 끝의 문자가 같고,
  - `dp[i+1][j-1]`, 그 사이의 substring도 palindrome이면,
  - 답을 더해주고, palindrome이라고 표시를 해 준다.
- 이 때, i를 0부터 검사하게 되면 i+1를 갱신 하지 않은 상태에서 i+1에 접근해 답을 체크할 수 없기 때문에,
- top down 방식으로 풀어야 한다.