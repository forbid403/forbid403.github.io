---
title: "[leetcode] Minimum Domino Rotations For Equal Row"
date: 2020-10-19
categories: algorithm
---
## [leetcode] Minimum Domino Rotations For Equal Row
[문제 링크](https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/)

```c++
class Solution {
public:
    int minDominoRotations(vector<int>& A, vector<int>& B) {
        int n = A.size();
        int m = B.size();
        
        for(int i=1; i<=6; i++) {
            int flag = 1;
            int a_cnt = 0, b_cnt = 0;
            for(int j=0; j<A.size(); j++) {
                if(A[j] != i && B[j] != i) { flag = 0; break; }
                else if(A[j] == i && B[j] == i) continue;
                else if(A[j] == i) a_cnt++;
                else if(B[j] == i) b_cnt++;
            }
            
            if(flag) return min(a_cnt, b_cnt);
        }
        
        return -1;
    }
};
```

- if문의 순서만 조심하면 된다.
- medium 까지는 아닌듯..?