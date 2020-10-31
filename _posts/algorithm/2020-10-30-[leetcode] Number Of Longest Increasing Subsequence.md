---
title: "[leetcode] Number of Longest Increasing Subsequence"
date: 2020-10-30
categories: algorithm
---
## [leetcode] Number of Longest Increasing Subsequence
[문제 링크](https://leetcode.com/problems/number-of-longest-increasing-subsequence/)

```c++
class Solution {
public:
    int findNumberOfLIS(vector<int>& nums) {
        int n = nums.size();
        if(!n) return 0;
        
        int dp[n+1];
        int cnt[n+1]; 
        
        for(int i=0; i<n+1; i++) {dp[i] = 1; cnt[i] = 1;}
        
        int cur = 0;
        for(int i=0; i<n; i++) {
            for(int j=0; j<i; j++) {
                if(nums[i] > nums[j]) {
                    if(dp[i] < dp[j] + 1) {
                        cnt[i] = cnt[j];
                        dp[i] = dp[j] + 1;
                    } else if(dp[i] == dp[j] + 1) {
                        cnt[i] += cnt[j];
                    }
                }
            }
            cur = max(cur, dp[i]);
        }
        int ans = 0;
        for(int i=0; i<n; i++) if(dp[i] == cur) ans += cnt[i];
        
        return ans;
    }
};
```

- LIS의 경우의 수를 구하는 문제이다.
- dp 배열 말고 경우의 수를 저장하는 cnt 배열을 추가로 선언 해 주고 1로 초기화 시켜 준다.
- IS인 경우에만 다음의 검사를 해준다.
  - 뻗어나갈 수 있는 경우의 수가 존재한다면(`dp[i] == dp[j] + 1`)
  - 경우의 수가 존재하지 않는다면 (`dp[i] > dp[j] + 1`)