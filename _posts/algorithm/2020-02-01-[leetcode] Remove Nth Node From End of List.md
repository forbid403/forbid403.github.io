---
title: "[leetcode] Remove Nth Node From End of List"
date: 2020-02-01
categories: algorithm
---
# Remove Nth Node From End of List

Algorithm: 리스트
Created: Nov 25, 2019 3:23 PM
DoubleChk: No
Type: LeetCode
level: 2
link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/

Given a linked list, remove the *n*-th node from the end of list and return its head.

**Example:**

    Given linked list: 1->2->3->4->5, and n = 2.
    
    After removing the second node from the end, the linked list becomes 1->2->3->5.

**Note:**

Given *n* will always be valid.

**Follow up:**

Could you do this in one pass?

---
```c++
    /**
     * Definition for singly-linked list.
     * struct ListNode {
     *     int val;
     *     ListNode *next;
     *     ListNode(int x) : val(x), next(NULL) {}
     * };
     */
    class Solution {
    public:
        ListNode* removeNthFromEnd(ListNode* head, int n) {
            ListNode *tail = head;
            ListNode *cur = head;
            ListNode *del = head;
            
            int cnt = 0;
            while(tail != NULL){
                tail = tail->next;
                cnt++;
            }
            
            if(cnt <= n){
                head = head->next;
                return head;
            }
            
            for(int i=1; i< (cnt - n); i++){
                cur = cur->next;
            }
            del = cur->next;
            cur->next = del->next;
            del->next = NULL;
            
            
            return head;
        }
    };

    /**
     * Definition for singly-linked list.
     * struct ListNode {
     *     int val;
     *     ListNode *next;
     *     ListNode(int x) : val(x), next(NULL) {}
     * };
     */
    class Solution {
    public:
        ListNode* removeNthFromEnd(ListNode* head, int n) {
            ListNode *dummyHead = new ListNode(0);
            dummyHead -> next = head;
            ListNode *first = dummyHead;
            ListNode *second = dummyHead;
                    
            for(int i=1; i<=n+1; i++){
                first = first->next;
            }
            
            while(first!= NULL){
                first = first->next;
                second = second->next;
            }
            
            second->next = second->next->next;
            
            return dummyHead->next;
            
        }
    };
```
- 문제풀이
    1. 맨 끝으로 보내면서 갯수를 센다
    2. (갯수 - target)만큼 새로운 커서를 보낸다 → 지우려는 노드 바로 뒤
    3. 새로운 커서의 다음에 커서를 보낸다
    4. 삭제 연산

    head가 삭제 될때도 예외처리 해 주었다.

    아래는 one-pass algorithm, 근데 two-pass랑 별로 차이 없네?

    1. first, second를 head에 위치한다.
    2. first를 n+1만큼 이동시킨다. (dummy때문에)
    3. second와 first의 gap을 유지시키면서 first가 NULL이 될때까지 이동시킨다.
    4. second→next를 second→next→next 한다.
- 후기

    two-pass algorithm이랑 비슷하게 풀었다. one-path알고리즘도 한 번 봐야겠당

    one-path 알고리즘 구현한 사람 나와.. 천재 아냐?