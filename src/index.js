import ReactDOM from 'react-dom';
import App from './App';

//컴포넌트를 사용합니다
ReactDOM.render(<App />,document.getElementById('root')); 
//APP.js의 function App를 호출하는것과 같음 
//index.html에 ID값이 root인 div 태그안에 App컴포넌트 결과값을 넣게됨
//컴포넌트는 하나만(App.js) 들어갈 수 있다
//그러므로 App.js에 다른 컴포넌트를 생성해서 App컴포넌트에서 호출해주는 방식으로 사용해야한다

