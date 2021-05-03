export let movies = [
  {
    id: 1,
    name: "Avengers",
    score: 8
  },
  {
    id: 2,
    name: "The Godfather 1",
    score: 90
  },
  {
    id: 3,
    name: "Logan",
    score: 2
  },
]

export const getMovies = () => movies;

export const getById = (id)=> {
  const filteredMovies = movies.filter(movie => movie.id === id)
  return filteredMovies[0]
}

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter(movie => movie.id !== id)
  if(movies.length > cleanedMovies.length) {
    // deleted
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  }
  movies.push(newMovie);
  return newMovie;
  // 배열에 추가한 후 리턴은 1개만
}