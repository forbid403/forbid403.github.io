---
title: "[leetcode] Minimum Depth of Binary Tree, Maximum Depth of Binary Tree"
date: 2020-10-23
categories: algorithm
---
## [leetcode] Minimum Depth of Binary Tree
[문제 링크](https://leetcode.com/problems/minimum-depth-of-binary-tree/)

```c++
class Solution {
public:
    int minDepth(TreeNode* root) {
        if(!root) return 0;
        
        if(!root->left) return minDepth(root->right) + 1;
        if(!root->right) return minDepth(root->left) + 1;
        
        return min(minDepth(root->left), minDepth(root->right)) + 1;
    }
};
```

## [leetcode] Maximum Depth of Binary Tree
[문제 링크](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
```c++
class Solution {
public:
    int maxDepth(TreeNode* root) {
        if(!root) return 0;
        return max(maxDepth(root->left), maxDepth(root->right)) + 1;
    }
};
```