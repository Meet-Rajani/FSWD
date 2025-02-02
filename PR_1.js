const movies = [
{ 
    title: " Golmaal-3 ",
    genre: "Comedy", 
    rating: 7.5, 
    releaseYear: 2010 
},
{ 
    title: " Singham ", 
    genre: "Action", 
    rating: 7.2, 
    releaseYear: 2011 
},
{ 
    title: " Tumbbad ",
    genre: "Horror", 
    rating: 8.4, 
    releaseYear: 2018 
}

];

function addMovie(title, genre,rating,releaseYear){
const newMovie = {
title,genre,rating,releaseYear
};
movies.push(newMovie);
console.log(`Movie ${title} added successfully`);
}

function listMoviesByGenre(genre){
console.log(`Movies in ${genre}`);
const filteredMovies = movies.filter(movie => movie.genre.includes(genre));
if (filteredMovies.length === 0) {
console.log("No movies found");
}else{
filteredMovies.forEach(movie => {
console.log(`Title: ${movie.title}, Genre: ${movie.genre}, Rating:
${movie.rating}, Release Year: ${movie.releaseYear}`);
})
}
}


function findHighestRatedMovie() {
const highestRated = movies.reduce((prev, curr) => (prev.rating > curr.rating
? prev : curr));
console.log(`Highest-rated movie: ${highestRated.title}
(${highestRated.rating})`);
}

function listAllMovieTitles(){
const titles = movies.map(movie => movie.title);
console.log("Movie Title: ", titles.join(", "));
}

function findMoviesAfterYear(year) {
console.log(`Movies released after ${year}:`);
const recentMovies = movies.filter(movie => movie.releaseYear > year);
if (recentMovies.length === 0) {
console.log("No movies found.");
} else {
recentMovies.forEach(movie => {
console.log(`Title: ${movie.title}, Release Year:
${movie.releaseYear}`);
});
}
}

function listMovies(){
console.log("Movies List");
movies.forEach((movie, index) => {


console.log(`Title: ${movie.title}, Genre: ${movie.genre}, Rating:
${movie.rating}, Release Year: ${movie.releaseYear}`);
});
}

console.log();
addMovie("Toy Story", "Family/Comedy", 8.6, 2012);
console.log();
listMoviesByGenre("Comedy");
console.log();
findHighestRatedMovie();
console.log();
listAllMovieTitles();
console.log();
findMoviesAfterYear(2015);
console.log();
listMovies();