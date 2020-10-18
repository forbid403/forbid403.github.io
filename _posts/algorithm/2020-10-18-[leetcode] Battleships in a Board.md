---
title: "[leetcode] Battleships in a Board"
date: 2020-10-18
categories: algorithm
---
## [leetcode] Battleships in a Board
[문제 링크](https://leetcode.com/problems/battleships-in-a-board/)

```c++
class Solution {
public:
    int dx[4] = {-1, 1, 0, 0};
    int dy[4] = {0, 0, -1, 1};
    int answer;
    
    void dfs(int x, int y, vector<vector<char>>& board) {
        
        for(int i=0; i<4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];
            
            if(nx < 0 || ny < 0 || nx >= board.size() || ny >= board[0].size() || board[nx][ny] != 'X') continue;
            board[nx][ny] = '.';
            dfs(nx, ny, board);
        }
    }
    
    int countBattleships(vector<vector<char>>& board) {
        
        int n = board.size();
        int m = board[0].size();
        for(int i=0; i<n; i++) {
            for(int j=0; j<m; j++) {
                if(board[i][j] == 'X') {
                    answer++;
                    dfs(i, j, board);
                }
            }
        }
        
        return answer;
    }
};
```
- 단순한 dfs 문제.
- 지금 생각 해 보니 board를 수정하면 안되므로... 방문 처리를 다르게 해줘야 할 것 같다.