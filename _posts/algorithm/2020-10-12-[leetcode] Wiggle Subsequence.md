---
title: "[leetcode] Wiggle Subsequence"
date: 2020-10-12
categories: algorithm
---
## [leetcode] Wiggle Subsequence
[문제 링크](https://leetcode.com/problems/wiggle-subsequence/)

```c++
class Solution {
public:
    int wiggleMaxLength(vector<int>& nums) {
        int n = nums.size();
        if(n == 0) return 0;
        int down[n];
        int up[n];
        memset(down, 0, sizeof(down));
        memset(up, 0, sizeof(up));
        
        up[0] = down[0] = 1;
        for(int i=1; i<nums.size(); i++) {
            if(nums[i-1] < nums[i]) {
                up[i] = down[i-1] + 1;
                down[i] = down[i-1];
            } else if(nums[i-1] > nums[i]) {
                down[i] = up[i-1] + 1;
                up[i] = up[i-1];
            } else {
                down[i] = down[i-1];
                up[i] = up[i-1];
            }
        }
        
        return max(up[n-1], down[n-1]);
    }
};
```
- dp 문제
- down, up, down을 반복하는 배열의 최대 길이를 구하는 문제이다.
- 나올 수 있는 경우의 수는 3가지이다.
  - 올라가는 경우
  - 내려가는 경우
  - 같을 경우
- down 배열과 up 배열을 만들어 최대 길이를 저장 해 준다.
- 올라가는 경우엔 up은 down의 하나 전보다 +1 된 길이이고, down의 길이는 그대로 유지된다.
- 내려가는 경우엔 down은 하나 늘어나고, up은 유지된다.
- 같은 경우에는 둘 다 유지된다.
- 둘 중 더 긴 것을 리턴하면 답이다.