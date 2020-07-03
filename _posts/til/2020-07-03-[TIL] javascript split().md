---
title: "[TIL] javascript split()"
date: 2020-07-03
categories: til
---

## `String.prototype.split()`
###  문자열을 배열로 변환시킨다.

```javascript
str.split([seperator[, limit]]);
```
- `seperator` : 문자열을 쪼개는 단위. `string`이나 `regex`
- `limit` : 리턴되는 배열의 갯수 제한.

- **단,** 유니코드에선 제대로 동작하지 않을 수 있다.

```javascript
const ret = '𝟘𝟙𝟚𝟛'.split('');

console.log(ret);
//["�", "�", "�", "�", "�", "�", "�", "�"]
```
---

## Suggestions!

### 1. `spread syntax`
### 2. `Array.from()`
### 3. `/u`

```javascript

const str = "hello, 𝟘𝟙𝟚𝟛!";

// 1. spread syntax
const spread = [...str];
console.log(spread);

// 2. Array.from()
const from = Array.from(str);
console.log(from);

// 3. /u
const regex = str.split(/(?=[\s\S])/u);
console.log(regex);

// all output
> Array ["h", "e", "l", "l", "o", " ", "𝟘", "𝟙", "𝟚", "𝟛", "!"]
```

---
  
  
split을 사용하여 문자열을 뒤집을 수 있다.
```javascript
const str = "거꾸로";
const reversed = str.split('').reverse().join('');

console.log(reversed);
//로꾸거
```