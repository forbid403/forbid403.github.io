---
title: "[leetcode] Convert Sorted List to Binary Search Tree"
date: 2020-11-13
categories: algorithm
---
## [leetcode] Convert Sorted List to Binary Search Tree
[문제 링크](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/)

```c++
class Solution {
public:
    TreeNode* sortedListToBST(ListNode* head) {
        if(head == NULL) return NULL;
        if(head->next == NULL) return new TreeNode(head->val);
        
        // get mid
        ListNode *slow = head;
        ListNode *fast = head;
        ListNode *pre = head;
        while(fast && fast->next) {
            pre = slow;
            slow = slow->next;
            fast = fast->next->next;
        }
        pre->next = NULL;
        
        TreeNode *root = new TreeNode(slow->val);
        root->left = sortedListToBST(head);
        root->right = sortedListToBST(slow->next);
        return root;
    }
};
```

- 좋은 트리 + 리스트 문제라서 기록한다.
- 정렬된 리스트를 이진검색트리로 만드는 문제이다.
- 재귀로 접근해서 풀 수 있는데, base condition은 `head`가 `null`일 경우, `null` 리턴하고 노드가 하나만 있을 경우는 해당 노드를 리턴한다.
- `slow`, `fast`포인터로 가운데 값을 찾는다. 이 리스트를 절반으로 나누기 위해 `prev`노드로 `slow`의 이전 노드를 저장한다.
- `prev->next`를 `null`처리 해 주어 리스트를 두 개로 나눈다.
- 중간의 노드가 `root`가 되고, 해당 노드의 `left`는 왼쪽 리스트의 중간 값, `right`는 왼쪽 리스트의 중간값이 된다.`