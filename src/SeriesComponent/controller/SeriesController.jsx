export async function getSeries(data) {
    const result = await fetch('http://localhost:5000/series/search',{
        method: "POST",
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    }).then(result => result.json());

    return result;
};

export async function getSeriesGenres(){
    const result = await fetch('http://localhost:5000/series/getGenres').then(result => result.json());

    return result;
};
