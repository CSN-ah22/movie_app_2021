import React from "react"
import axios from "axios"

class App extends React.Component{
    state = {
        isLoading: true,
        movies: []
    }

    //영화 데이터 끌어오는 함수
    getMovies = async () => { 
        //async와 await를 꼭 써주어야만 변수 movies에 값을 잘 할당할 수있다
        const {
            data: {
                data:{movies}
            }
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json')
        console.log(movies)
    }

    //초기 render() 가 끝나면 실행된다
    componentDidMount(){
        //함수 호출
        this.getMovies()
    }

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
}

export default App; //까먹지 말기
