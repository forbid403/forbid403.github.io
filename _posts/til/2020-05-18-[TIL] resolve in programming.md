---
title: "[TIL] resolve in programming"
date: 2020-05-18
categories: til
---

# [TIL] resolve in programming
- resolver, resolve packages 등 `resolve`라는 단어가 자주 나오는데, 어떤 의미인지 명확하게 몰라서 구글링을 해 봤다.

### Transforming
- represent something in another format
- 어떤 것을 다른 형식으로 표현하는 것이다.
- ex) 10진수 -> 6진수
- 정해진 rule에 따라 변환

### Resolving
- Resolve를 사전에 검색 해 보면, `find a answer or a solution to something`이라고 나온다.
- 어떤 것의 답이나 해결책을 찾는 것, 이라는 의미이다.
- `determine what it is` 그것이 어떤 것인지 정의하는 것이다.
- ex) `google.com`을 검색하게 되면 Ip address가 쿼리 되는데, 이것은 매번 똑같은 게 아니라 바뀔 수도 있다.
- ex) `resolve package dependencies`의 의미는 missing 패키지를 설치하는 것이다. 이 때 설치 되지 않은 것들의 이름이 아닌, contents에 접근하여 설치 하는 것이다. 이 때 contents들은 not predictable(예상 불가능)하다.
- 즉, `resolve`는 name만으로는 알 수 없는, name에 관련된 repository나 contents에 접근하여 `재정의`하는 것이라고 말할 수 있다.