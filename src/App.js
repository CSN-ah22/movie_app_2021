import Potato from "./Potato"


function Food({name}){
  //const {fav}=props; //fav 로 변수선언을 해주어서 값을 담고 출력한다

  return <h1>I like {name}</h1>;
  
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
      
      {
        foodILike.map(dish => (<Food name={dish.name} />))
      }
      {/* <Potato DDD="you" /> */}
      </div>
  );
}

export default App
