---
title: "[leetcode] Combination Sum"
date: 2020-01-04
categories: algorithm
---

# Combination Sum

Algorithm: 재귀
Created: Jan 04, 2020 10:25 AM
DoubleChk: No
Type: LeetCode
level: 2
link: https://leetcode.com/problems/combination-sum/

Given a **set** of candidate numbers (`candidates`) **(without duplicates)** and a target number (`target`), find all unique combinations in `candidates` where the candidate numbers sums to `target`.

The **same** repeated number may be chosen from `candidates` unlimited number of times.

**Note:**

- All numbers (including `target`) will be positive integers.
- The solution set must not contain duplicate combinations.

**Example 1:**

    Input: candidates = [2,3,6,7], target = 7,
    A solution set is:
    [
      [7],
      [2,2,3]
    ]

**Example 2:**

    Input: candidates = [2,3,5], target = 8,
    A solution set is:
    [
      [2,2,2,2],
      [2,3,3],
      [3,5]
    ]

---
```c++
    class Solution {
    public:
        
        void recursion(vector <vector<int>> &ans, vector <int> &chosen, vector <int>& candidates, int target, int index){
            if(target < 0){
                return;
            }
            
            if(target == 0){
                ans.push_back(chosen);
                return;
            }
            
            for(int i=index; i<candidates.size(); i++){
                chosen.push_back(candidates[i]);
                recursion(ans, chosen, candidates, target - candidates[i], i);
                chosen.pop_back();
            }
            
        }
        
        vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
            vector <vector<int>> ans;
            vector <int> chosen;
            
            recursion(ans, chosen, candidates, target, 0);
            
            return ans;
        }
    };
```
- 문제 풀이

    target에서 candidates를 재귀로 계속 빼가면서 0이 되면 ans 벡터에 push를 해준다.

    만약 candidates를 뺐는데 음수가 나오면 return 한다. (너무 많이 뺐으므로)

    재귀함수를 호출 하면서 index를 부여 해주는데, 중복이 허용 가능 하기 때문에

    인자로 i를 보내주어 다시 한 번 자기 자신을 chosen에 넣을 수 있도록 해주었다.

- 후기

    :D