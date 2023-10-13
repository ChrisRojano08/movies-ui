import { Urls } from "../../resources/Urls";

export async function getSeries(data) {
    const result = await fetch(Urls.series.search ,{
        method: "POST",
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    }).then(result => result.json());

    return result;
};

export async function getSeriesGenres(){
    const result = await fetch(Urls.series.getGenres).then(result => result.json());

    return result;
};
