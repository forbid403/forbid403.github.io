---
title: "[TIL] Javascript splice"
date: 2020-05-21
categories: til
---
## Javascript splice
- 기존의 배열 요소를 변경한다.

`array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`

- `start` : 변경 시작 인덱스
- `deleteCount` : 제거할 요소의 수 (optional)
- `item...` : 추가할 요소

ex)
```js
// 하나도 지우지 않고, 2번째에 drum 추가
var removed = myFish.splice(2, 0, 'drum');

// 3번 인덱스에서 1개 제거
var removed = myFish.splice(3, 1);
```

---


- js30에서 입력받은 것이 secretcode와 일치하는지 확인하는 기능을 구현했다.
```js
const secretcode = "wesbos";
const pushed = [];

window.addEventListener('keyup', (e)=>{
	pushed.push(e.key);
	pushed.splice(-secretcode.length-1, pushed.length - secretcode.length);
	if(pushed.join('').includes(secretcode)){
		console.log("Ding Ding!");
	}
})
```

- `-secretcode - 1`은 -7이다. 즉 secretcode 이상을 눌렀을 때에, 첫번째 인덱스의 것을 제거한다.
- splice의 2번째 인자를 1로 하면 늘 1개를 지우기 때문에 두 인자를 빼주어야 한다.

