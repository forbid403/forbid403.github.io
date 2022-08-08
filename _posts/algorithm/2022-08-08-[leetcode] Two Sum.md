---
title: "[leetcode] Two Sum"
date: 2022-08-08
categories: algorithm
---

[문제 링크](https://leetcode.com/problems/two-sum/)


```js
var twoSum = function(nums, target) {
    const m = new Map();
    
    nums.forEach((num, index) => m.set(num, index));
    
    for(let i = 0; i < nums.length; i++) {
        const temp = target - nums[i];
        if (m.has(temp) && m.get(temp) !== i) {
            return [i, m.get(temp)];
        }
    }
};
```

```js
var twoSum = function(nums, target) {
    const m = new Map();
        
    for(let i = 0; i < nums.length; i++) {
        const temp = target - nums[i];
        if (m.has(temp)) {
            return [i, m.get(temp)];
        }
        
        m.set(nums[i], i);
    }
};
```

- 가장 간단한 방법은 배열을 전부 돌면서 하나씩 더해보는 것이다.
- 성능을 개선하는 방법은 `map`을 활용 하는 방법이다. O(N~2N)
    - 1. 맵에 숫자, 인덱스로 저장 해 두고 배열을 돌면서 `target - nums[i]` 값이 맵에 존재하는지 확인한다.
    - 2. 배열을 돌면서 존재하지 않는 경우에만 맵에 넣어둘 수도 있다.
- 런타임 시간은 1번이 더 빨랐지만 메모리는 2번이 덜 차지한다.