import React from "react"
import axios from "axios"
import Movie from "../components/Movie"
import "./Home.css"

class Home extends React.Component{
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
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating') 
        //평점 내림차순으로 영화 데이터 받기

        //state의 movies[]에 할당
        this.setState({movies, isLoading: false})
    }

    //초기 render() 가 끝나면 실행된다
    componentDidMount(){
        //함수 호출
        this.getMovies()
    }

    //View
    render(){
        //변수 isLoading, moives 선언후 state의 boolean값과 영화 데이터 할당
        const { isLoading, movies } = this.state

        return(
            <section className="container">
                {/*삼항 연산자 true : false 따옴표와 콜론의 위치 주의 */}
                { isLoading ?( 
                    <div className="loader">
                    <span className="loader-text:">Loading...</span>
                    </div>
                 ) : (
                     <div className="movies">
                         {
                            movies.map((movie) => {
                    
                                return( <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    year={movie.year}
                                    title={movie.title}
                                    summary={movie.summary}
                                    poster={movie.medium_cover_image}
                                    genres={movie.genres} /> );
                            }) 
                         }
                     </div>
                    )}
            </section>
        )
    }
}

export default Home; //까먹지 말기
