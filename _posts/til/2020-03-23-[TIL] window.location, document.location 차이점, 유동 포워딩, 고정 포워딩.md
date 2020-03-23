---
title: "[TIL] window.location, document.location 차이점, 유동 포워딩, 고정 포워딩"
date: 2020-03-23
categories: til
---

Created By: 성희 배
Last Edited: Mar 23, 2020 1:00 AM

## window.location과 document.location의 차이

### window.location

- 현재 위치를 **object** 값으로 가져옴

### document.location

- 현재 URL 값을 string으로 변환해서 가져옴

⇒ 웹사이트 호환성 때문에 document.location보다는 window.location을 추천한다.

⇒ document.location은 document.URL로 직관적이게 바뀌었다.

---

## 유동 포워딩, 고정 포워딩

### 유동 포워딩

- 접속 하는 URL로 주소창에 표기
- meta 방식으로 포워딩 설정

### 고정 포워딩

- 접속 시 도메인 그대로 주소창에 표기
- frame 방식으로 포워딩 설정
- ex ) 페이지를 이동 해도 www.example.co.kr이 그대로 유지