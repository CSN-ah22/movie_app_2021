# 최선아 [202030430]
</br>

# 목 록
 [1-1. 1주차](#1주차) </br>
 [1-2. 2주차](#2주차) </br>
 [1-3. 3주차](#3주차) </br>
 
</br></br>

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
## 2주차 끝 [목록으로 가기🔼](#목-록) </br></br>

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
