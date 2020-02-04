---
title: "[leetcode] Unique Paths"
date: 2020-02-04
categories: algorithm
---
# Unique Paths

Algorithm: DP
Created: Jan 28, 2020 6:16 PM
DoubleChk: No
Type: LeetCode
level: 2
link: https://leetcode.com/problems/unique-paths/

A robot is located at the top-left corner of a *m* x *n* grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

![https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png](https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png)

Above is a 7 x 3 grid. How many possible unique paths are there?

**Note:** *m* and *n* will be at most 100.

**Example 1:**

    Input: m = 3, n = 2
    Output: 3
    Explanation:
    From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
    1. Right -> Right -> Down
    2. Right -> Down -> Right
    3. Down -> Right -> Right

**Example 2:**

    Input: m = 7, n = 3
    Output: 28

---
```c++
    class Solution {
    public:
        int dp[101][101];
        int uniquePaths(int m, int n) {
    
            for(int i=0; i<m; i++){
                dp[i][0] = 1;
            }
            
            for(int j=0; j<n; j++){
                dp[0][j] = 1;
            }
            
            for(int i=1; i<m; i++){
                for(int j=1; j<n; j++){
                    dp[i][j] = dp[i][j-1] + dp[i-1][j];
                }
            }
            
            return dp[m-1][n-1];
        }
    };
```
- 문제풀이

    매우 간단한 dp 문제

    한 칸에서 갈 수 있는 칸이 오른쪽, 아래 밖에 없기 때문에,

    1, 1 부터 돌면서 왼쪽에서 오는 길의 수 + 위쪽에서 오는 길의 수를 하면 된다.

    오른쪽으로만 가는 길, 아래로만 가는 길은 1로 미리 초기화 해 놓았다.