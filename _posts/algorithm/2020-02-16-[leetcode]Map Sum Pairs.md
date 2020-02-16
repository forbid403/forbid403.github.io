---
title: "[leetcode] Map Sum Pairs"
date: 2020-02-16
categories: algorithm
---

Implement a MapSum class with insert, and sum methods.

For the method insert, you'll be given a pair of (string, integer). The string represents the key and the integer represents the value. If the key already existed, then the original key-value pair will be overridden to the new one.

For the method sum, you'll be given a string representing the prefix, and you need to return the sum of all the pairs' value whose key starts with the prefix.

Example 1:

Input: insert("apple", 3), Output: Null
Input: sum("ap"), Output: 3
Input: insert("app", 2), Output: Null
Input: sum("ap"), Output: 5


--

```c++
class MapSum {
public:
    
    unordered_map<string, int> m;
    
    void insert(string key, int val) {
        m[key] = val;
    }
    
    int sum(string prefix) {
        int ret = 0;
        for(auto cur : m){
            int flag = 1;
            for(int j=0; j<prefix.length(); j++){
                string compare = cur.first;
                if(prefix[j] != compare[j]){
                    flag = 0;
                    break;
                }
            }
            if(flag) ret += cur.second;
        }
        
        return ret;
    }
};

```

- 문제 풀이
    맵으로 insert를 해준 다음,
    Prefix의 길이만큼 돌면서 flag로 맞는지 아닌지 체크 해 준다.
- 후기
    여행중 코딩 ㅎㅅㅎ ..