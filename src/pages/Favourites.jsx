import '../css/Favorites.css'
import { useMovieContext } from '../context/MovieContext'
import MovieCard from '../components/MovieCard'

const Favourites = () => {
  const {favorites} = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>My Favourites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} id={movie.id} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="favorites-empty">
        <h2>No Favourite Movies Yet!</h2>
        <p>Add movies to favourites and they will appear here!</p>
    </div>
  )
}

export default Favourites