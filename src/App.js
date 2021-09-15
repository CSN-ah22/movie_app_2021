
function Food(props){
  const {fav}=props; //꼭 fav 로 변수선언을 해주어야만 제대로 출력된다

  return <h1>I like {fav}</h1>;
  
}

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      </div>
  );
}

export default App
