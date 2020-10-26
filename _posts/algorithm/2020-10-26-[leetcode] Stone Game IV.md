---
title: "[leetcode] Stone Game IV"
date: 2020-10-26
categories: algorithm
---
## [leetcode] Stone Game IV
[문제 링크](https://leetcode.com/problems/stone-game-iv/)

```c++
class Solution {
public:
    int dp[100001];
    bool winnerSquareGame(int n) {
        
        for(int i=1; i<=n; i++) {
            for(int j=1; j * j <= i; j++) {
                if(dp[i-j*j] == 0) {
                  dp[i] = 1;
                  break;
                }
            }
        }
        
        return dp[n];
    }
};
```
- dp... GGㅎㅎ
- Alice, Bob이 게임을 하는데, 돌을 전부 가져가면 이기는 게임이다. 돌은 한 번에 제곱의 수만(1, 4, 9...) 가져갈 수 있다.
- 돌의 갯수 n이 주어질 때, Alice가 이기는지를 구하면 된다.
- 플레이어들은 언제나 최선의 선택을 한다.
---

![KakaoTalk_Photo_2020-10-26-16-12-57](https://user-images.githubusercontent.com/41617388/97143497-25231c00-17a6-11eb-9325-1d5336e6e613.png)

- 번갈아 가면서 게임을 하기 때문에, Bob이 돌을 다 없앨 수 없을 때 Alice가 이긴다.
- `dp[i - j * j]`가 false라면 bob이 돌을 다 없애지 못했다는 의미이기 때문에 `dp[i]`는 true가 된다.
- 해당 그림을 보면서 생각 해 보자.
- i가 5이다.
- Alice는 1, 4를 가져갈 수 있다. `dp[4]`, `dp[1]`은 True이므로, Bob이 이기게 된다. 따라서 `dp[5]`는 false가 된다. (이길 수 없음)
- i는 8이다.
- Alice의 차례에 가져갈 수 있는 돌들은 1, 4가 된다.
- `dp[7]`, `dp[4]`는 각각 False, True이다. 늘 최선의 선택을 하기 때문에 Alice는 이길 수 있다.