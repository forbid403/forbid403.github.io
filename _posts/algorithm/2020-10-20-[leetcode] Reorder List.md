---
title: "[leetcode] Reorder List"
date: 2020-10-20
categories: algorithm
---
## [leetcode] Reorder List
[문제 링크](https://leetcode.com/problems/reorder-list/)

```c++
class Solution {
public:
    void reorderList(ListNode* head) {
        if(!head || !head->next) return;
        
        // find the middle
        ListNode *cur1 = head;
        ListNode *cur2 = head->next;
        while(cur2 && cur2->next) {
            cur1 = cur1->next;
            cur2 = cur2->next->next;
        }
        
        cur2 = cur1->next;
        cur1->next = NULL;
        
        // reverse second list
        ListNode *prev = NULL;
        while(cur2) {
            ListNode *temp = cur2->next;
            cur2->next = prev;
            prev = cur2;
            cur2 = temp;
        }
        
        cur1 = head;
        cur2 = prev;
        ListNode *temp = NULL;
        while(cur1 && cur2) {
            temp = cur1;
            cur1 = cur1->next;
            temp->next = cur2;
            
            temp = cur2;
            cur2 = cur2->next;
            temp->next = cur1;
        }
        
    }
};
```

- 리스트를 둘로 쪼갠다.
- 두 번째 리스트를 반대로 정렬한다. (4-5-6 => 6-5-4)
- 첫 번째 리스트와 두 번째 리스트를 번갈아가면서 이어준다.
