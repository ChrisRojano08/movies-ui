import { React, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getMovies, getSeries } from '../controller/HomeController.jsx';
import { swalError } from '../../resources/Utils.jsx';

const HomeComponent = () => {
    const history = useHistory();

    const [moviesData, setMoviesData] = useState([
        {
            banner: "", description: "",
            filename: "",
            founded: false,
            genres: [],
            id: 0,
            original_title: "",
            path: "",
            poster: "",
            title: ""
        }
    ]);

    const [seriesData, setSeriessData] = useState([
        {
            banner: "", description: "",
            filename: "",
            founded: false,
            genres: [],
            id: 0,
            original_title: "",
            path: "",
            poster: "",
            title: ""
        }
    ]);

    useEffect(() => {
        initData();
    }, []);

    const initData = async () => {
        const dataD = await getMovies();

        if (dataD.success) {
            setMoviesData(dataD.data);
        } else {
            swalError('Ups');
        }

        const dataS = await getSeries();

        if (dataS.success) {
            setSeriessData(dataS.data);
        } else {
            swalError('Ups');
        }
    }

    const goDetails = (dataSend) => {
        history.push({pathname: '/movieDetails', props: dataSend});
    }

    const contentCards = (dataToMap, typeData) => {
        return (
            dataToMap.map((mov, idN) => (
                <div className="col" key={idN}>
                    <div className="card mx-1 clickable" onClick={()=>goDetails(mov)}>
                        <img src={mov.poster} className="card-img-top img-thumbnail img-home" alt={mov.original_title} />
                        <div className="card-body">
                            <p className="card-title text-center">{mov.title}</p>
                        </div>
                    </div>
                </div>
            ))
        );
    }

    return (
        <div className="container-fluid my-4 mt-4">
            <h2 className='text-white text-center my-4 text-white'>Bienvenid@ al Perla negra!</h2>
            
            <div className='row justify-content-center align-items-center'>
                <div className='col-10'>
                    <h3 className='text-white'>Peliculas</h3>
                    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-4 mt-2 justify-content-center '>
                        {contentCards(moviesData, 'movie')}
                    </div>
                </div>
            </div>

            <div className='row justify-content-center align-items-center my-4'>
                <div className='col-10'>
                    <h3 className='text-white'>Series</h3>
                    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-4 mt-2 justify-content-center '>
                        {contentCards(seriesData, 'serie')}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeComponent