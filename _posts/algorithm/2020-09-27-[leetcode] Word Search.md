---
title: "[leetcode] Word Search"
date: 2020-09-27
categories: algorithm
---
## [leetcode] Word Search
[문제 링크](https://leetcode.com/problems/word-search/)

```c++
class Solution {
public:
    int flag;
    int visit[201][201];
    int dx[4] = {0, 0, -1, 1};
    int dy[4] = {-1, 1, 0, 0};
    
    void dfs(vector<vector<char>>& board, int x, int y, string word, int idx) {
        if(flag) return;
        if(idx == word.length()) {
            flag = 1;
            return;
        }
               
        for(int i=0; i<4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];
            char target = word[idx];
            if(nx < 0 || ny < 0 || nx >=board.size() || ny >= board[0].size()) continue;
            if(visit[nx][ny] || board[nx][ny] != target) continue;
            visit[nx][ny] = 1;
            dfs(board, nx, ny, word, idx + 1);
            visit[nx][ny] = 0;
        }
        
    }
    bool exist(vector<vector<char>>& board, string word) {
        int n = board.size();
        int m = board[0].size();
        
        for(int i=0; i<n; i++) {
            for(int j=0; j<m; j++) {
                if(board[i][j] == word[0]) {
                    visit[i][j] = 1;
                    dfs(board, i, j, word, 1);
                    if(flag) return true;
                    visit[i][j] = 0;
                }
            }
        }
        return false;
    }
};
```

- 백트래킹 + dfs 문제.
- 방문 처리를 주의해야 한다. 이전에 탐색 했던 문자도 탐색 할 수 있되, 해당 dfs 스코프에서는 다시 방문 할 수 없도록 해야 한다.
- `word`의 첫번째 글자와 똑같은 경우에만 dfs를 탐색 하면 된다.
- 글자를 찾을 때마다 인덱스를 늘려가면서, 마지막 글자를 찾은 경우에는 `flag`로 리턴 해 준다.