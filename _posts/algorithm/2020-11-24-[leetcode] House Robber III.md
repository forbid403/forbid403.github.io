---
title: "[leetcode] House Robber III"
date: 2020-11-24
categories: algorithm
---
## [leetcode] House Robber III
[문제 링크](https://leetcode.com/problems/house-robber-iii/)

### Recursive (시간 초과)
```c++
class Solution {
public:
    int dfs(TreeNode *cur, bool isParentRobbed) {
        if(cur == NULL) return 0;
        
        if(isParentRobbed) {
            // cannot rob here
            return dfs(cur->left, false) + dfs(cur->right, false);
        } else {
            // rob here
            int rob = cur->val + dfs(cur->left, true) + dfs(cur->right, true);
            int not_rob = dfs(cur->left, false) + dfs(cur->right, false);
            
            return max(rob, not_rob);
        }
        
    }
    
    int rob(TreeNode* root) {
        return dfs(root, false);
    }
};
```
- 연결된 노드끼리 도둑질을 하면 안 되기 때문에, 부모 노드에 따라 훔칠지 훔치지 않을지가 결정된다.
- 만약 부모 노드를 훔쳤다면, 자식 노드는 훔치면 안된다.
- 부모 노드를 훔치지 않았다면, 자식 노드를 훔치거나, 훔치지 않거나의 두 경우로 나뉜다.
  - 이 경우에는 훔친 경우, 훔치지 않은 경우를 비교 해 큰 값을 저장해주면 된다. 
- 이렇게 풀면 시간초과가 난다.

### Memoization
```c++
class Solution {
public:
    unordered_map<TreeNode*, vector<int>> m;
    int dfs(TreeNode *cur, bool isParentRobbed) {
        if(cur == NULL) return 0;
        
        if(m.find(cur) != m.end() && m[cur][isParentRobbed] >= 0) return m[cur][isParentRobbed];
        else {
            if(m.find(cur) == m.end()) m[cur] = {-1, -1};
            
            int rob = cur->val + dfs(cur->left, true) + dfs(cur->right, true);
            int not_rob = dfs(cur->left, false) + dfs(cur->right, false);
            if(isParentRobbed) return m[cur][isParentRobbed] = not_rob;
            else return m[cur][isParentRobbed] = max(not_rob, rob);
        }
        
    }
    
    int rob(TreeNode* root) {
        return dfs(root, false);
    }
};
```
- 중복된 계산을 제거 해 주기 위해 해쉬 맵을 사용해 결과를 저장해준다.
- 맵에 계산 결과가 저장 되어 있다면, 해당 결과를 리턴한다.
- 결과가 저장 되어 있지 않다면 훔친 경우, 훔치지 않은 경우를 맵에 저장하여 리턴한다.