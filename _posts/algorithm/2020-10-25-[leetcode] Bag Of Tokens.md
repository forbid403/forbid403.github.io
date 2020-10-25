---
title: "[leetcode] Bag of Tokens"
date: 2020-10-25
categories: algorithm
---
## [leetcode] Remove Duplicate Letters
[문제 링크](https://leetcode.com/problems/bag-of-tokens/)

```c++
class Solution {
public:
    int bagOfTokensScore(vector<int>& tokens, int P) {
        sort(tokens.begin(), tokens.end());
        int score = 0;
        int answer = 0;        
        int left = 0;
        int right = tokens.size() - 1;
        
        while(left <= right) {
            if (P >= tokens[left]) {
                score++;
                P -= tokens[left++];
                answer = max(answer, score);
            } else if(score) {
                score--;
                P += tokens[right--]; 
            } else break;
        }

        return answer;
    }
};
```
- greedy + 투 포인터로 푸는 문제이다.
- 문제가 영어라 조금 헷갈렸는데, 해석 해 보자면 다음과 같다.
  - `Power`가 `Tokens[i]`보다 크다면 `Power`를 `Tokens[i]`만큼 차감 하고 `score`를 하나 더할 수 있다.
  - `score`가 1 이상이라면, `score`를 하나 차감하고 `Tokens[i]`만큼 `Power`에 더할 수 있다.
  - 모든 토큰을 다 사용할 필요가 없다.
  - 최대로 가질 수 있는 점수를 구하면 된다.
- 토큰을 크기 순서대로 정렬 한 후, left, right 포인터를 두어 최소 최대값을 가리킨다.
- 토큰을 구입할 수 있다면, 가장 작은 토큰부터 구입 해 나간다.
- 더 이상 구매할 수 없다면, score를 하나 차감하고 가장 큰 토큰을 구입한다.
- left가 right를 넘어갈 때까지 반복한다. (두 포인터가 만날 때 까지)
- score가 올라갈 때마다 answer를 갱신 해 주면 된다.