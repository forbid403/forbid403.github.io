---
title: "[leetcode] Top K Frequent Words"
date: 2020-02-08
categories: algorithm
---
# Top K Frequent Words

Algorithm: 정렬, 해쉬
Created: Feb 08, 2020 11:25 PM
DoubleChk: No
Type: LeetCode
level: 2
link: https://leetcode.com/problems/top-k-frequent-words/

Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

**Example 1:**

    Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
    Output: ["i", "love"]
    Explanation: "i" and "love" are the two most frequent words.
        Note that "i" comes before "love" due to a lower alphabetical order.

**Example 2:**

    Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
    Output: ["the", "is", "sunny", "day"]
    Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
        with the number of occurrence being 4, 3, 2 and 1 respectively.

**Note:**

1. You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
2. Input words contain only lowercase letters.

**Follow up:**

1. Try to solve it in O(n log k) time and O(n) extra space.

---
```c++
    class Solution {
    public:
        static bool myCompare(const pair<string, int>& a, const pair<string, int>&b){
            if(a.second==b.second)
               return a.first<b.first;
            return a.second>b.second;
        }
        vector<string> topKFrequent(vector<string>& words, int k) {
            unordered_map <string, int> m;
            for(auto str : words){
                m[str]++;
            }
            
            vector <pair<string, int>> temp;
            
            for(auto i : m){
                temp.push_back(make_pair(i.first, i.second));
            }
            
            sort(temp.begin(), temp.end(), myCompare);
            
            vector <string> ans;
            for(int i=0; i<k; i++){
                ans.push_back(temp[i].first);
    
            }
            
            return ans;
        }
        
    };
```
- 문제 풀이

    맵으로 string의 갯수를 세어준다.

    value 값으로 정렬을 해야 하기 때문에, vector를 하나 생성 해 복사 해 준다.

    sort에서 compare 함수를 통해 value값을 비교한다.

    만약 갯수가 같다면, string을 비교 해 알파벳 순서가 더 빠른 애로 정렬한다.

    정렬이 끝난 후 정답 벡터에 k만큼 push 한다.

- 후기

    50퍼정도의 속도가 나왔다 더 빨리 푸는 방법이 있으려나