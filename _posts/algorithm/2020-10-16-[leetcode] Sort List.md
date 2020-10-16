---
title: "[leetcode] Sort List"
date: 2020-10-16
categories: algorithm
---
## [leetcode] Sort List
[문제 링크](https://leetcode.com/problems/sort-list/)

```c++
class Solution {
public:
    ListNode* sortList(ListNode* head) {
        if(!head || !head->next) return head;
        
        ListNode* slow = head;
        ListNode* fast = head->next;
        
        while(fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
        }
        
        fast = slow->next;
        slow->next = NULL;
        
        return merge(sortList(head), sortList(fast));
    }
    
    ListNode *merge(ListNode *l1, ListNode *l2) {
        ListNode *dummy = new ListNode(0);
        ListNode *cur = dummy;
        
        while(l1 && l2) {
            if(l1->val < l2->val) {
                cur->next = l1;
                l1 = l1->next;
            } else {
                cur->next = l2;
                l2 = l2->next;
            }
            cur = cur->next;
        }
        
        if(l1) cur->next = l1;
        if(l2) cur->next = l2;
        
        return dummy->next;
    }
};
```

- O(nlogn)의 시간, O(1)의 공간복잡도 내로 해결 해야 하므로 합병정렬을 사용하였다.
- slow, fast 포인터로 가운데를 찾는다.
- 리스트가 1개나 2개일 때 까지 재귀로 가운데를 쪼개준다.
- 다 쪼개면 merge함수로 합친다.