---
title: "[leetcode] Champagne Tower"
date: 2020-10-28
categories: algorithm
---
## [leetcode] Champagne Tower
[문제 링크](https://leetcode.com/problems/champagne-tower/)

```c++
class Solution {
public:
    double tower[102][102];
    double champagneTower(int poured, int query_row, int query_glass) {
        
        tower[0][0] = poured;
        
        for(int i=0; i<=query_row; i++) {
            for(int j=0; j<=i; j++) {
                if(tower[i][j] >= 1) {
                    tower[i+1][j] += (tower[i][j] - 1) / 2;
                    tower[i+1][j+1] += (tower[i][j] - 1) / 2;
                    tower[i][j] = 1;
                }
            }
        }
        return tower[query_row][query_glass];
    }
};
```
- 구현 문제.
- tower 배열을 만들어 준다. 여기에는 샴페인의 양이 저장 될 곳이다.
- 맨 처음 잔을 poured로 초기화 시켜준다.
- 반복문을 돌면서, 만약 해당 잔이 꽉 찼다면 (`tower[i][j] >= 1`), 그 다음 잔에 넘쳐 흐르게 한다. 다음 잔은 바로 아랫 잔과, 아랫 잔의 옆의 잔을 채우게 된다.
- 그리고 해당 잔을 1로 초기화 시켜준다.