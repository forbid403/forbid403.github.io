---
title: "[leetcode] Wiggle Sort II"
date: 2020-10-10
categories: algorithm
---
## [leetcode] Wiggle Sort II
[문제 링크](https://leetcode.com/problems/wiggle-sort-ii/)


```c++
class Solution {
public:
    void wiggleSort(vector<int>& nums) {
        vector <int> temp = nums;
        sort(temp.begin(), temp.end());
        
        int left = (temp.size()-1) / 2;
        int right = temp.size()-1;
        
        for(int i=0; i<nums.size(); i++) {
            if(i % 2 == 0) {
                nums[i] = temp[left--];
            } else {
                nums[i] = temp[right--];
            }
        }
    }
};
```

- 작은수, 큰수를 번갈아가면서 정렬 하는 문제이다.
- 처음에는 정렬 후에 바텀 업 방식으로 하려고 했는데, 잘 되지 않아서 탑다운 방식으로 풀었다.
- 주어지는 예제는 무조건 맞기 때문에, 번갈아가면서 정렬 하기 위해서는 작은 숫자의 갯수가 반 이상이 되면 안된다.
- 따라서 left를 절반부터 0까지 감소 시키고, right는 끝에서부터 감소시키면 된다.