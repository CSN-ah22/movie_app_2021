import PropTyes from 'prop-types'

function Movie({id,title,year,summary,poster}){
    return (
        <div class="movie-data">
            <h3 class="movie-title">{title}</h3>
            <h5 class="movie-year">{year}</h5>
            <p class="movie-summary">{summary}</p>
        </div>
    )
}

Movie.PropTyes = {
    id: PropTyes.number.isRequired,
    year: PropTyes.string.isRequired,
    title: PropTyes.string.isRequired,
    summary: PropTyes.string.isRequired,
    poster: PropTyes.string.isRequired
}

export default Movie;