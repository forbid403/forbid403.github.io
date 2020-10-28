---
title: "[leetcode] Intersection of Two Linked Lists"
date: 2020-10-28
categories: algorithm
---
## [leetcode] Champagne Tower
[문제 링크](https://leetcode.com/problems/intersection-of-two-linked-lists/)

```c++
class Solution {
public:
    int getLen(ListNode *n) {
        int cnt = 0;
        while(n) {
            cnt++;
            n = n->next;
        }
        return cnt;
    }
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {

        ListNode *curA = headA;
        ListNode *curB = headB;
        
        int cmp = getLen(headA) - getLen(headB);
        
        while (cmp < 0) {
            curB = curB->next;
            cmp++;
        }
        
        while (cmp > 0) {
            curA = curA->next;
            cmp--;
        }
        
        while(curA) {
            if(curA == curB) return curA;
            curA = curA->next;
            curB = curB->next;
        }
        
        return NULL;
        
    }
};
```
- 두 링크드 리스트의 만나는 지점을 찾으면 된다.
- 길이를 구한 다음, 더 긴 애를 길이의 차이만큼 움직여 준다.
- 그리고 두 리스트를 같이 움직이면서, 같은지를 판별하면 된다.