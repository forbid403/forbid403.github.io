---
title: "[leetcode] Symmetric Tree"
date: 2020-10-10
categories: algorithm
---
## [leetcode] Symmetric Tree
[문제 링크](https://leetcode.com/problems/symmetric-tree/)

```c++
class Solution {
public:
    
    bool isMirror(TreeNode *t1, TreeNode * t2) {
        if(t1 == NULL && t2 == NULL) return true;
        if(t1 == NULL || t2 == NULL) return false;
        
        return (t1->val == t2->val) && isMirror(t1->right, t2->left)
            && isMirror(t1->left, t2->right);
    }
    
    bool isSymmetric(TreeNode* root) {
        return isMirror(root, root);
    }
};
```