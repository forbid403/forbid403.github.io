---
title: "[leetcode] Best Time to Buy and Sell Stock with Cooldown"
date: 2020-10-15
categories: algorithm
---
## [leetcode] Best Time to Buy and Sell Stock with Cooldown
[문제 링크](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)

```c++
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int n = prices.size();
        if(n < 1) return 0;
        
        int sold = 0, hold = INT_MIN, rest = 0;
        
        for(int i=0; i<n; i++) {
            int prevSold = sold;
            sold = hold + prices[i];
            hold = max(hold, rest - prices[i]);
            rest = max(rest, prevSold);
        }
        
        return max(sold, rest);
    }
};
```

- dp + State Machine
- 총 세 가지의 경우의 수가 있다. 팔았거나 (sold), 휴식하거나 (rest), 유지하거나 (held).
- ![image](https://user-images.githubusercontent.com/41617388/96116149-f940a480-0f22-11eb-8440-ad64f6911584.png)
- `sold` state는 주식을 판 상태이다. 해당 값을 기존의 값에 더해준다.
- `held` state는 대기 상태이다. 휴식 상태 이후에 구매하거나, 대기 상태를 유지하는 경우의 수가 있다.
- `rest` state는 휴식 상태이다. 구매 이후에 휴식하거나, 휴식을 유지하는 경우의 수가 있다.
- 해당 state들을 갱신 해 주면서, 최종적인 상태는 판매를 했거나 판매 이후를 비교 해 주면 된다. (더이상의 구매는 불가능하기 때문)