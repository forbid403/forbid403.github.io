---
title: "Mock Service Worker"
categories: FE
---
# Mock Service Worker

## Service Worker?

![msw](https://user-images.githubusercontent.com/41617388/149941338-4bc1770d-712a-4ef1-94c8-df7fb12f5757.png)

- 브라우저단에서 실행되는 백그라운드 스크립트
- '백그라운드'이기 때문에 웹페이지와는 별개로 동작한다. (non-blocking)
- 워커의 한 종류로, 서비스와 브라우저 및 네트워크 사이에서 프록시 서버의 역할을 한다.

## 발생 배경

- 오프라인에서 웹페이지를 사용자에게 보여줄 수 없을까 하는 고민에서 시작
- 네트워크 연결이 끊어졌을 경우, 캐싱을 통해 보여줄 수 있도록 만들고자 함.

## 사전 요구 사항

- 브라우저 지원
    - [https://jakearchibald.github.io/isserviceworkerready/](https://jakearchibald.github.io/isserviceworkerready/)
    - 대부분의 브라우저가 지원한다. (IE 제외...)
- HTTPS
    - 보안상의 이슈로 HTTPS에서만 동작
    - localhost는 http여도 사용 가능
- Worker이므로 DOM에 직접 접근 불가능
    - 이벤트 드리븐 형식으로 웹페이지와는 별도의 쓰레드에서 동작한다.
    - postMessage 인터페이스를 통해 통신해야 함.

## What is MSW?

- [Mock Service Worker](https://mswjs.io/)
- 네트워크 요청을 가로 채서 Mock 응답을 보내주는 역할을 한다.
- Service Worker 기반으로 모킹하기 때문에 프레임워크나 라이브러리 종속성이 없다.

## 기타 제공되는 기능들

- 쿠키 지원
- fallback 모드

## 어떻게 동작하나요

![image](https://user-images.githubusercontent.com/41617388/182169066-d6754820-981e-475d-9ba0-4f7e7d207de9.png)

1. Service Worker `fetch` 이벤트로 app의 request listening
2. `fetch` 이벤트가 발생하면, 라이브러리에서 mocked response 확인
3. 만약 있다면, Service Worker의 `respondWith`으로 return

## Pros?

- 로직 분리가 가능
    - API 클래스를 그냥 둬도 된다.
        - 추후에 json 제거 작업이 필요 없다.
        - mocking시 로직을 작성할 수 있다. (if 문을 api response 내부에서 해줄 필요가 없다)
    - 적용과 제거가 편리하다.
        - 핸들러를 주석 처리만 해주면 된다.
- 네트워크 탭에서 확인할 수 있음
    - 브라우저 입장에서는 실제 HTTP 요청이다.
    - DX적으로 실제 서버 API랑 interacting 한다는 느낌을 줌
- node 환경 상에서 실행 가능
    - non-browser 노드 환경에서도 mock이 공유가 가능함
    - 즉, SSR 환경에서도 지원이 가능함.
- GQL 지원이 가능한 first-party API가 있음

## 문제점

- 브라우저 밖이기 때문에 에러 메세지가 정확하지 않음: 디버깅이 어려움
- 비-CORS는 실패
- 설치 이외의 추가적인 초기 셋팅이 필요
- 모든 엔드포인트를 작성 해 줘야 함

## 타 라이브러리와 비교

- 일반적으로 mocking시에는 두 가지 방법을 주로 사용한다.
1. 서버를 구축
2. 기존 http/https/fetch를 대체(stub)해서 intercept

하지만,

### 서버를 구축할때 발생하는 이슈

- 당연히 실제 서버랑 다를 수 밖에 없음.
- 결국 2개의 서버를 관리하는 셈

### 네이티브 모듈을 확장

- 좋은 타협안이긴 하지만,
- 네이티브 모듈을 확장하면 어쨌든 네이티브 모듈을 건드는 것이기 때문에 완전한 로직 분리가 불가능하다.

|  | MirageJS | Service Mocker | JSON Server | **MSW** |
| :----: | :----: | :--: | :--: | :--: |
| 지원 API  | REST | REST | REST | REST / GraphQL |
| 지원 환경  | Browser | Browser | Node / Browser | Node / Browser |
| 구현 | 네이티브 fetch, XHR을 stubbing 함으로서 어플리케이션 레벨에서 request를 인터셉트 | 서비스워커를 등록하고 워커에서 mocked response 응답 | HTTP서버를 구축 | 서비스워커 API를 활용해 네트워크 레벨에서 request 인터셉트 |
| 적용 | 기존 코드를 변경할 필요 없음 | 빌드 워커 파일이 스코프 안에 존재 해야 함. sw-loader가 필요하거나, 서버에  Service-Worker-Allowed 헤더를 적용해야 함. | 기존 request를 mocking된 서버 엔드포인트를 가리키도록 해야 함. | 기존 코드를 변경할 필요 없음 |
| 정의 | OOP, ORM | Mocking 로직이 서비스 워커의 context에 있는 server.js에 작성됨 | 커스텀 JSON file | client-side에서 JS로 작성됨. App의 로직, util, typing을 재사용할 수 있음. |

# 설치 방법

[Getting Started 참고](https://mswjs.io/docs/getting-started/install)

1. msw 설치
2. 서비스 워커 등록
- public/ 하위에 serviceWorker 설정 파일 생성
1. 앱에 워커 적용

## 보안 이슈

- 서비스 워커는 https에서만 동작한다.
- 하지만 크롬 설정으로 우회할 수 있다.
1. chrome://flags 접속
2. Insecure origins treated as secure 검색
3. 사용할 도메인 추가 후 relaunch
    - ex) [http://local-partners.worksmobile.com:3000](http://local-partners.worksmobile.com:3000/)
4. 실행 시 콘솔에 해당 로그가 발생하면 적용이 된 것이다.
    
    ![image](https://user-images.githubusercontent.com/41617388/182169198-20bb8ef9-8758-4c2e-85e5-2d09b4be31a2.png)

    

# 적용 방법

1. API 클래스를 작성한다.
2. `mocks/handlers/...`에 핸들러를 작성한다.

# Request Handler

```jsx
rest.post('/login', null),
rest.get('/user', null),
```

- `rest.{http메서드}`로 핸들러를 생성한다.
- 첫 번째 인자는 API 요청을 매핑하는 key 역할을 한다.
- 매핑 안하는 요청들은 bypassing 된다.
- 파라미터나 해싱은 제외 하고 매칭된다.
- 다음 세 가지 방법으로 매핑이 가능하다.
    - exact url
    - path
    - RegExp

### exact url

```jsx
rest.post('<https://api.backend.dev/users>', responseResolver) // full url
rest.get('/invoices', invocesResolver) // 상대 경로
```

- 위와 같이 직접 url으로 매핑할 경우, 입력된 string에 엄격하게 매칭된다.
- 상대 경로인 경우 `location.origin`에 대해서 매핑된다.

### path

```jsx
// Matches:
// - /users/admin
// - /users/octocat
rest.get('/users/*', responseResolver),

rest.post('<https://api.backend.dev/user/:userId>', (req, res, ctx) => {
  // `userId` value becomes "abc-123"
  const { userId } = req.params
}),
```

- wildcard를 사용하거나, `:paramName`을 사용할 수 있다.

### RegExp

```jsx
// This request handler would match all these requests:
// - DELETE <http://localhost:8080/posts/>
// - DELETE <https://backend.dev/user/posts/>
rest.delete(/\\/posts\\//, responseResolver)
```

# Response Resolver

```jsx
rest.get('/login', (req, res, ctx) => {
  return res(
    ctx.json({
      'test': 'test',
    }),
  );
});
```

- response를 정의한다.
- Response resolver는 세 개의 인자를 받는다.
    - `[req](https://mswjs.io/docs/api/request)` request의 정보
    - `[res](https://mswjs.io/docs/api/response)` mock response를 만드는데 사용되는 functional utility
    - `[ctx](https://mswjs.io/docs/api/context)` status, header, body 등을 설정하는 데 사용 하는 함수 그룹
- ctx를 사용해서 response 값을 리턴한다.
    - [status](https://mswjs.io/docs/api/context/status) HTTP Status와 text를 셋팅한다.
    - [set](https://mswjs.io/docs/api/context/set) 헤더를 셋팅한다.
    - [body](https://mswjs.io/docs/api/context/body) raw response body를 셋팅한다.
    - [text](https://mswjs.io/docs/api/context/text) text 형식의 body를 셋팅한다. `Content-Type: text/plain` 헤더가 추가된다.
    - [json](https://mswjs.io/docs/api/context/json) json 형식의 body를 셋팅한다. `Content-Type: application/json` 헤더가 추가된다.
    - [xml](https://mswjs.io/docs/api/context/xml) xml 형식의 body를 셋팅한다. `Content-Type: test/xml` 헤더가 추가된다.
    - [delay](https://mswjs.io/docs/api/context/delay) response에 딜레이를 준다.
    - [fetch](https://mswjs.io/docs/api/context/fetch) 핸들러 내부에서 fetch를 실행한다.

# Query Parameters

```jsx
rest.get('/products', (req, res, ctx) => {
  const productId = req.url.searchParams.get('id')
  const productIds = req.url.searchParams.getAll('id')
  return res(
    ctx.json({
      productId,
    }),
  )
}),

```

- request url에서 넘어온 파라미터들에 접근하려면, `searchParams` 프로퍼티를 사용하면 된다.
- 해당 프로퍼티의 값들은 [UrlSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)의 인스턴스이다. 해당 메서드들을 사용하면 된다.

# Recipes

## Real API 적용

```jsx
rest.get('<https://api.github.com/users/:username>', async (req, res, ctx) => {
  // Perform an original request to the intercepted request URL
  const originalResponse = await ctx.fetch(req)
  const originalResponseData = await originalResponse.json()
  return res(
    ctx.json({
      location: originalResponseData.location,
      firstName: 'Not the real first name',
    }),
  )
}),
```

- Mock response에서 실제 API를 호출할 수 있다.