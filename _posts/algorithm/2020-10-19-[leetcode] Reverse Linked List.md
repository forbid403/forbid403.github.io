---
title: "[leetcode] Reverse Linked List"
date: 2020-10-19
categories: algorithm
---
## [leetcode] Reverse Linked List
[문제 링크](https://leetcode.com/problems/reverse-linked-list/)

Iterative
```c++
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode *prev = NULL;
        ListNode *cur = head;
        
        while(cur) {
            ListNode *temp = cur->next;
            cur->next = prev;
            prev = cur;
            cur = temp;
        }
        
        return prev;
    }
};
```

Recursive
```c++
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        if(!head || !head->next) return head;
        
        ListNode *p = reverseList(head->next);
        head->next->next = head;
        head->next = NULL;
        return p;
    }
};
```