---
title: "[leetcode] Jump Game"
date: 2020-04-19
categories: algorithm
---
# Jump Game

Algorithm: 그리디
Created: Apr 18, 2020 9:36 PM
DoubleChk: Yes
Type: LeetCode
level: 2
link: https://leetcode.com/problems/jump-game/

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

**Example 1:**

    Input: [2,3,1,1,4]
    Output: true
    Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
    

**Example 2:**

    Input: [3,2,1,0,4]
    Output: false
    Explanation: You will always arrive at index 3 no matter what. Its maximum
                 jump length is 0, which makes it impossible to reach the last index.

---

- Top-Down
```c++
    class Solution {
    public:
        bool canJump(vector<int>& nums) {
            int farest = 0;
            for(int i=0; i<=farest; i++){
            	farest = max(farest, nums[i] + i);
            	if(farest >= nums.size()-1){
            		return true;
            	}
            }
            return false;
        }
    };
```
- Bottom-Up
```c++
    class Solution {
    public:
        bool canJump(vector<int>& nums) {
            int lastGoodIdx = nums.size() - 1;
            for(int i=lastGoodIdx; i>=0; i--){
            	if(nums[i] + i >= lastGoodIdx){
            		lastGoodIdx = i;
            	}
            }
            return lastGoodIdx == 0;
        }
    };
```
---

- 문제 풀이

    매우 유명한 알고리즘 중 하나이다.

    dfs로 풀게 되면 시간초과가 나기 때문에, 그리디로 풀어야 한다.

    top-down방식과 bottom-up방식 두 개 다 풀어보았다.

    ### top-down

    현재 인덱스에서 가장 멀리 갈수 있는 farest변수를 선언한다.

    이 farest를 반복문을 돌면서 update 해 준다.

    만약 farest가 배열의 길이보다 크거나 같으면(배열의 길이가 1개일 수도 있으므로) true를 리턴해주고,

    반복문이 종료된다면 false를 리턴해준다.

    ### bottom-up

    끝에서부터 시작하면서, lastGoodIdx를 update해주는 방식이다.

    앞의 인덱스가 lastGoodIdx에 갈 수 있다면(nums[i] + i), lastGoodIdx를 업데이트 해 준다.

    만약 lastGoodIdx가 0이면 앞까지 도달했기 때문에 true이고, 아니라면 false이다.