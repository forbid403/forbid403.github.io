---
title: "[leetcode] Palindrome Linked List"
date: 2020-11-06
categories: algorithm
---
## [leetcode] Palindrome Linked List
[문제 링크](https://leetcode.com/problems/palindrome-linked-list/)

```c++
class Solution {
public:
    bool isPalindrome(ListNode* head) {
        if(!head || !head->next) return true;
        
        ListNode *slow = head;
        ListNode *fast = head;
        
        while(fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
        }
        
        fast = slow; // mid
        slow = head;
        ListNode *prev = NULL;
        while(fast) {
            ListNode *tmp = fast->next;
            fast->next = prev;
            prev = fast;
            fast = tmp;
        }
        
        while(1) {
            if(!slow || !prev || slow == prev) break;
            if(slow->val != prev->val) return false;
            slow = slow->next;
            prev = prev->next;
        }
        
        return true;
    }
};
```

- 지금까지 공부한 LinkedList의 기법?은 다 나온듯
- 중간을 찾고, 중간부터 뒤집는다.
- 뒤집은 리스트랑 앞부분 리스트를 비교하면서 palindrome인지 확인 해 주면 된다.