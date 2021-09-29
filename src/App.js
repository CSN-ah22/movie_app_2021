import Potato from "./Potato"


function Food({name,picture}){ //props 연습1
  //const {fav}=props; //fav 로 변수선언을 해주어서 값을 담고 출력한다

  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} alt={name} />
    </div>

  );
  
}

const foodILike = [ //json 객체입니다
{
  id: 1, //key props
  name:'kimchi',
  image: 'images/kimchi.png',rating: 5
},
{
  id:2, //key props
  name:'Bibimbap',
  image:'images/bibimbap.jpg',rating: 4.9
}

];

function App() {/* props 연습2 json 객체의 name을 출력하는 코드입니다 */
  return (
    //출력할 내용을 div 안에 적습니다
    <div>
      
      {
        
        foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} />))
        //⏫json객체 foodILike를 map 객체로 전환하여 dish 함수를 이용해 name 값을 Food컴포넌트로 전달한다
        
      }

      {/* 다른 파일의 컴포넌트를 사용하는 코드입니다 */}
      {/* <Potato DDD="you" /> */}

      </div>
  );
}

export default App
