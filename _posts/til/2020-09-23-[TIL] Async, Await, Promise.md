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

자바스크립트는 비동기적으로 동작된다. 해당 함수가 끝나지 않았는데도 다른 함수가 실행 되는 구조이기 때문에, 비동기를 처리 할 함수가 필요하다.

## 콜 백과 콜 백 지옥
### 콜 백 (Call back)
- 하나의 이벤트 발생 이후 실행 될 함수.
- 혹은 어떤 함수에 매개 변수로 전달 될 함수.
  
```js
function sum(a, b, callback) {
  let result = a + b;
  callback(result);
}

sum(10, 20, function(result){
  console.log(result); // 30
});
```
해당 예제를 보면 `sum`이라는 함수가 있다. `sum`의 매개 변수로는 `a`, `b`, 그리고 `callback`이 있다.

`sum`은 인자로 받은 `a + b`를 `result` 변수에 저장하고, 해당 변수를 `callback`함수에 인자로 보낸다.

`sum`을 호출 할 때, 10, 20과 함수를 넣어주었다. 이 함수가 (매개 변수로 전달 되는) 콜백 함수이다.

`callback` 함수를 이용하면 비동기를 처리할 수 있다. 콜백 함수의 내부에는 인자로 받은 `result`를 콘솔로 찍어주는데, 이는 반드시 `sum` 호출 이후에 실행되게 된다.

```js
sum(10, 20, function(result){
  console.log(result); // 30
});

function sum(a, b, callback) {
  let result = a + b;
  callback(result);
}
```
순서를 바꾸어도 똑같이 30이 나오는 것을 확인할 수 있다.
이렇게 `callback` 함수를 이용하여 비동기를 핸들링 할 수 있다.

## 콜 백 지옥
하지만 콜백을 무분별하게 사용하다 보면, 구조가 중첩(nesting)될 수 있다. 웹 개발을 진행 할 때, 페이지 로딩 후, 인증을 작업하고, 캐싱을 하고... 이런 연쇄적인 기능을 개발하다 보면 자연히 콜백이 깊어지기 마련이다. 이는 프로그램의 복잡도를 높이고, 디버깅도 힘들 뿐더러, 가독성도 좋지 않게 된다.


## Promise
이 콜 백 지옥을 해결하기 위해 나온 것이 `Promise`이다.
`Promise`는 콜백 함수를 예측 가능하도록 만들어주고, 후처리를 성공, 실패 분기를 나누어 간단하게 만들어 주었다.

프로미스 객체는 다음의 상태값을 가진다.
- `pending` : `new` 연산자로 생성 후 `resolve`, `reject`가 호출 되기 전까지의 상태
- `fulfilled` : 성공
- `rejected` : 실패
- `settled` : 완료 (성공 혹은 실패가 fix 된 후)

여기서 프로미스가 실행 완료 됐을 때, `resolve` 함수가 호출 된다. 이후 `resolve`에 연결 된 `.then()`메서드가 실행 된다.

```js
let promise = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve("Success!");
  }, 1000);
})

promise.then((result) => {
  console.log(result); // Success!
}).catch((reason) => {
  console.log('failed : ', reason);
})
```
해당 함수를 실행하게 되면, 1초 이후에 'Success!'라는 문구가 출력이 된다.
`new` 연산자를 사용 해 `Promise`를 생성 한 후, `resolve`를 선언 해 준다.
해당 `Promise`가 성공적으로 실행 완료 시, `.then()`이 실행 된다. `.then()`은 `resolve`에서 받은 인자를 출력 해 준다.
또한, `catch`를 사용하여 `reject`시의 예외 처리도 가능하다.

Promise 패턴도 단점이 있다. 역시 연쇄적으로 일어나는 기능을 구현 할 시에, `.then()`을 중첩적으로 사용 해 깊어지는 경우가 있다.

## Async, Await
앞선 두 가지의 비동기 처리 방식의 단점을 개선하기 위해 나온 방식이다. ES2017에 등장하였다.

```js
let promise = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve("Success!");
  }, 1000);
})

async function start() {
  try {
    let result = await promise;
    console.log(result); // Success!
  } catch(error) {
    console.log(error);
  }
}

start();
```
비동기 처리를 해야 하는 함수 앞에 `async` 키워드를 붙이고, 내부의 Promise에 `await` 함수를 붙여주면 된다.
`async`가 붙은 함수는 언제나 Promise를 반환 한다.
`await`이 붙은 Promise의 실행이 끝날 때까지 기다리게 된다. 실행이 끝나면, 결과가 리턴되고 실행이 재개 된다.


좀 더 가독성이 좋게 만들어 주고, try/catch문으로 예외처리도 할 수 있다.