---
title: "[TIL] ECMA Script와 Babel"
date: 2020-05-08
categories: til
---

- ES5, ES6 이런 용어들을 많이 봤는데, 실제로 무슨 의미인지 알지 못해서 정리한다.

## ECMA Script
- ECMA라는 정보 표준 제정 비영리기구가 있다.
- Script 언어란 이렇게 돼야 해요, 라는 것을 지정한 것이다.

## JavaScript
- ECMA가 지정해놓은 표준에 따른 스크립트 언어이다.

## JS엔진
- Javascript를 이해하고 실행하는 프로그램, 또는 인터프리터
- 비교
  - performance (속도)
  - 호환성 (ECMA를 얼마나 지원하는지)

## 그래서 ES5, ES6가 뭔데?
- ECMA Script ver.
- 개정이 될 때마다 올라간다.
- 2015년부터 매년 개정되기 때문에 ES2017 이런식으로 명명될 것.

## Babel?
- 웹 브라우저의 호환성 때문에 es 최신 기능을 사용할 수 없는 경우가 있음.
- 호환되지 않는 브라우저에서 구버전의 코드로 바꿔주는 기능을 하는 것이 Babel이다.
- .babelrc에서 프로젝트에 사용할 버젼을 설정해줄 수 있다.
  
  ```json
  {
    "presets": ["env", "stage-3"]
  }
  ```

![image](https://user-images.githubusercontent.com/41617388/81393508-74738280-915b-11ea-9e00-34894a54b1c0.png){: width="500" height="500"}

- 여기서 stage-3는 다음 후보가 될 것들을 말한다.
- babel7부터는 @가 붙는다. ex) @babel/cli

