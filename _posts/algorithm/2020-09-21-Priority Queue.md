---
title: "Priority Queue"
date: 2020-09-21
categories: algorithm
---

## 파라미터
`priority_queue<T, Container, Compare>`
- `T` : 우선순위 큐에 들어가는 원소들의 타입 명시
- `Container` : `T`에 선언 된 타입을 담는 형식을 명시, 이 때 순회가 가능 해야 하고, O(1) 시간복잡도로 원소에 접근 가능 해야 한다. ex) `vector`, `deque`
- `Compare` : 비교 함수
- 가장 큰 원소가 top인 max heap이 기본값이다.

<br>

## 기본 사용법
```c++
// max heap
priority_queue <int, vector<int>, less<int>> pq;
priority_queue <int> pq;
// 둘 다 똑같이 max heap
```

```c++
//min heap
priority_queue <int, vector<int>, greater<int>> pq;
```

```c++
priority_queue <int> pq;

pq.push(6); // 삽입
pq.push(2);

pq.top(); // 6
```

## 응용

### compare 함수 사용
```c++
// second 비교하기

// 비교 함수
struct cmp {
  bool operator()(const pair<int, int> &a, const pair<int, int> &b) {
    return a.second < b.second;
  }
};

priority_queue <pair<int, int>, vector<pair<int, int>>, cmp> pq;

pq.push({0, 3});
pq.push({0, 5});

cout << pq.top().first << ', ' << pq.top().second << endl; // 0, 5

```

### struct 사용
```c++
struct Custom {
  int x;
  int y;
  int val;
  Custom(int value): x(0), y(0), val(value) {}
}

struct cmp {
    bool operator()(const Custom &u, const Custom &v) {
        return u.val > v.val;
    }
};

priority_queue <Custom, vector<Custom>, less<int>> pq;

priority_queue<Custom, vector<Custom>, cmp> pq;

pq.push(Custom(1));
pq.push(Custom(3));

cout << pq.top().val << endl; // 1

```