---
title: "[leetcode] Trapping Rain Water"
date: 2020-10-26
categories: algorithm
---
## [leetcode] Trapping Rain Water
[문제 링크](https://leetcode.com/problems/trapping-rain-water/)

```c++
class Solution {
public:
    int trap(vector<int>& height) {
        int n = height.size();
        if(!n) return 0;
        
        int left = 0;
        int right = n-1;
        int max_left = height[left];
        int max_right = height[right];
        int ans = 0;
        while(left < right) {
            if(height[left] > height[right]) {
                max_right = max(max_right, height[right]);
                ans += max_right - height[right];
                right--;   
            } else {
                max_left = max(max_left, height[left]);
                ans += max_left - height[left];
                left++;
            }
        }
        return ans;
    }
};
```

- 투 포인터로 푸는 문제.
- 문제 접근 방식이 조금 헷갈렸다.
![KakaoTalk_Photo_2020-10-26-14-59-36](https://user-images.githubusercontent.com/41617388/97138595-e9835480-179b-11eb-91d6-8d5a53b2542d.png)
  - 이렇게 된 그림을 보자마자 아!! 함.. ㅋㅋㅅㅋㅅㅋㅅ
  - 가운데 있는 공간에 물을 얼마만큼 채울 수 있을까?
  - left와 right중 작은 막대와의 차이만큼 채울 수 있다.
- 따라서 left의 값과 right의 값을 비교 해 나가면서 진행한다.
- max_left, max_right를 지속적으로 갱신 해 주면서 가장 높은 막대를 저장한다.
- left의 값과 right의 값을 비교 해, 더 작은 막대의 차이가 담을 수 있는 물의 양이다.
- left, right가 만날 때까지 반복하면 된다.