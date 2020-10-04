---
title: "[leetcode] Longest Increasing Subsequence"
date: 2020-10-04
categories: algorithm
---
## [leetcode] Longest Increasing Subsequence
[문제 링크](https://leetcode.com/problems/longest-increasing-subsequence/)

```c++
class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
                
        int ans = 0;
        int n = nums.size();
        int dp[n+1]; memset(dp, 0, sizeof(dp));

        for(int i=0; i<n; i++) {
            dp[i] = 1;
            for(int j=0; j<i; j++) {
                if(nums[i] > nums[j] && dp[i] < dp[j] + 1) {
                    dp[i] = dp[j] + 1;
                }
            }
            ans = max(ans, dp[i]);
        }
        
        return ans;
    }
};
```

- Longest Increasing Subsequence는 기본 dp 문제이다. 숙지 해 놓자!
- `dp[i]`는 해당 위치에서의 증가 수열의 최대 길이이다.
- `j=0`에서부터 `i`까지의 최장 증가 수열을 계산 해 주면 된다.
- 1개는 무조건 1 길이의 lis를 가지기 때문에 `dp[i] = 1`로 초기화 시켜준다.
- `i`인덱스 숫자가 `j`인덱스보다 크고, `dp[j]+1`가 `dp[i]`보다 클 경우에 업데이트를 해 준다.
  - `dp[j]+1`을 비교 해 주는 이유는, 최장 길이를 업데이트 해야 하는데 `dp[i]`가 최대가 아닌 경우가 있기 때문이다.
  - ex) 10 20 10 30 일 때, 30을 업데이트 시 크기 비교만 해 줄 경우 3이 아닌 2로 갱신된다. (`dp[2]`가 1이기 때문)