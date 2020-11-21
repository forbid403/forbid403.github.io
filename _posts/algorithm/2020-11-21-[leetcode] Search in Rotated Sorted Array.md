---
title: "[leetcode] Search in Rotated Sorted Array"
date: 2020-11-21
categories: algorithm
---
## [leetcode] Search in Rotated Sorted Array
[문제 링크](https://leetcode.com/problems/search-in-rotated-sorted-array/)

```c++
class Solution {
public:
    int search(vector<int>& arr, int target) {
        int left = 0;
        int right = arr.size()-1;
        
        while(left <= right){
            int mid = left + (right - left) / 2;
            
            if(arr[mid] == target) return mid;
            else if(arr[mid] <= arr[right]) {
                if(arr[mid] < target && target <= arr[right]) left = mid + 1;
                else right = mid - 1;
            } else {
                if(arr[mid] > target && target >= arr[left]) right = mid - 1;
                else left = mid + 1;
            }
        }
        return -1;
    }
};
```

- 엄청 헷갈리는 문제라서 제대로 정리하기 위해 기록한다.
- 이분탐색으로 접근하면 되는 문제이다.
<img width="729" alt="ex1" src="https://user-images.githubusercontent.com/41617388/99877171-8623ff80-2c3f-11eb-9786-b0503962fe91.png">
<img width="721" alt="ex2" src="https://user-images.githubusercontent.com/41617388/99877173-88865980-2c3f-11eb-809a-7b33ab8b6cfe.png">
- 첫 번째 배열과 두 번째 배열로 나뉠 것이다.
  - `4,5,6,7,1,2,3`이라면, `4,5,6,7`은 첫 번째 배열, `1,2,3`을 두 번째 배열이라고 하자.
- `arr[mid] <= arr[right]`일 때, (mid->right으로 오름차순으로 배열된 배열)
  - `arr[mid] < target <= arr[right]` 이라면, target과 mid가 같은 배열에 있기 때문에 left를 mid+1로 옮겨서 범위를 좁혀준다.
  - 이외의 경우에는 target과 mid가 다른 배열에 있기 때문에 right을 mid-1로 옮겨준다.
- 이외의 경우일 때, (섞인 배열)
  - `arr[left] <= target < arr[mid]` 이라면, target과 mid가 다른 배열에 있기 때문에 right = mid-1이 된다.
  - 이하 같다.