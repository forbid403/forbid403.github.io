---
title: "[leetcode] Closest Divisors"
date: 2020-02-27
categories: algorithm
---
# Closest Divisors

Algorithm: 수학
Created: Feb 27, 2020 11:35 PM
DoubleChk: No
Type: LeetCode
level: 2
link: https://leetcode.com/problems/closest-divisors/

Given an integer `num`, find the closest two integers in absolute difference whose product equals `num + 1` or `num + 2`.

Return the two integers in any order.

**Example 1:**

    Input: num = 8
    Output: [3,3]
    Explanation: For num + 1 = 9, the closest divisors are 3 & 3, for num + 2 = 10, the closest divisors are 2 & 5, hence 3 & 3 is chosen.

**Example 2:**

    Input: num = 123
    Output: [5,25]

**Example 3:**

    Input: num = 999
    Output: [40,25]

**Constraints:**

- `1 <= num <= 10^9`

---
```c++
    class Solution {
    public:
        vector<int> closestDivisors(int num) {
            vector <int> ans;
            
            int num1 = num+1, num2 = num+2, dist = INT_MAX;
            
            for(int i=sqrt(num1); i>=1; i--){
                if(num1 % i == 0){
                    ans = {i, num1/i};
                    dist = num1 / i - i;
                    break;
    
                }
            }
            
            for(int i=sqrt(num2); i>=1; i--){
                if(num2 % i == 0){
                    if(dist > (num2 / i - i)){
                        ans = {i, num2/i};
                    }
                    break;
                }
                
            }
            
            return ans;
        }
    };
```
- 문제 풀이

    숫자의 약수의 쌍들 중, 두 수의 숫자의 차가 제일 적은 쌍을 찾으면 된다.

    예를 들어, 100일 때는 → 10*10으로 둘의 차이가 0으로 제일 작다.

    100의 약수는 다음과 같다

        1*100    ^
        2*50     |
        4*25     |
        5*20     |  (Increasing distance as we go up)
        10*10 <- sqrt, we see repetitions after this point (Also notice this is the closest)
        20*5 
        25*4 
        2*50 
        100*1

    제곱근을 기준으로 두 번 반복 되므로, sqrt(num)을 해준다면 한 번만 반복문을 돌아도 된다는 것이다.

    그리고 하나의 수가 작아질 수록 차이가 커진다는 것을 볼 수 있다.

    따라서, num1, num2를 제곱근 한 곳부터 ~ 1이 될 때까지 반복하며,

    만약 나누어 떨어진다면, 두 수의 차이를 저장하고 반복문을 멈춘다.

    왜냐하면 반복문을 진행할 수록 두 수의 차이가 벌어지기 때문이다.

    num1을 한 후 num2에서도 동일한 과정을 반복하고,

    차이 (dist)가 제일 적은 것을 저장해주면 된다.