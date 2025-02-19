import '../css/MovieCard.css'
import { useMovieContext } from '../context/MovieContext';

const MovieCard = ({movie}) => {
    const {addFavorite, removeFavorite, isFavorite} = useMovieContext();
    const favorite = isFavorite(movie.id);

    const onFavClick = (e) => {
        e.preventDefault();
        if (favorite) removeFavorite(movie.id)
        else addFavorite(movie)
    }

  return (
    <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavClick}> ♥ </button>
            </div>
        </div>

        <div className="movie-info">
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-date">{movie.release_date?.split("-")[0]}</p>

        </div>

    </div>
  )
}

export default MovieCard