---
title: "[leetcode] Add Two Numbers II"
date: 2020-10-23
categories: algorithm
---
## [leetcode] Add Two Numbers II
[문제 링크](https://leetcode.com/problems/add-two-numbers-ii/)

```c++
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        stack <ListNode*> st1;
        stack <ListNode*> st2;
        
        ListNode *cur = l1;
        while(cur) {
            st1.push(cur);
            cur = cur->next;
        }
        
        cur = l2;
        while(cur) {
            st2.push(cur);
            cur = cur->next;
        }
        
        stack <ListNode *> ret;
        int flag = 0;
        while(!st1.empty() && !st2.empty()) {
            int val = st1.top()->val + st2.top()->val + flag;
            if(val >= 10) {
                val -= 10;
                flag = 1;
            } else flag = 0;
            
            ret.push(new ListNode(val));
            st1.pop();
            st2.pop();
        }
        
        
        while(!st1.empty()) {
            int val = st1.top()->val + flag;
            if(val >= 10) {
                val -= 10;
                flag = 1;
            } else flag = 0;
            
            ret.push(new ListNode(val));
            st1.pop();
        }
        
        while(!st2.empty()) {
            int val = st2.top()->val + flag;
            if(val >= 10) {
                val -= 10;
                flag = 1;
            } else flag = 0;

            ret.push(new ListNode(val));
            st2.pop();
        }
        
        if(flag) ret.push(new ListNode(1));

        ListNode *head = new ListNode(0);
        cur = head;
        while(!ret.empty()) {
            cur->next = ret.top();
            cur = cur->next;
            ret.pop();
        }
        
        return head->next;
    }
};
```
- 맨 처음에는 똑같은 방식인데 노드를 반대 방향으로 정렬 후에 진행 하였다.
- 조건에 반대로 정렬 하면 안된다는 것을 뒤늦게 봐서.. 스택으로 풀었다.
- 더한 값이 10 이상이 되는 경우를 주의해서 풀면 된다.