---
title: "[TIL] Async, Await, Promise"
date: 2020-09-23
categories: til
---

> Async, Await, Promise의 차이점을 알 수 있다. Async, Await, Promise의 차이점을 알기 전에, 비동기와 동기, 콜백에 대해서 알아 보겠다.

## 동기, 비동기
### 동기 (Synchrounous)
- 함수의 실행과 동시에 값이 반환된다.
- 하나의 함수 실행이 끝나기 전 까지는 다른 함수가 실행 될 수 없다.

### 비동기 (Asynchrounous)
- 함수의 실행과 값이 반환되는 시간이 다르다. (즉시 반환도 된다.)
- 함수의 실행이 끝나지 않더라도 다른 함수를 실행한다.

자바스크립트는 비동기적으로 동작된다. 따라서 비동기를 처리 할 함수가 필요하다. 바로 콜백이다.
