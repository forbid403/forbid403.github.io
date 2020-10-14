---
title: "[leetcode] House Robber II"
date: 2020-10-14
categories: algorithm
---
## [leetcode] House Robber II
[문제 링크](https://leetcode.com/problems/house-robber-ii/)

```c++
class Solution {
public:
    int rob(vector<int>& nums) {
        int n = nums.size();
        if(n < 1) return 0;
        if(n < 2) return nums[0];
        if(n < 3) return max(nums[0], nums[1]);
        
        int dp[n+1];
        memset(dp, 0, sizeof(dp));
        dp[0] = nums[0];
        dp[1] = max(nums[0], nums[1]);
        
        for(int i=2; i<n; i++) {
            dp[i] = max(dp[i-2] + nums[i], dp[i-1]);
        }
        int temp = dp[n-2];
        
        dp[1] = nums[1];
        dp[2] = max(nums[1], nums[2]);
        
        for(int i=3; i<n; i++) {
            dp[i] = max(dp[i-2] + nums[i], dp[i-1]);
        }
        
        return max(temp, dp[n-1]);
        
    }
};
```

- dp문제.
- 끝 집과 처음 집이 이어져 있기 때문에 0부터 시작하는 것 한 번, 1부터 시작 하는 것 한 번씩 dp를 진행 해 준 후, 둘 중에 더 큰 값을 리턴 해 주면 된다.