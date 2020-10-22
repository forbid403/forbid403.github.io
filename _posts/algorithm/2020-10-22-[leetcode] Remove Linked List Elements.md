---
title: "[leetcode] Remove Linked List Elements"
date: 2020-10-22
categories: algorithm
---
## [leetcode] Remove Linked List Elements
[문제 링크](https://leetcode.com/problems/remove-linked-list-elements/)

```c++
class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) {
        ListNode *cur = head;
        if(!head) return head;
        
        while(cur->next) {
            if(cur->next->val == val) cur->next = cur->next->next;
            else cur = cur->next;
        }
        
        if(head->val == val) head = head->next;
        
        return head;
    }
};
```