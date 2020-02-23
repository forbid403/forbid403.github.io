---
title: "[leetcode] Validate Binary Tree Nodes"
date: 2020-02-23
categories: algorithm
---

# Validate Binary Tree Nodes

Algorithm: bfs
Created: Feb 23, 2020 1:59 PM
DoubleChk: No
Type: LeetCode
level: 2
link: https://leetcode.com/problems/validate-binary-tree-nodes/

You have `n` binary tree nodes numbered from `0` to `n - 1` where node `i` has two children `leftChild[i]` and `rightChild[i]`, return `true` if and only if **all** the given nodes form **exactly one** valid binary tree.

If node `i` has no left child then `leftChild[i]` will equal `-1`, similarly for the right child.

Note that the nodes have no values and that we only use the node numbers in this problem.

**Example 1:**

![https://assets.leetcode.com/uploads/2019/08/23/1503_ex1.png](https://assets.leetcode.com/uploads/2019/08/23/1503_ex1.png)

    Input: n = 4, leftChild = [1,-1,3,-1], rightChild = [2,-1,-1,-1]
    Output: true

**Example 2:**

![https://assets.leetcode.com/uploads/2019/08/23/1503_ex2.png](https://assets.leetcode.com/uploads/2019/08/23/1503_ex2.png)

    Input: n = 4, leftChild = [1,-1,3,-1], rightChild = [2,3,-1,-1]
    Output: false

**Example 3:**

![https://assets.leetcode.com/uploads/2019/08/23/1503_ex3.png](https://assets.leetcode.com/uploads/2019/08/23/1503_ex3.png)

    Input: n = 2, leftChild = [1,0], rightChild = [-1,-1]
    Output: false

**Example 4:**

![https://assets.leetcode.com/uploads/2019/08/23/1503_ex4.png](https://assets.leetcode.com/uploads/2019/08/23/1503_ex4.png)

    Input: n = 6, leftChild = [1,-1,-1,4,-1,-1], rightChild = [2,-1,-1,5,-1,-1]
    Output: false

**Constraints:**

- `1 <= n <= 10^4`
- `leftChild.length == rightChild.length == n`
- `-1 <= leftChild[i], rightChild[i] <= n - 1`

---

    class Solution {
    public:
        int check[10001];
        queue <int> q;
        bool validateBinaryTreeNodes(int n, vector<int>& leftChild, vector<int>& rightChild) {
            q.push(0);
            int cnt = 0;
            while(!q.empty()){
                int top = q.front();
                if(check[top]) return false;
                check[top] = 1;
                q.pop();
                cnt++;
                
                if(leftChild[top] != -1) q.push(leftChild[top]);
                if(rightChild[top] != -1) q.push(rightChild[top]);
                
            }
            
            if(cnt != n) return false;
            
            return true;
        }
    };

- 문제 풀이

    bfs로 풀었다.

    올바르지 않은 트리일 경우가

    1. 사이클이 생기는 경우
    2. 두 개로 나눠진 경우

    이렇게 생각 했다. (예시에 나온 경우들)

    풀이 방법은

    1. check 배열로 방문 처리를 해 준다 → 이미 방문 했다면 cycle
    2. cnt 변수로 노드 갯수를 세준다. queue가 비었을 때, cnt와 n이 같지 않다면 트리가 1개 이상인 것
    3. 위 두 경우에 걸리지 않았다면 true
- 후기

    첫번째 콘테스트였다.

    이게 될까? 했는데 1트에 됨.. ?

    30개밖에 테스트케이스가 없어서 예외가 더 있을 것 같은데 그래도 풀었으 ㅎㅅㅎ