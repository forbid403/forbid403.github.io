---
title: "[leetcode] Rotate List"
date: 2020-10-08
categories: algorithm
---
## [leetcode] Rotate List
[문제 링크](https://leetcode.com/problems/rotate-list/)

```c++
class Solution {
public:
    ListNode* rotateRight(ListNode* head, int k) {
        if(head == NULL || k == 0) return head;
        
        int cnt = 1;
        ListNode* temp = head;
        while(temp->next) cnt++, temp = temp->next;
        k %= cnt;
        
        ListNode *cur1 = head;
        ListNode *cur2 = head;
        ListNode *new_head;
        
        while(k-- && cur1) cur1 = cur1->next;
        
        while(cur1->next && cur2) {
            cur1 = cur1->next;
            cur2 = cur2->next;
        }
        
        cur1->next = head;
        new_head = cur2->next;
        cur2->next = NULL;


        return new_head;
    }
};
```

- 투 포인터로 푸는 문제.
- 리스트의 길이를 구한 후, K에 나머지 연산을 하면 새로운 헤드의 위치를 구할 수 있다. (뒤에서 몇 번째인지)
- `cur1`, `cur2`를 만들고 `cur1`을 `k`만큼 움직여준다.
- 이제 `cur1`가 끝에 도달 할 때까지 `cur1`, `cur2`를 함께 움직여준다.
- 끝에 도달하게 되면 `cur1->next`를 맨 처음과 이어준다. (`head`)
- 새로운 헤드를 `cur2->next`로 해 주고, `null`처리를 해주면 된다.