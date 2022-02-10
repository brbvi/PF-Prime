// Gerar uma lista de filmes do tamanho a desejar
export function getListMovies(size, movies) {
  const popularMovies = []

  for (let i = 0, l = size; i < l; i++) {
    popularMovies.push(movies[i])
  }

  return popularMovies
}
