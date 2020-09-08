---
title: "[TIL] React, Vue, Angular 비교"
date: 2020-09-09
categories: til
---

# [TIL] React, Vue, Angular 비교


## Angular
- TS 기반 &#8594; 대규모 팀과 협업에 적합
- 단, 양방향 바인딩 모두 지원
- 컴포넌트 기반

## React
- JSX 사용
- 가상 DOM 사용
- 단방향 데이터 바인딩
- 컴포넌트 기반

## Vue
- Virtual DOM 사용
- Template 사용
- 단, 양방향 바인딩 모두 지원
- 컴포넌트 기반

## Conclusion

|-|React|Vue|Angular|
|---|:-:|:-:|:-:|
|언어|JSX|JS|TS|
|바인딩|단방향|단&양방향|단&양방향|
|가상 DOM|O|O|X|
|템플릿|X|O|O|
|공통점||컴포넌트 기반|


## Component란?
- 재사용이 가능한 최소 단위

## 단방향 & 양방향
<image src="https://user-images.githubusercontent.com/41617388/92496044-97f62900-f232-11ea-966e-1432af599089.png" width=500><br>
단방향은 템플릿과 모델을 동기화 시킬 때에 뷰에 적용이 된다.<br>
양방향은 뷰와 모델이 바뀔 때마다 서로 갱신이 된다. <br>

<image src="https://user-images.githubusercontent.com/41617388/92496186-cb38b800-f232-11ea-8f5d-a4a3d0739fb8.png" width=300><br>
리액트는 단방향 바인딩이다.<br>
parent &#8594; child 방향으로 바인딩이 되고, 이 때 전달되는 props는 immutable 하다.<br>
컴포넌트는 state를 가지고 있는데, state는 mutable하다.<br>
값 변경 시에는 setState()를 호출함으로서 동기화를 해 주어야 한다.<br>
child에서 parent로 전달 하고 싶을 때에는 event로 전달 해 주어야 한다.<br>