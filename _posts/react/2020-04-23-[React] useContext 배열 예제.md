---
date: 2020-04-23
categories: react
---

# React CreateContext

Created By: 성희 배
Last Edited: Apr 23, 2020 7:28 PM

![가져온 파일 오후 4 08 31](https://user-images.githubusercontent.com/41617388/80089337-b667ca80-8598-11ea-82a5-ca43a5453953.jpeg)

- 호텔 사이트 클론 프로젝트 진행중에, 호텔을 클릭 시 위쪽 컴포넌트에 클릭한 호텔의 이름을 삽입하는 기능을 구현하고자 했다. 두 개는 독립된 컴포넌트라서 콜백으로 진행하기는 어려울 것 같아, 따로 js파일을 만들어 전역 변수로 배열을 두고 queue 기능을 구현 하였다. 하지만 이렇게 하니, 두 컴포넌트의 바인딩을 어떻게 해야 할지 감이 잡히지 않았다.
- useRef를 사용해보려고 했지만, 변화를 잡아내지 못했다.. 그래서 확장성은 떨어지지만 useContext를 사용하여 구현하고자 하였다.

---

### RecentContext.js

- context를 생성하고 관리할 js 파일을 하나 만들었다.
- 외부에서 호출할 값과 함수를 createContext 안에 선언 해 준다.
```javascript
    const RecentContext = createContext({
      clickedHotels: [],
      pushHotels: () => { }
    });
```
- `clickedHotels` : 클릭한 호텔들을 저장할 배열
- `pushHotels` : 클릭한 호텔을 clickedHotels에 넣는 함수

---

- 그 아래에 provider를 선언하였다.
- provider는 context를 구독하는 컴포넌트들에게 context의 변화를 알리는 역할을 한다.
```javascript
    export const RecentProvider = ({ children }) => {
      const [clickedHotels, setHotel] = useState([]);
    
      const value = {
        clickedHotels,
        pushHotels
      }
    
      return (
        <RecentContext.Provider value={value}>{children}</RecentContext.Provider>
      );
    };
    
    export default RecentContext
```
- `useState`로 어떠한 값에 변화를 줄지 선언 해 주었다.
- `value ={value}` : 자식들에게 리턴해줄 객체들을 value에 선언 후, 인자로 넘겨 주었다.

---

### App.js
```javascript

    function App() {
      return (
        <Router>
          <RecentProvider>
            <Route exact path="/" component={Home}></Route>
            <Route path="/hotels" component={Hotels}></Route>
          </RecentProvider>
        </Router>
      );
    }
```
- Router 밖에 `RecentProvider` 로 감싸준다.

---

- 이제 기본 셋팅은 다 됐다.
- 그럼 react에서 어떻게 사용하면 되는가?

### Recent.js
```javascript

    import RecentContext from './RecentContext'
```
- 상단에 import를 해 준다.
```javascript
    const { clickedHotels } = useContext(RecentContext);
```
- 함수 내부에서 `useContext` hooks를 사용해 provider가 제공해주는 객체들에 접근할 수 있다!

---

## Full Code

### RecentContext.js
```javascript

    import React, { useState, createContext } from 'react'
    
    const RecentContext = createContext({
      clickedHotels: [],
      pushHotels: () => {}
    });
    
    export const RecentProvider = ({ children }) => {
      const [clickedHotels, setHotel] = useState([]);
    
      const pushHotels = (name) => {
        
        if (clickedHotels.length >= 5) {
          clickedHotels.shift();
        }
    
        let retArr = clickedHotels.filter((hotel)=>{
          return hotel !== name;
        });
    
        setHotel([...retArr, name]);
      }
    
      const value = {
        clickedHotels,
        pushHotels
      }
    
      return (
        <RecentContext.Provider value={value}>{children}</RecentContext.Provider>
      );
    };
    
    export default RecentContext
```
### Recent.js
```javascript

    import React, { useContext } from 'react'
    import styled from 'styled-components'
    import RecentContext from './RecentContext'
    const Container = styled.div`
        display : flex;
        width : 100%;
        background-color : white;
        align-items: center;
    `;
    const ClickedHotel = styled.div`
        background-color : gray;
        padding: 10px 10px 10px 10px;
        margin-left: 10px;    
    `;
    export default () => {
         const { clickedHotels } = useContext(RecentContext);
        
        return (
            <Container>
                {clickedHotels.map(hotel => <ClickedHotel key={Math.random()}>{hotel}</ClickedHotel>)}
            </Container>
        )
    }
```
### Hotel.js
```javascript

    import React, {useContext} from 'react'
    import styled from 'styled-components'
    import RecentContext from './RecentContext';
    
    const Container = styled.div`
        height : 250px;
        width : 75%;
        display: flex;
        margin : 3% 3% 3% 3%;
    `;
    
    const Column = styled.div`
        width: 40%;
        height : 100%;
    `;
    
    const Column2 = styled.div`
        width: 60%;
        height : 100%;
        padding: 0pt 10pt 0pt 10pt;
        background-color : white;
    `;
    
    const HotelImage = styled.div`
        width : 100%;
        height : 100%;
        background-image : url(${props => props.img});
        background-size : cover;
    `;
    
    const HotelInfo = styled.div`
        display : flex;
        flex-direction: column;
        width : 100%;
        height : 90%;
        justify-content : space-evenly;
    `;
    
    const Facilities = styled.div`
        display : flex;
    `;
    
    const Service = styled.div`
        color : limegreen;
        border-radius : 5px;
        border : 1px solid limegreen;
        font-size : 10pt;
        margin-left : 5pt;
        padding : 3pt 3pt 3pt 3pt;
    `;
    
    const Name = styled.div`
        font-weight : 600;
        font-size : 15pt;
        
    `;
    
    const PriceInfo = styled.div`
        width: 100%;
        height : 10%;
    `;
    
    const Price = styled.div`
        float: right;
        background-color: cornflowerblue;
        color: white;
        padding: 0pt 10pt 0pt 10pt;
    `;
    
    const ReviewScore = styled.span`
        border-radius: 4pt;
        width : 30px;
        height: 30px;
        text-align : center;
        background-color: darkblue;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left : 3pt;
    `;
    
    const ReviewInfo = styled.div`
        margin-left : auto;
        align-items : center;
        display : flex;
    `;
    
    const Row = styled.div`
        display:flex;
        height : 30px;
        width : 100%;
        align-items : center;
    `;
    
    export default ({ info }) => {
    
        const { pushHotels, clickedHotels } = useContext(RecentContext);
    
        const handleClickHotel = (hotelName, e) => {
            alert(`${hotelName} 을 조회하였습니다.`)
            pushHotels(hotelName)
        }
    
        return (
            <Container onClick={handleClickHotel.bind(this, info.name)}>
                <Column>
                    <HotelImage img={info.imageUrl} />
                </Column>
                <Column2>
                    <HotelInfo>
                        <Row>
                            <Name>{info.name}</Name>
                            <ReviewInfo>
                                <div>{info.totalReviewCount}개의 이용 후기</div>
                                <ReviewScore>{info.reviewScore}</ReviewScore>
                            </ReviewInfo>
                        </Row>
    
                        <Facilities>
                            {info.freeServices.map((service, idx) => <Service key={idx}>{service}</Service>)}
                        </Facilities>
                        <p>{info.rate}성급 호텔</p>
                    </HotelInfo>
    
                    <PriceInfo>
                        <Price>
                            hello원~
                        </Price>
                    </PriceInfo>
                </Column2>
            </Container>
        )
    }
```
---

## 실행 결과

![4월-23-2020 19-25-42-min](https://user-images.githubusercontent.com/41617388/80089759-60475700-8599-11ea-946e-0dc576ad0ce2.gif)

It works! :D
