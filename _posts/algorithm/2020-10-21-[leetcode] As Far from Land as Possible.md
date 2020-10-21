---
title: "[leetcode] As Far from Land as Possible"
date: 2020-10-21
categories: algorithm
---
## [leetcode] As Far from Land as Possible
[문제 링크](https://leetcode.com/problems/as-far-from-land-as-possible/)

```c++
class Solution {
public:
    int answer = -1;
    int m, n;
    void bfs(vector<vector<int>>& grid, queue <pair<int, int>>& q) {
        int dx[4] = {0, 0, -1, 1};
        int dy[4] = {-1, 1, 0, 0};

        while(!q.empty()) {
            int sz = q.size();
            answer++;
            
            while(sz--) {
                int topx = q.front().first;
                int topy = q.front().second;
                q.pop();
                
                for(int i=0; i<4; i++) {
                    int nx = topx + dx[i];
                    int ny = topy + dy[i];
                    
                    if(nx < 0 || ny < 0 || nx >= m || ny >= n || grid[nx][ny]) continue;
                    q.push({nx, ny});
                    grid[nx][ny] = grid[topx][topy] + 1;
                }
            }
        }
        
    }
    int maxDistance(vector<vector<int>>& grid) {
        
        m = grid.size();
        n = grid[0].size();
        queue <pair<int, int>> q;

        for(int i=0; i<m; i++) {
            for(int j=0; j<n; j++) {
                if(grid[i][j]) q.push({i, j});
            }
        }
        
        if(q.size() == m * n || !q.size()) return -1;
        
        bfs(grid, q);
        
        return answer;
    }
};
```
- bfs로 푸는 문제이다.
- 맵을 돌면서 땅인 경우 큐에 삽입한다. -> 이 경우를 제외하기 위해 answer를 -1로 초기화시켜준다.
- 모든 맵이 땅이거나, 물일 경우는 -1을 리턴하고 아니라면 bfs를 돈다.
- 땅의 갯수만큼만 돌면서 물인 경우에 넣어준다.
- bfs를 돌 때마다 answer를 1씩 올려준다.
