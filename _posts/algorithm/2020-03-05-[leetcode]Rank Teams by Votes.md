---
title: "[leetcode] Rank Teams by Votes"
date: 2020-03-05
categories: algorithm
---
# Rank Teams by Votes

Algorithm: 배열, 정렬
Created: Mar 04, 2020 3:09 PM
DoubleChk: No
Type: LeetCode
level: 2
link: https://leetcode.com/problems/rank-teams-by-votes/

In a special ranking system, each voter gives a rank from highest to lowest to all teams participated in the competition.

The ordering of teams is decided by who received the most position-one votes. If two or more teams tie in the first position, we consider the second position to resolve the conflict, if they tie again, we continue this process until the ties are resolved. If two or more teams are still tied after considering all positions, we rank them alphabetically based on their team letter.

Given an array of strings `votes` which is the votes of all voters in the ranking systems. Sort all teams according to the ranking system described above.

Return *a string of all teams* **sorted** by the ranking system.

**Example 1:**

    Input: votes = ["ABC","ACB","ABC","ACB","ACB"]
    Output: "ACB"
    Explanation: Team A was ranked first place by 5 voters. No other team was voted as first place so team A is the first team.
    Team B was ranked second by 2 voters and was ranked third by 3 voters.
    Team C was ranked second by 3 voters and was ranked third by 2 voters.
    As most of the voters ranked C second, team C is the second team and team B is the third.

**Example 2:**

    Input: votes = ["WXYZ","XYZW"]
    Output: "XWYZ"
    Explanation: X is the winner due to tie-breaking rule. X has same votes as W for the first position but X has one vote as second position while W doesn't have any votes as second position.

**Example 3:**

    Input: votes = ["ZMNAGUEDSJYLBOPHRQICWFXTVK"]
    Output: "ZMNAGUEDSJYLBOPHRQICWFXTVK"
    Explanation: Only one voter so his votes are used for the ranking.

**Example 4:**

    Input: votes = ["BCA","CAB","CBA","ABC","ACB","BAC"]
    Output: "ABC"
    Explanation: 
    Team A was ranked first by 2 voters, second by 2 voters and third by 2 voters.
    Team B was ranked first by 2 voters, second by 2 voters and third by 2 voters.
    Team C was ranked first by 2 voters, second by 2 voters and third by 2 voters.
    There is a tie and we rank teams ascending by their IDs.

**Example 5:**

    Input: votes = ["M","M","M","M"]
    Output: "M"
    Explanation: Only team M in the competition so it has the first rank.

**Constraints:**

- `1 <= votes.length <= 1000`
- `1 <= votes[i].length <= 26`
- `votes[i].length == votes[j].length` for `0 <= i, j < votes.length`.
- `votes[i][j]` is an English **upper-case** letter.
- All characters of `votes[i]` are unique.
- All the characters that occur in `votes[0]` **also occur** in `votes[j]` where `1 <= j < votes.length`.

---
```c++
    class Solution {
    public:
        string rankTeams(vector<string>& votes) {
            vector<vector<int>> rank(26, vector<int>(26, 0));
            for(auto v : votes){
                for(int i=0; i<v.length(); i++){
                    rank[v[i] - 'A'][i]++;
                }
            }
            
            auto cmp = [&](char a, char b){
                return rank[a - 'A'] > rank[b - 'A'] ||
                    rank[a - 'A'] == rank[b - 'A'] && a < b;
            };
            
            string x = votes[0];
            sort(begin(x), end(x), cmp);
            return x;
        }
    };
```
- 문제 풀이

    람다식을 이용해서 sorting 하여 푸는 문제.

    일단 각 글자들이 얼마나 나오는지 체크 해 준다.

    그리고 sorting을 해주는데, cmp라는 람다 함수를 비교함수로 사용한다.

    랭킹이 큰 것, 만약 같다면 알파벳 순서가 빠른 순서로 정렬한다.

- 후기

    contest 2회차

    한문제밖에 못풀었는데 랭킹이 올랐다

    랭작 꿀잼