import Potato from "./Potato"


function Food(props){
  const {fav}=props; //꼭 fav 로 변수선언을 해주어야만 제대로 출력된다

  return <h1>I like {fav}</h1>;
  
}

const foodILike = [
{
  name:'kimchi',
  iamge: 'https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png'
},
{
  name:'Bibimbap',
  image:'https://lh3.googleusercontent.com/proxy/CDMwVW_u0tk2gIRgzZmi4T4MA2d54xaVGOAbRqxxl_F8dtdnNjnxPftP2V_lDwoVRrUWXDNcuHEQbHZIChrSyHrgt6-PrSmHYfORsOcQILDWURciwOqV1YtoA4giGPrt9qIkKcYqnlyIBeKJkCY'
}

];

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Food fav="kimchi" />
      <Potato DDD="you" />
      </div>
  );
}

export default App
