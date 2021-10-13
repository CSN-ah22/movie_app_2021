import PropTyes from 'prop-types'

function Movie({id,title,year,summary,poster}){
    return (
        <h1>{title}</h1>
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