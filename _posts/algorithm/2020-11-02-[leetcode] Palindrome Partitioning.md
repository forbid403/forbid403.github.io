---
title: "[leetcode] Palindrome Partitioning"
date: 2020-11-02
categories: algorithm
---
## [leetcode] Palindrome Partitioning
[문제 링크](https://leetcode.com/problems/palindrome-partitioning/)

backtracking
```c++
class Solution {
public:
    int isPalindrome(string s, int l, int r) {
        int start = l;
        int end = r;
        while(start < end) {
            if(s[start++] != s[end--]) return false;
        }
        return true;
    }
    
    void dfs(vector <vector<string>>& ans, vector <string>& candidates, string s, int idx) {
        
        if(idx == s.length()) {
            ans.push_back(candidates);
        } else {   
            for(int i=idx; i<s.length(); i++) {
                if(isPalindrome(s, idx, i)) {
                    candidates.push_back(s.substr(idx, i-idx+1));
                    dfs(ans, candidates, s, i+1);
                    candidates.pop_back();
                }
            }
        }
    }
    
    vector<vector<string>> partition(string s) {
        vector <vector<string>> ans;
        vector <string> candidates;
        
        dfs(ans, candidates, s, 0);
        
        return ans;
    }
};
```

backtracking + dp
```c++
class Solution {
public:
    int dp[204][204];
    void dfs(vector <vector<string>>& ans, vector <string>& candidates, string s, int start) {
        
        if(start == s.length()) {
            ans.push_back(candidates);
        } else {   
            for(int end=start; end<s.length(); end++) {
                if(s[end] == s[start] && (end - start <= 2 || dp[start+1][end-1])) {
                    dp[start][end] = 1;
                    candidates.push_back(s.substr(start, end-start+1));
                    dfs(ans, candidates, s, end+1);
                    candidates.pop_back();
                }
            }
        }
    }
    
    vector<vector<string>> partition(string s) {
        vector <vector<string>> ans;
        vector <string> candidates;
        
        dfs(ans, candidates, s, 0);
        
        return ans;
    }
};
```
