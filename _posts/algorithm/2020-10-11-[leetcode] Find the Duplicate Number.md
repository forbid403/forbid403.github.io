---
title: "[leetcode] Find the Duplicate Number"
date: 2020-10-11
categories: algorithm
---
## [leetcode] Find the Duplicate Number
[문제 링크](https://leetcode.com/problems/find-the-duplicate-number/)

```c++
class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        
        int turtle = nums[0];
        int rabbit = nums[0];
        
        do {
            turtle = nums[turtle];
            rabbit = nums[nums[rabbit]];
        } while(turtle != rabbit);

        turtle = nums[0];
        
        while(turtle != rabbit) {
            turtle = nums[turtle];
            rabbit = nums[rabbit];
        }
        
        return turtle;   
    }
};
```
- 처음엔 정렬, 해시맵으로 접근 했는데, 문제의 조건이 배열 수정 불가, `O(1)`의 메모리, `O(n^2)` 시간복잡도라서 조건을 만족하지 못했다.
- 검색 해 보니 플로이드의 토끼와 거북이 알고리즘을 사용하면 된다.
- 이 알고리즘은 사이클을 감지할 수 있다. 중복된 숫자가 있다면 사이클이 있다는 것이므로 이 알고리즘을 사용하면 된다.
- 거북이는 한 칸씩 이동하고, 토끼는 거북이보다 두 배 빨리 (두 칸씩) 이동하면 된다.
- 만약 만나게 된다면 하나의 포인터를 배열의 처음으로 돌아가게 한 다음, 두 포인터 모두 한 칸씩 이동하게 한다.
- 이 때 만나는 곳이 사이클의 시작 부분이기 때문에 중복된 숫자를 찾을 수 있다.
- https://www.youtube.com/watch?v=9YTjXqqJEFE&ab_channel=JomaClass 여기에 증명이 잘 나와있으므로 참고!