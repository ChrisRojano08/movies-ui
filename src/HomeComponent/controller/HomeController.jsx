export async function getMovies() {
    const result = await fetch('http://localhost:5000/movies/getCarousel').then(result => result.json());

    return result;
};

export async function getSeries() {
    const result = await fetch('http://localhost:5000/series/getCarousel').then(result => result.json());

    return result;
};