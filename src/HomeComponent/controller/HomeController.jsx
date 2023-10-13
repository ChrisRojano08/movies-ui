import { Urls } from "../../resources/Urls";

export async function getMovies() {
    const result = await fetch(Urls.movies.getCarousel).then(result => result.json());

    return result;
};

export async function getSeries() {
    const result = await fetch(Urls.series.getCarousel).then(result => result.json());

    return result;
};