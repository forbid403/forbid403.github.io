---
title: "[leetcode] Flatten Binary Tree to Linked List"
date: 2020-11-22
categories: algorithm
---
## [leetcode] Flatten Binary Tree to Linked List
[문제 링크](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/)

### Recursion
```c++
class Solution {
public:
    void flatten(TreeNode* root) {
        if(!root) return;
 
        flatten(root->left);
        flatten(root->right);
        if(root->left) {
            TreeNode *right = root->right; // save right node
            root->right = root->left;
            root->left = NULL;
            while(root->right) root = root->right;
            root->right = right;
            flatten(root->right);
        }
        return;
    }
};
```

### Iterative
```c++
    
    void flatten(TreeNode* root) {
        
        while(root) {
            TreeNode *cur = root;
            TreeNode *right = root->right;
            root->right = root->left;
            root->left = NULL;
            while(cur->right) cur = cur->right;
            cur->right = right;
            
            root = root->right;
        }
    }

```

- 후위 순회로 가장 아래에 있는 노드중, 작은 값부터 계산해서 올라온다.
- 만약 Left가 있다면, right을 저장해 놓고, left를 right로 옮긴다.
- 저장된 right를 맨 아래 right에 부착한다.