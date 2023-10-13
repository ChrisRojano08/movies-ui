import { Urls } from "../../resources/Urls";

export async function getMovies(data) {
    const result = await fetch(Urls.movies.search, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    }).then(result => result.json());

    return result;
};

export async function getMoviesGenres(){
    const result = await fetch(Urls.movies.getGenres).then(result => result.json());

    return result;
};

export async function getMovieDirectors(){
    const result = await fetch(Urls.movies.getDirectors).then(result => result.json());

    return result;
};

export async function getVideo(data){
    const result = await fetch(Urls.general.getVideo ,{
        method: "POST",
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    }).then(result => result.json());

    return result;
};