---
title: "[GraphQL] graphql의 개념과 특징"
categories: graphql
---

# GraphQL과 SQL
## SQL
![image](https://user-images.githubusercontent.com/41617388/80458307-8db24d00-896b-11ea-8841-2b82cfe35f37.png)
-  Structed Query Language
-  엔드 포인트가 여러 개
   -  ex) /content, /api...

## GQL
![image](https://user-images.githubusercontent.com/41617388/80458317-930f9780-896b-11ea-9e36-757c833d3442.png)

- 한 개의 엔드포인트
- 데이터 스키마에 따라 쿼리 변경


# GraphQL의 특징
### 위계적
- 필드가 중첩 가능
- 쿼리와 반환 데이터가 같다.

### 제품 중심적
- client가 요구하는 데이터, 지원하는 언어 및 런타임에 맞춰 동작한다.

### 엄격한 타입 제한
- 서버에서 타입 유효성을 검사한다. -> 안전성

### 클라이언트 맞춤 쿼리
### 인트로스펙티브 (Introspective)
  
# 기존 SQL의 단점
### over-fetching
- 요청한 정보보다 많은 정보를 수신하는 경우
- ex) username만 필요한데 DB에서 user의 모든 정보를 수신

### under-fetching
- REST에서 어떤 기능을 완성하려고 많은 소스를 요청하는 경우
- ex) 메인페이지에서 /feed, /user...등 여러 request 호출

### URL
- 여러 엔드포인트 사용
- URL 설계가 복잡해질 수 있음.

# GraphQL이 해결!
### over-fetching
- 쿼리를 사용 해 필요한 데이터만 가져올 수 있다.

### under-fetching & URL-free
- 쿼리를 사용 해 필요한 데이터를 모두 가져올 수 있다.
- 엔드포인트를 한 개만 사용하므로 한 번의 호출만 필요하다.

---

다음 포스팅엔 graphql 서비스 구현에 필요한 개념들을 정리하겠습니다.

