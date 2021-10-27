# 최선아 [202030430]
</br>

# 목 록
 [1-1. 1주차](#1주차) </br>
 [1-2. 2주차](#2주차) </br>
 [1-3. 3주차](#3주차) </br>
 [1-5. 5주차](#5주차) </br>
 [1-6. 6주차](#6주차) </br>
 [1-7. 7주차](#7주차) </br>
 [1-9. 9주차](#9주차) </br>

 (4주차는 추석으로 인해 건너뛰었다)
 
</br></br>
# 9주차
## [10월 27일]</br></br>

### 영화 장르 출력하기
+ Movie 컴포넌트에서 장르를 출력하도록 코드를 수정하겠다
+ 장르 데이터를 담는 genres props가 배열이므로 map()함수를 사용한다
+ genres props를 ui, li 태그로 감싸서 출력한다
+ 마지막으로 key props를 추가해주기 위해 map() 함수에 index 매개변수를 추가한다

```jsx
<ul className="movie-genres">
    {genres.map((genre, index) => {
        return(
            <li key={index} className="movie-genre">{genre}</li>
            )
        })
    }
</ul>
```

### 시놉시스 설정하기
+ summary props 에 있는 문자열을 180자로 제한할것임
+ 자바스크립트의 slice()함수를 사용함
    - [문자열].slice(시작,끝)
+ 0~179자 까지만 <b>잘라서</b> 오는것임
+ 생략표시는 '...' 으로 쓰지 않고 자유롭게 지정해도 됨

```jsx
<p className="movie-summary">{summary.slice(0,180)}...</p>
```

# 7주차
## [10월 13일]</br></br>

### 7주차 완성본

<img src="https://user-images.githubusercontent.com/70833455/137164329-66fed08b-5da8-4f3b-9a01-739974f689e7.png" width=280px height=380px>

---

## 1️⃣ State의 Movie[ ]에 API 데이터 할당하기

```jsx
        //state의 movies[]에 할당 + Loading 현상 끄기
        this.setState({movies, isLoading: false})
```
## 2️⃣ Movie 컴포넌트 만들기
+ state가 필요하지 않으므로 클래스형 컴포넌트가 아니라 함수형 컴포넌트로 작성합니다
+ Moive에 넘어와야 하는 영화 데이터를 정의하고 관리하기 위해 prop-types를 사용합니다

### function Movie
```jsx
function Movie(){
    return (
        <h1></h1>
    )
}
```

### propTypes Movie
```jsx
Movie.PropTyes = {
    year: PropTyes.string.isRequired,
    title: PropTyes.string.isRequired,
    summary: PropTyes.string.isRequired,
    poster: PropTyes.string.isRequired,
    genres: PropTyes.arrayOf(PropTyes.string).isRequired
}
```
해석
+ PropTyes.string = 자료형이 String
+ isRequired = 반드시 들어와야 한다

## 3️⃣ sort_by로 영화 데이터 정렬하기
+ 평점 내림차순으로 영화 데이터를 화면에 보이도록 만드는 작업입니다

### axios.get(url)에 sort_by 사용하기
```jsx
= await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating') 
        //평점 내림차순으로 영화 데이터 받기
```

## 4️⃣ Moive 컴포넌트에 props 추가하고 출력해보기

### Moive 컴포넌트 수정
```jsx
function Movie({title,year,summary,poster, genres}){
      return (
              <h3 className="movie-title">{title}</h3>
    )
}
```
+ 위의 코드만으로는 출력할 수 없습니다
+ 컴포넌트를 map()함수로 출력했던 내용과 같은 패턴으로 코딩해서 title을 출력하겠습니다

### App 컴포넌트에서 movies.map() 사용하기
+ this.state에 있는 movies를 얻은 다음, App 컴포넌트에서 movies.map()을 사용해 로딩이 다 끝나면 
Movie 컴포넌트로 데이터를 보내 출력하도록 만들겁니다

```jsx
return(
.
.
.

{ isLoading ?( Loading...) : (
                     <div className="movies">
                         {
                            movies.map((movie) => {
                                return( <Movie title={movie.title} /> );
                            }) 
                         }
                     </div>
                    )}
        )
```
+ 다른 year나 summary나 poster도 같은 방법으로 추가하면 됩니다
+ 다만 poster props의 경우 키 이름이 medium_cover_image 이므로 movies.poster가 아니라 movies.medium_cover_image라고 작성합니다

+ 실행시 결과는 잘 나오지만 key props 경고창이 나옵니다
+ 컴포넌트를 여러개 출력할땐 유일값으로 key를 지정해 주어야 하는데 없기때문에 경고창이 나온것입니다
+ movie.di를 사용해서 key props를 추가하겠습니다

```jsx
movies.map((movie) => {
                        return( <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title} /> );
                       }) 
```
## ✅ 정리
+ 영화 API를 통해 영화 데이터를 가져옴
+ 영화 데이터를 가져올때는 axios.get()함수를 사용함
+ axios.get()은 시간이 필요한 함수이므로, async, await를 사용함
+ state에 isLoading후에 Movie 컴포넌트를 이용해서 영화 데이터를 화면에 보여주도록 만듦
+ 이제부턴 예쁘게 꾸미고 나머지 props도 출력하도록 만들것임

## 5️⃣ Movie 컴포넌트에 HTML 추가 + 영화 포스터 이미지 추가

```jsx
function Movie({title,year,summary,poster, genres}){
    return (
        <div className="movie">
            {/*영화 포스터 이미지 추가*/}
            <img src={poster} alt={title} title={title} />
            <div className="movie-data">
                <h3 className="movie-title">{title}</h3>
                <h5 className="movie-year">{year}</h5>
                <p className="movie-summary">{summary}</p>
            </div>
        </div>
    )
}
```
## 6️⃣ [ App,Moive ] CSS 파일 생성하기
+ src 폴더 안에 App.css 파일 생성
+ src 폴더 안에 Movie.css 파일 생성

# 6주차
## [10월 06일]</br></br>

## 영화 데이터 로딩 상태 표시해 주기
+ 컴포넌트가 마운트 되면 true 가 되도록 만들겁니다

```java
state = {
        isLoading: true,
        movies: [] //영화 데이터를 저장할곳
    }
```
```java
componentDidMount(){
//6초뒤 isLoading: false
}
```

```java
//View
    render(){
        //변수 isLoading 선언후 state의 boolean값 할당
        const { isLoading } = this.state

        return(
            <div>
                {/*삼항 연산자 true : false 따옴표와 콜론의 위치 주의 */}
                { isLoading ? 'Loading...' : '영화 데이터 출력' }
            </div>
        )
    }
```

## 영화 데이터 끌어오기 : 영화 API 사용해보기
+ 영화 데이터를 가져오는데 fetch()함수가 필요하다 하지만 난이도가 높기 때문에 Axios 라는 도구를 사용하겠다
+ 책에 fetch()에 관한 설명은 들어있지 않다

#### axios 설치하기
```java
> npm install axios
```

#### 영화 API 구경하기 : YTS

+ 공식 사이트 [https://yts.mx/api](https://yts.mx/api)

+ 아래 링크를 소스에 붙여서 사용할것이다, 인터넷 주소창에 조회하면 JSON 데이터들이 들어있는것을 확인할 수 있다

```
[https://yts.mx/api/v2/list_movies.json](https://yts.mx/api/v2/list_movies.json)
```

#### axios & 영화 API 사용해보기
+ 영화 데이터를 저장할 곳 생성
```java
    state = {
        isLoading: true,
        movies: []//영화 데이터를 저장할곳
    }
```
#### 영화 데이터 끌어오는 함수 getMoives()
+ async는 자바스크립트에게 getMoives() 함수는 데이터를 끌어오기 위해 시간이 필요해 라고 말하는것이고
+ await는 실제 시간이 필요한 대상인 axios.get() 앞에 붙는것
+ 이 둘은 꼭 짝꿍처럼 사용해야한다
```java
//영화 데이터 끌어오는 함수
    getMovies = async () => { 
        //async와 await를 꼭 써주어야만 변수 movies에 값을 잘 할당할 수있다
        const {
            data: {
                data:{movies}
            }
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json')
console.log(movies)
```
#### getMoives() 호출은 어디서?
+ 초기 render()가 끝난뒤 호출한다
```java
    componentDidMount(){
        //함수 호출
        this.getMovies()
    }
```
##### 현재 render의 상태
+ View 영역
```java
//View
    render(){
        //변수 isLoading 선언후 state의 boolean값 할당
        const { isLoading } = this.state

        return(
            <div>
                {/*삼항 연산자 true : false 따옴표와 콜론의 위치 주의 */}
                { isLoading ? 'Loading...' : '영화 데이터 출력' }
            </div>
        )
    }
```

## movies 객체에 접근 방식 모음
#### 가장 좋은 방법
+ 구조분해 할당을 통한 접근 방법이다
+ 영화 API - JSON 데이터는 아래의 글처럼 큰단계에서 작은단계로 데이터들을 감싸놓았다
+ data>data>movies
```java
    //영화 데이터 끌어오는 함수
    getMovies = async () => { 
        //async와 await를 꼭 써주어야만 변수 movies에 값을 잘 할당할 수있다
        const {
        //데이터 구조 분해 할당
            data: { 
                data:{movies}
            }
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json')
        console.log(movies)
        
        //구조 분해 할당으로 얻은 영화 데이터를 State에 세팅하기
        // state에 들어있는 변수 : 구조분해 할당으로 얻은 영화 데이터가 들어있는 변수
        this.setState({moives: movies})
    }
```

#### 1. 별로 좋은 방법이 아님
```java
 //영화 데이터 끌어오는 함수
    getMovies = async () => { 
        //async와 await를 꼭 써주어야만 변수 movies에 값을 잘 할당할 수있다
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json')
        console.log(movies.data.data.movies)
    }
```

#### 2. 이것도 좋은 방법은 아님
```java
 //영화 데이터 끌어오는 함수
    getMovies = async () => { 
        //async와 await를 꼭 써주어야만 변수 movies에 값을 잘 할당할 수있다
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json')
        console.log(movies.data.data.movies)
    }
```
#### 실행하면 movies의 데이터를 console 창에서  확인 할 수 있다 :smile:
<br>

#### 6주차 끝 [목록으로 가기🔼](#목-록) </br></br>

# 5주차
## [09월 29일]</br></br>

## 음식 앱에 prop-types 도입하기

### Props란?
+ 컴포넌트에서 컴포넌트로 전달하는 데이터
+ 컴포넌트로 넘어가는 매개변수

### 만약 Props가 잘못 전달된다면?
+ 잘못된 값을 담고 있는 Props 가 전달되면 원하는대로 작동되지 않는다
+ props를 검사하는 방법을 공부해 미리 방지하자

### 1️⃣ FoodLike.json 데이터에 평점(rating) 추가하기

```java
const foodILike = [ //json 객체입니다
{
  id: 1, //key props
  name:'kimchi',
  image: 'https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png',rating: 5
},
{
  id:2, //key props
  name:'Bibimbap',
  image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/220px-Dolsot-bibimbap.jpg',rating: 4.9
}

];
```

### 2️⃣ prop-types 설치하기

+ prop-types란?

  - 컴포넌트가 전달받은 props가 정말 내가 원하는 값인지 확인해 준다
  
  - 미리 'Food 컴포넌트는 반드시 picture prop가 전달돼야 한다' 고 정의할 수 있다

 + 설치 코드문 (cmd) 

```
> npm install prop-types
```
+ pakage.json 파일> dependencies> prop-types이 있는지 확인

### prop-types 적용하기
+ 해석: 모든 props는 문자열이고 반드시 있어야 한다
+ 결과: 아까 rating 자료형이 number였으니 오류가 난다
```javascript
Food.propTypes={
name: PropTypes.string.isRquired,
picture: PropTypes.string.isRequired,
rating: PropTypes.string.isRequired,
};
```
### prop-types 경고 해결하기
+ 위의 number--String 오류를 number--number 로 해결해보자

```javascript
Food.prototype = {//Food컴포넌트가 전달받을 props 타입을 검사
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};
```
### isRequired의 뜻?
+ 필요하다 라는 뜻
+ 지우면 매개변수로써 필수로 값을 넣어줘야한다가 적용되지 않는다
+ 적용한다면 컴포넌트 호출시 필수로 매개값을 넘겨줘야한다 </BR>
(내가 아는 JAVA랑 다름) 

### props-types의 특별한 기능 - props이름 검사

+ 자바에서는 호출할때 들어가는 매개변수 명과 메서드의 매개변수 명이 달라도 상관 없었다

```java
public static void main(args[]){
  int PuP = 5;
  java_method(PuP);
}

public void java_method(int OuO){

}
```
+ 하지만 react 에서는 다르다. props-type을 썼을시 호출할때의 매개변수명과 실제 컴포넌트의 매개변수명이 다르면 에러가 발생한다

### 3️⃣ state
+ state란?

  - 동적인 데이터를 다룰때 사용한다
  - 반대로 props는 정적인 데이터를 다룬다
  - state는 const나 let을 쓰지 않는 객체이다
  - state는 클래스형 컴포넌트에서 사용된다

### 클래스형 컴포넌트란?
+ 기본 뼈대↓↓↓
```java
class App extends React.Component{
  //반드시 App 클래스가 리액트에서 제공하는 Component 클래스를 상속받아야 한다

}
```
뼈대 안에는 무엇을 넣는가
+ JSX를 반환해야한다 
+ JSX는 브라우저에 출력하는것을 말한다 ```<h1></h1>```
+ 그런데 클래스라서 return을 사용할 수 없다
+ render() 함수를 사용해 JSX를 반환한다

### render 함수 사용하기
```java
class App extends React.Component{
  render(){
    return <h1>'Hello I am class component'</h1>;
  }
}
```
+ React가 자동으로 render() 함수를 실행시켜준다
+ 호출이 필요 없다

### back- 클래스 컴포넌트에 state 사용하기
```java
state = {
// const , let을 사용하지 않는 객체 형태의 데이터

count: 0; //초기화

};

class App extends React.Component{
  render(){
    return <h1>'Hello I am class component'</h1>;
  }
}
```

### add버튼과 minus버튼 생성후 기능부여하기
```java
    add = () =>{
        this.setState({count: this.state.count+1})
    }

    minus = () =>{
        this.setState({count: this.state.count-1})
    }
```

```java
render(){ 
        console.log('render');
        return (
            <div> 
            <h1>Rhe number is: {this.state.count}</h1> 
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
```

### setState() 란?
+ 리액트는 state를 직접 변경할 수 없도록 제한한다
+ state에 간접적으로 접근하기 위해서 사용한다
```java
add = () =>{
        this.setState({count: 1})
    }
```
<특징>
+ 리액트가 화면 구성이 빠르다
+ 업데이트시 새로고침이 일어나지 않아 화면이 깜빡거리지 않는다
+ 추가되었거나 동적으로 값이 변경되었을 시에만 실행된다

<이 외에 되고 안되는 코드문>
<br>
{ count: ··· }
+ this.state.count++ 안됨
+ this.state.count = this.state.count + 1 됨
+ this.state.count += 1 됨

### add, minus() 함수 개선하기
+ current 부분을 추가했어
+ current 부분에는 현재 state객체가 넘어와
+ state객체 안의 count에 1을 더하는거야
```java
add = () =>{
        this.setState(current => ({count: this.state.count+1}))
    }
```
```java
minus = () =>{
        this.setState(current => ({count: this.state.count-1}))
    }
```

### 4️⃣클래스형 컴포넌트의 생명주기
<img src="https://user-images.githubusercontent.com/70833455/135310288-477feba9-0554-4dea-9944-65b009a783a3.png" alt="생명주기그래프" width="500">
+ 취소선 처리 되어있는건 제거되기로 확정된것
<hr>

+ constructor( ) 함수
  - 생성자 입니다
  - 가장 먼저 실행됩니다
  - 이후가 render() 함수 입니다
<hr>

+ componentDidMount( ) 함수
  - render함수 다음으로 실행됩니다
  - render함수가 또 작동되기 전 같은 값이 반복되지 않도록 한다
  - constructor - render - 같은값 반복 안되게 처리 - ···
  - 한마디로 누적 카운트가 필요할때 사용되는 함수
<hr>
여기까지해서 constructror,render,componentDidMount를  < Mount > 라고 부른다<br>
< Mount >는 "이 화면이 보여지고 있다. 이 component가 보여지고 있다" 라는 뜻
<br>
render 함수에서 jsx 를 리턴하는 행위 자체를 < Mount >되었다 라고 한다
<hr>

+ componentDidUpdate( )함수
  - 화면이 업데이트될때(새로고침) 실행된다
  - setState() - render() - componentDidUpdate()
  - setState()가 실행될때만 사용된다
  - <업데이트 Update>로 분류 되었다
<hr>

+ componentWillUnmount( )함수
  - 컴포넌트가 죽을때 실행된다
  - < 언마운트 Unmount>로 분류 되었다

<hr>
생명주기를 배우는 목표: 언제 어디서 무슨 작업을 할 수 있는지 결정할 수 있기까지 되기 위하여


### 5주차 끝 [목록으로 가기🔼](#목-록) </br></br>

# 3주차
## [09월 15일]</br></br>

## 세 번째 리액트 기초 개념: props

### Props란?
+ 컴포넌트에서 컴포넌트로 전달하는 데이터
+ 컴포넌트로 넘어가는 매개변수

### Props 사용하기

<b>Food 컴포넌트 호출</b>🔽</br>

```<Food fav="kimchi" />```&#160;&#160;&#160; (// Food 라는 컴포넌트에 fav라는 이름으로 문자열을 전달합니다)
####

<b>Food 컴포넌트</b>🔽
```react
function Food(props){
 console.log(props)
 return(
  <h1>I like {props.fav}</h1>
 )
}
```
**구조 분해 할당으로 props 사용하기**🔽</br>
+ <b>예시 1</b>
```react
function Food(props){
 const {fav}=props;
 return(
  <h1>I like {fav}</h1>
 )
}
```
+ <b>예시 2</b>
```react
function Food({fav}){
 return(
  <h1>I like {fav}</h1>
 )
}
```
<pre>두 방법중 아무거나 사용해도 됩니다</pre>

+ <b>여러개의 props 사용하기</b>
```react
<Food fav="kimchi" /> //3번 호출, 각자 출력
<Food fav="ramen" />
<Food fav="cookie" />
```
---

### map() 함수로 컴포넌트 많이 만들기
+ <b>실습1 map()함수 사용법 알아보기</b>
```react
> const friends = ["A","B","C","D"] //노드를 사용해서 배열을 선언후 초기화 합니다
```
```react
> friends.map(current => { //map()을 사용합니다
  console.log(current);
  return 0;
})
```
결과🔽
```react
A
B
C
D
[0,0,0,0]
```
✔ 결과를 통한 map() 함수의 특징 정리</br>
1. 특징
+ map 함수의 매개변수로 들어간 current 함수는 참조대상 friends의 원소를 대상으로 실행된다
+ 그래서 4개의 원소가 들어있으니 4번 실행된것!
2. 특징
+ return 값 0이 모여 배열이된다
+ 위의 배열이 map()함수의 반환값이 된다

<b>실습2 map() 함수로 이름에 하트 추가한 배열 만들기</b>
```react
> const friends = ["A","B","C","D"] //노드를 사용해서 배열을 선언후 초기화 합니다
```
```react
> friends.map(current => { //map()을 사용합니다
  return friend + "❤";
})
```
결과🔽
```react
["A❤","B❤","C❤","D❤"]
```
### 3주차 끝 [목록으로 가기🔼](#목-록) </br></br>

# 2주차
## [09월 08일]</br></br>

## 슈퍼 빠른 create-react-app

### INTRO

**React 없던 시절**

웹팩은 자바스크립트 앱을 위한 정적 모듈들을 한나로 묶어주는 번들러이다

바벨은 최신 자바스크립트 문법을 사용할 수 있게 해주는 트랜스파일러이다

**보일러 플레이트?**

보일러 플레이트는 개발을 바로 시작할 수 있도록 만든 기초 환경을 말한다

---

### 리액트앱 만들기

`npx create-react-app movie_app_2021` 이 코드를 터미널에 입력합니다

movie_app_2021부분은 파일명입니다 마음대로 변경하셔도 OK

VS코드를 실행하여 방금 만든 따끈따끈한 `movie_app_2021` 파일을 열어줍니다

---

### 리액트앱 수정하기

필요없는 코드를 지우겠습니다

`pakage.json` 파일을 열어서 `"test": "reate scripts test","eject":"react scripts eject"` 부분을 지워줍니다

---

### 리액트앱 실행하기

`npm start` 이 코드를 터미널에 입력합니다

방화벽 액세스 허용 알림이 뜨면 허용해주도록 합니다

브라우저창이 열리고  successfully! 되면 완료됩니다!

---

### 리액트앱 종료하기

`Ctrl + c` 를 두번 누르면 정말 종료할까요? 라는 문구가 나옵니다

`Y` 를 눌러 종료합니다

---

## Git Hub 에 리액트앱 올리기

`git intit` 이 코드를 터미널에 입력합니다

VS코드 화면의 하단에 구름 모양 버튼을 누르고 public으로 저장소를 생성합니다

구름 모양이 화살표로 바뀌면 커밋 버튼을 누른후 PUSH 하여 파일을 올립니다 

---

### 리액트앱 수정하기2

**수정하기전 새로운 지식 kip!**

`public` 폴더 안에 `favicon.ico` 라는 파일이 있습니다

이 파일은 리액트앱이 실행될때 브라우저 탭의 제목-아이콘으로 표시되는 아이콘입니다

**다음으로 `src` 폴더를 열어 아래의 파일들을 전부 지워줍니다**

`App.css` `App.test.js` `index.css` `logo.svg` `serviceWorker.js` `setupTest.js` `pakage-lock.json`

 그럼 아래의 파일들만 남을겁니다

`App.js` `index.js` `gitignore` `pagkage.json` `README` `pakage.lock`

**`index.js` 파일 수정**

아래의 코드를 싹 다 지웁니다
<details>
<summary>삭제할 코드</summary>

```jsx
`import './index.css';`

`import * as serviceWorker from './serviceWorker';`

`<React.StrictMode></React.StrictMode> //안의 <App />,는 남겨둡니다`

`serviceWorker.nuregister();`
```
</details>

**`App.js` 파일 수정**

아래의 코드만 남을때까지 지웁니다
<details>
<summary>남겨둘 코드</summary>

```jsx
function App() {
  return (
    <div>Hello React</div>
  );
}

export default App
```
</details>

**리액트앱 실행해보기**

`npm start` 이 코드를 터미널에 입력합니다

---

## 리액트 동작 원리 알아보기

- 리액트는 index.html의 <div id="root"></div> 중간에 넣을 결과물을 App.js 파일을 해석하여 만들어 넣는 역할을 담당한다
- `index.js` 파일의 아래 코드가 html에 접근을 시도한다

    `ReactDOM.render(<App />,document.getElementById('root'));`

**정리하자면**

- `App.js` 는 자원이다
- `index.js` 는 접근 동작을 주도한다
- `index.html` 은 view이다
- 리액트는 `App.js` 와 `index.js` 를 자바스크립트를 이용해 해석한다

---

## 첫 번째 리액트 기초 개념: 컴포넌트

### **`App.js` 에 컴포넌트가 들어있다구?**

아래는 컴포넌트의 기본 형식입니다

```jsx
function App() {
  return (
    <div>Hello React</div>
  );
}

export default App
```

🌸export 부분이 없으면 컴포넌트를 사용할 수 없습니다! 매우 중요합니다🌸

### `index.js` 에서 컴포넌트를 어떻게 사용할까?

```jsx
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />,document.getElementById('root')); 

```

- `ReactDOM.render()` 함수는 첫번째 인자로 오는 컴포넌트를 그려질 결과로 만들어줍니다
- `ReactDOM.render()` 함수는 두번째 인자로 오는 것을 그려질 위치로 지정합니다
- `document.getElementById('root')` 함수는 html에서 id가 root인 태그를 지정합니다
- 여기서 html은 `index.html`을 가리키게 됩니다
- `<App >` 이라 쓰면 리액트는 인식을 하지 못합니다
- `<App />` 같은 표시를 컴포넌트로 인식합니다
<br/><br/>
### 2주차 끝 [목록으로 가기🔼](#목-록) </br></br>

# 1주차
## [09월 01일]</br></br>

# S-1. React 설치하는 과정


## | **Chocolatey 설치** **(여러가지 프로그램을 편하게 설치할 수 있는 윈도우 매니저)**



<details> 
<summary>설치 링크</summary>

    [https://chocolatey.org/install](https://chocolatey.org/install) 
</details>

<details> 
<summary>설치 방법</summary>

 command 블럭을 복사해서 파워쉘에 붙이고 실행 (파워쉘을 관리자 권한으로 실행!)

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```
</details>

</br>

## | 아래의 명령어로 설치 확인

-설치후 파워쉘이 켜져 있다면 종료후 파워쉘을 관리자 권한으로 실행!-

### `choco -v`

</br>

## | npx 설치 **(리액트를 사용할 수 있게해주는 js매니저)** 

### `npm install npx -g`

**📌주의 (npm 필요합니다! 없으시면 choco로 npm부터 먼저 설치해주세요)**

<details> <summary> — 버전 확인 명령어 </summary>

`**npx -v**`

`**npm -v**`
 </details>

</br>

# E-1. React 설치하는 과정 끝

</br>

### -💐영화 평점 웹서비스 완성 사이트

[Movie App](https://nomadcoders.github.io/movie_app_2019/#/)

##

### -💐리액트 이론공부 SPACE
### 리액트 공식 홈페이지 [https://reactjs.org/](https://reactjs.org/)
### -npm에서 리액트에 관련된 설명 보기 [https://www.npmjs.com/package/react](https://www.npmjs.com/package/react)

</br>

# 1주차 끝

[목록으로 가기🔼](#목-록) </br>
