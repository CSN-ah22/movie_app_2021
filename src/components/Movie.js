import PropTyes from 'prop-types'
import "./Movie.css"

function Movie({title,year,summary,poster, genres}){
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie-data">
                <h3 className="movie-title">{title}</h3>
                <h5 className="movie-year">{year}</h5>
                <ul className="movie-genres">
                    {genres.map((genre, index) => {
                        return(
                            <li key={index} className="movie-genre">{genre}</li>
                        )
                    })
                    }
                </ul>
                <p className="movie-summary">{summary.slice(0,180)}...</p>
            </div>
        </div>
    )
}

Movie.PropTyes = {
    year: PropTyes.string.isRequired,
    title: PropTyes.string.isRequired,
    summary: PropTyes.string.isRequired,
    poster: PropTyes.string.isRequired,
    genres: PropTyes.arrayOf(PropTyes.string).isRequired
}

export default Movie;