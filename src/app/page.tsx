import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { MovieRow } from "./components/MovieRow";
import { getFeaturedMovie, getMoviesByGenre } from "./service/MovieService";

export default async function Home() {
  const featuredMovie = await getFeaturedMovie("101");
  const genres = ["Drama", "Action", "Comedy", "Animation"];

  const moviesByGenres = await Promise.all(
    genres.map(async (genre) => {
      const moviesByGenre = await getMoviesByGenre(genre);
      return { sectionTitle: genre, movies: moviesByGenre };
    })
  );

  return (
    <div className="relative bg-gradient-to-b pb-8">
      <Header />
      <main className="relative mb-48 h-screen pl-4 lg:pl-16 ">
        <Banner movie={featuredMovie} />
        {moviesByGenres.map((moviesBygenre) => (
          <MovieRow
            key={moviesBygenre.sectionTitle}
            sectionTitle={moviesBygenre.sectionTitle}
            movies={moviesBygenre.movies}
          />
        ))}
      </main>
    </div>
  );
}
