---
title: "[TIL] spread와 rest"
date: 2020-06-01
categories: til
---
## spread와 rest
> ES6 문법에 추가가 된 spread, rest를 배웠다.

## Spread 구문
spread의 사전적 의미는 `펼치다`이다.  
배열, 객체를 펼치는 것을 의미한다.  
`...변수명`으로 사용한다.


```js

const food = {
    vegetable: "broccoli"
};

const grilledFood = {
    ...food,
    cook : "fire"
};

const grilledDeliciousFood = {
    ...grilledFood,
    add: "meat"
};

console.log(food);
console.log(grilledFood);
console.log(grilledDeliciousFood);
```

```js
output
{vegetable: "broccoli"}
{vegetable: "broccoli", cook: "fire"}
{vegetable: "broccoli", cook: "fire", add: "meat"}
```

예제에서 볼 수 있다시피 객체에 있는 값을 뿌려주고 있다.  
모든 인자 값을 뿌려주는 것이 spread이다.


```js
const numbers = [1, 2, 3];
const array = [...numbers, 4, 5, ...numbers];
console.log(array);
```

```js
output
[1, 2, 3, 4, 5, 1, 2, 3]
```

배열에서도 사용 가능 하다.
spread는 여러 번 쓸 수 있다.
하지만 깊은 복사가 아닌 **얕은 복사**이기 때문에 다중 배열에서는 주의해야 한다!


## Rest 파라미터
Rest의 사전적인 의미는 나머지이다.
Rest of ~~ 할때의 그 rest이다.

rest는 객체, 배열, 함수의 파라미터에서 쓸 수 있다.
`...변수명`으로 사용한다. 변수명은 어떤것이든 될 수 있다.
```js
const food = {
    vegetable: "broccoli",
    cook : "fire",
    add: "meat"

};

const {add, ...rest} = food;
console.log(add, rest);
```
```js
output
meat {vegetable: "broccoli", cook: "fire"}
```

food 객체에서 고기를 빼려고 할 때, {빼려고 하는 것, `...변수명`}을 사용하면 된다.

spread 구문과 rest 구문을 동시에 쓸 수도 있다.


```js
const food = {
    vegetable: "broccoli",
    cook : "fire",
    add: "meat"

};

const {add, ...rest} = food;
const newFood = {
    ...rest,
    add: "fork"
}

console.log(newFood);
```
```js
output
{ vegetable:"broccoli", cook:"fire" add:"fork" }
```

```js
const {...rest, add} = food;
//Uncaught SyntaxError: Rest element must be last element
```
...rest구문은 꼭 파라미터의 맨 앞에 와선 안된다.
나머지가 없기 때문이다.

### 함수 파라미터에서 rest
```js
function add(...nums){
    return nums.reduce((acc, current) => acc + current, 0);
}

const result = add(1, 2, 3, 4, 5, 6);
```

이렇게 파라미터로서 모든 배열을 전달 해 줌으로서, 파라미터를 하나하나 선언 해 주지 않아도 된다.

```js
function add(...nums){
    return nums.reduce((acc, current) => acc + current, 0);
}
const arr = [1, 2, 3];
add(...arr);
```

spread와 rest를 동시에 쓴 예제이다.
파라미터로 spread 구문을 쓰고, 인자로 rest 파라미터를 받았다.


- spread와 rest는 ie에서는 지원하지 않는다!