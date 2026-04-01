export const movies = [
  {
    id: 1,
    image: "images/movie-posters/movie1.webp",
    title: "Zodiac",
    rating: 7.8
  },

  {
    id: 2,
    image: "images/movie-posters/movie2.webp",
    title: "Maze Runner",
    rating: 7.2
  },

  {
    id: 3,
    image: "images/movie-posters/movie3.webp",
    title: "Maze Runner: Scorch Trials",
    rating: 6.7
  },

  {
    id: 4,
    image: "images/movie-posters/movie4.webp",
    title: "Maze Runner: The Death Cure",
    rating: 7.1
  },

  {
    id: 5,
    image: "images/movie-posters/movie5.webp",
    title: "Hunger Games",
    rating: 7.5
  },

  {
    id: 6,
    image: "images/movie-posters/movie6.webp",
    title: "Hunger Games: Catching Fire",
    rating: 7.4
  },

  {
    id: 7,
    image: "images/movie-posters/movie7.webp",
    title: "Hunger Games: Mockingjay Part 1",
    rating: 6.8
  },

  {
    id: 8,
    image: "images/movie-posters/movie8.webp",
    title: "Hunger Games: Mockingjay Part 2",
    rating: 6.9
  },

  {
    id: 9,
    image: "images/movie-posters/movie9.webp",
    title: "Little Women",
    rating: 7.9
  },

  {
    id: 10,
    image: "images/movie-posters/movie10.webp",
    title: "10 Things I Hate About You",
    rating: 7.6
  },

  {
    id: 11,
    image: "images/movie-posters/movie11.webp",
    title: "Good Will Hunting",
    rating: 8.3
  },

  {
    id: 12,
    image: "images/movie-posters/movie12.webp",
    title: "Dead Poets Society",
    rating: 8.3
  },

  {
    id: 13,
    image: "images/movie-posters/movie13.webp",
    title: "The Perks of Being a Wallflower",
    rating: 7.7
  },

  {
    id: 14,
    image: "images/movie-posters/movie14.webp",
    title: "Anul Nou care n-a fost",
    rating: 8.1
  },

  {
    id: 15,
    image: "images/movie-posters/movie15.webp",
    title: "Cinema Paradiso",
    rating: 8.5
  },

  {
    id: 16,
    image: "images/movie-posters/movie16.webp",
    title: "Brazii se frâng dar nu se îndoaie",
    rating: 7.2
  },

  {
    id: 17,
    image: "images/movie-posters/movie17.webp",
    title: "Made of Honor",
    rating: 5.9
  },

  {
    id: 18,
    image: "images/movie-posters/movie18.webp",
    title: "La vita è bella",
    rating: 8.6
  },

  {
    id: 19,
    image: "images/movie-posters/movie19.webp",
    title: "Whiplash",
    rating: 8.5
  },

  {
    id: 20,
    image: "images/movie-posters/movie20.webp",
    title: "Call Me by Your Name",
    rating: 8.2
  }
];

export function getMovieById(movieId){
  let matchingMovie = null;

  movies.forEach((movie) => {
    if(movie.id === movieId){
      matchingMovie = movie;
    }
  });

  return matchingMovie;
}