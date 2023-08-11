export async function getMovies(data) {
    const result = await fetch('http://localhost:5000/movies/search',{
        method: "POST",
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    }).then(result => result.json());

    return result;
};

export async function getMoviesGenres(){
    const result = await fetch('http://localhost:5000/movies/getGenres').then(result => result.json());

    return result;
};

export async function getMovieDirectors(){
    const result = await fetch('http://localhost:5000/movies/getDirectors').then(result => result.json());

    return result;
};
