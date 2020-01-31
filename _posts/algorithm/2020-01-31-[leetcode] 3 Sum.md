---
title: "[leetcode] 3 Sum"
date: 2020-01-31
categories: algorithm
---
# 3Sum

Algorithm: 투포인터
Created: Nov 24, 2019 7:53 PM
DoubleChk: Yes
Type: LeetCode
level: 2
link: https://leetcode.com/problems/3sum/

Given an array `nums` of *n* integers, are there elements *a*, *b*, *c* in `nums` such that *a* + *b* + *c* = 0? Find all unique triplets in the array which gives the sum of zero.

**Note:**

The solution set must not contain duplicate triplets.

**Example:**

    Given array nums = [-1, 0, 1, 2, -1, -4],
    
    A solution set is:
    [
      [-1, 0, 1],
      [-1, -1, 2]
    ]

---
```c++
    class Solution {
    public:
       vector<vector<int>> threeSum(vector<int>& nums) {
            vector <vector<int>> ans;
            sort(nums.begin(), nums.end());
            int numsLen = nums.size() -1;
    
            for(int i=0; i<numsLen; i++){
                int x = nums[i];
                if(x > 0 || nums[numsLen] < 0) break;
                if(i != 0 && nums[i] == nums[i-1]) continue;
    
                int s = i+1;
                int e = numsLen;
                int target = abs(x);
    
                while(s < e){
                    
                    if(nums[s] + nums[e] < target){
                        s++;
                    }else if(nums[s] + nums[e] > target){
                            e--;
                    }else{
                        while(s < e && nums[s] == nums[s+1]) s++;
                        while(s < e && nums[e] == nums[e-1]) e--;
                        ans.push_back({x, nums[s], nums[e]});
                        s++;
                        e--;
                    }
    
                }
            }
    
            return ans;
            }
    };
```
- 문제 풀이

    한 개를 x로 잡고, 나머지 두 숫자를 two pointer로 풀었다.

    투포인터는 정렬이 되어야 하므로 정렬을 한다.

    x가 0이상이라면 아무리 더해도 양수이기 때문에 break를 해준다.

    또 배열의 마지막 (제일 큰 값)이 음수여도 아무리 더해도 음수이기 때문에 break를 해준다.

    만약 똑같은 숫자가 연속으로 있다면 중복이기 때문에 continue를 해준다.

    그리고 투 포인터로 target 숫자를 찾아간다.

    하나의 조합을 찾았을 때, 같은 숫자가 연속으로 있는 경우라면 중복이기 때문에 똑같은 숫자가 아닐 때까지 index를 update 시켜준다.

- 후기

    세상엔 참 천재들이 많다 ! 😲