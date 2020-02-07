---
title: "[leetcode] Sort Characters By Frequency"
date: 2020-02-07
categories: algorithm
---
# Sort Characters By Frequency

Algorithm: 해쉬
DoubleChk: No
Type: LeetCode
level: 2
link: https://leetcode.com/problems/sort-characters-by-frequency/

Given a string, sort it in decreasing order based on the frequency of characters.

**Example 1:**

    Input:
    "tree"
    
    Output:
    "eert"
    
    Explanation:
    'e' appears twice while 'r' and 't' both appear once.
    So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

**Example 2:**

    Input:
    "cccaaa"
    
    Output:
    "cccaaa"
    
    Explanation:
    Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
    Note that "cacaca" is incorrect, as the same characters must be together.

**Example 3:**

    Input:Output:Explanation:

---
```c++
    class Solution {
    public:
        static bool myCompare(pair <char, int> a, pair <char, int> b){
            return a.second > b.second;
        }
        string frequencySort(string s) {
            map <char, int> mp;
            int n = s.length();
            
            //update frequency
            for(char c : s){
                mp[c]++;
            }
            
            vector < pair<char, int>> v(mp.begin(), mp.end());
            
            //sort by frequency
            sort(v.begin(), v.end(), myCompare);
            
            //add to answer string by frequency
            string ans = "";
            for(auto &i : v){
                //vector.second 만큼의 빈도로 있기 때문에
                for(int j=0; j<i.second; j++){
                    ans += i.first;
                }
            }
            return ans;
            
        }
    };
```