---
title: "[leetcode] Best Time to Buy and Sell Stock"
date: 2020-11-07
categories: algorithm
---
## [leetcode] Best Time to Buy and Sell Stock
[문제 링크](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

```c++
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int n = prices.size();
        if(n < 2) return 0;

        int ans = 0;
        int minimum = prices[0];
        
        for(int i=1; i<n; i++) {
            if(minimum < prices[i]) {
                ans = max(ans, prices[i] - minimum);
            }
            
            minimum = min(minimum, prices[i]);
        }
        
        return ans;
    }
};
```