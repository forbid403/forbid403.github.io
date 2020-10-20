---
title: "[leetcode] Coin Change"
date: 2020-10-20
categories: algorithm
---
## [leetcode] Coin Change
[문제 링크](https://leetcode.com/problems/coin-change/)

```c++
    int coinChange(vector<int>& coins, int amount) {
        int n = coins.size();
        if(!amount) return 0;
        if(!n) return -1;
        int dp[amount + 1];
        
        for(int i=0; i<=amount; i++) dp[i] = INT_MAX - 1;
        
        dp[0] = 0;
        for(int i=1; i<=amount; i++) {
            for(int j=0; j<n; j++) {
                if(i >= coins[j]) {
                    dp[i] = min(dp[i], dp[i - coins[j]] + 1);
                }
            }
        }
        
        return dp[amount] > amount ? -1 : dp[amount];
        
    }
};
```
- dp 문제.
- **memset은 0, -1 이외에는 초기화 되지 않는다!** 이것땜에 계속 에러남
- 반복문을 amount까지 진행 해 준다. `dp[i]`는 i원을 만들 수 있는 동전의 최소 갯수이다.
- 동전의 갯수만큼 반복 하면서, 돈 - 동전이 가능하다면 dp를 업데이트 해 준다.
- 만약 dp의 값이 INT_MAX-1(최댓값) 이라면 -1을 출력, 아니라면 dp의 값을 출력해준다.