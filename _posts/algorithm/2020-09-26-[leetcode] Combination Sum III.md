---
title: "[leetcode] Combination Sum III"
date: 2020-09-26
categories: algorithm
---

```c++
class Solution {
public:
    void dfs(vector <vector<int>>&ans, vector <int>& chosen, vector <int>&nums, int idx, int target, int k) {
        if(target < 0) return;
        if(target == 0 && k == chosen.size()) {
          ans.push_back(chosen);
          return;
        }
        
        for(int i=idx; i<nums.size(); i++) {
          chosen.push_back(nums[i]);
          dfs(ans, chosen, nums, i+1, target - nums[i], k);
          chosen.pop_back();
        }
    }
    
    vector<vector<int>> combinationSum3(int k, int n) {
      vector <vector<int>> ans;
      vector <int> chosen;
      vector <int> nums;
      for(int i=1; i<=9; i++) nums.push_back(i);
      dfs(ans, chosen, nums, 0, n, k);
      return ans;
    }
};
```
- 조합 공부하면서 푼 문제
- 1-9까지의 숫자를 벡터에 넣어 주고, 백트래킹 하면서 target을 하나 하나 빼 주면 된다.
- k만큼 고르고, 구하려는 숫자가 됐을 때 정답 벡터에 넣어주면 된다.