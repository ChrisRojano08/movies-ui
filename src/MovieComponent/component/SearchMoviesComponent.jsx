import { React, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getMovies, getMovieDirectors, getMoviesGenres } from '../controller/MovieController.jsx';
import { swalError } from '../../resources/Utils.jsx';
import { Typeahead } from 'react-bootstrap-typeahead';

const SearchMoviesComponent = () => {
    const history = useHistory();

    const [moviesData, setMoviesData] = useState([{
        banner: "", description: "",
        filename: "",
        founded: false,
        genres: [],
        id: 0,
        original_title: "",
        path: "",
        poster: "",
        title: ""
    }]);

    const [params, setParams] = useState({
        page: 1,
        query: '',
        director: '',
        limit: 12,
        genre: [],
        mode: 'search'
    });

    const [directors, setDirectors] = useState(['']);
    const [moviesGenres, setMoviesGenres] = useState([{ id: '', name: '' }]);
    const [pages, setPages] = useState(0);

    useEffect(() => {
        initData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        getMoviesRes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params]);

    const initData = async () => {
        if (getMoviesRes()) {
            const genresM = await getMoviesGenres();

            if (genresM.success) {
                setMoviesGenres(genresM.data);
                const directM = await getMovieDirectors();

                if (directM.success) {
                    setDirectors(directM.data);

                } else {
                    swalError('Error al obtener directores');
                }
            } else {
                swalError('Error al obtener generos');
            }
        } else {
            swalError('Error al obtener peliculas');
        }
    }

    const getMoviesRes = async () => {
        const dataD = await getMovies(params);

        if (dataD.success) {
            setMoviesData(dataD.data);
            setPages(dataD.pages);
            return true;
        } else {
            return false;
        }
    }

    const goDetails = (dataSend) => {
        history.push({ pathname: '/movieDetails', props: dataSend });
    }

    const setGenres = (e) => {
        let genresAx = []

        e.forEach(element => {
            genresAx.push(element.name);
        });

        setParams(prevParam => ({
            ...prevParam,
            genre: genresAx,
            page: 1
        }));
    }

    const setDir = (e) => {
        let dirNm = ''
        e.length === 0 ? dirNm = '' : dirNm = e[0]

        setParams(prevParam => ({
            ...prevParam,
            director: dirNm,
            page: 1
        }));
    }

    const contentCards = (dataToMap) => {
        return (
            dataToMap.map((mov, idN) => (
                <div className="col p-1" key={idN}>
                    <div className="card mx-1 clickable" onClick={() => goDetails(mov)}>
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
        <div className="container-fluid my-4 mt-4 p-4">

            <div className='row my-2'>
                <div className='col-3'></div>
                <div className='col-9'>
                    <div className="d-flex justify-content-center">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Buscar"
                                onChange={(e) => setParams(prevParam => ({
                                    ...prevParam,
                                    query: e.target.value,
                                    page: 1
                                }))} aria-label="Buscar" aria-describedby="button-addon1" value={params.query} />
                            <button className="btn btn-secondary" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-3 text-white'>
                    <section className='my-4'>
                        <label className='fs-5 mb-1'>Categoria</label>

                        <Typeahead
                            id="basic-typeahead-single"
                            labelKey="name"
                            multiple
                            options={moviesGenres}
                            onChange={(e) => setGenres(e)}
                            placeholder="Agrega un categoria"
                        />
                    </section>
                    <section className='my-4'>
                        <label className='fs-5 mb-1'>Director</label>

                        <Typeahead
                            id="basic-typeahead-single"
                            labelKey="name"
                            options={directors}
                            onChange={(e) => setDir(e)}
                            placeholder="Selecciona un director"
                        />

                    </section>
                </div>
                <div className='col-9'>
                    {
                        moviesData.length === 0 ?
                            <div className='row row-cols-1 g-4 mb-4 mt-2 justify-content-center p-4'>
                                <section className='text-center'>
                                    <p className='fs-3 text-white'>No se han encontrado peliculas que coincidan con el criterio de búsqueda!</p>
                                </section>
                            </div>
                            :
                            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-4 mt-2 justify-content-center p-4'>
                                {contentCards(moviesData)}
                            </div>
                    }
                    <div className='row'>
                        {
                            moviesData.length === 0 ?
                                <></>
                                :
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">
                                        {
                                            params.page === 1 ?
                                                <li className="page-item disabled">
                                                    <span className="page-link">
                                                        <i className="bi bi-chevron-double-left"></i>
                                                    </span>
                                                </li>
                                                :
                                                <li className="page-item clickable" onClick={() => setParams(prevParam => ({
                                                    ...prevParam,
                                                    page: 1
                                                }))}>
                                                    <span className="page-link">
                                                        <i className="bi bi-chevron-double-left"></i>
                                                    </span>
                                                </li>
                                        }

                                        {
                                            params.page === 1 ?
                                                <li className="page-item disabled">
                                                    <span className="page-link">
                                                        <i className="bi bi-chevron-left"></i>
                                                    </span>
                                                </li>
                                                :
                                                <li className="page-item clickable" onClick={() => setParams(prevParam => ({
                                                    ...prevParam,
                                                    page: params.page - 1
                                                }))}>
                                                    <span className="page-link">
                                                        <i className="bi bi-chevron-left"></i>
                                                    </span>
                                                </li>
                                        }

                                        <li className="page-item">
                                            <span className="page-link">
                                                {params.page}
                                            </span>
                                        </li>

                                        {
                                            params.page === pages ?
                                                <li className="page-item disabled">
                                                    <span className="page-link">
                                                        <i className="bi bi-chevron-right"></i>
                                                    </span>
                                                </li>
                                                :
                                                <li className="page-item clickable" onClick={() => setParams(prevParam => ({
                                                    ...prevParam,
                                                    page: params.page + 1
                                                }))}>
                                                    <span className="page-link">
                                                        <i className="bi bi-chevron-right"></i>
                                                    </span>
                                                </li>
                                        }

                                        {
                                            params.page === pages ?
                                                <li className="page-item disabled">
                                                    <span className="page-link">
                                                        <i className="bi bi-chevron-double-right"></i>
                                                    </span>
                                                </li>
                                                :
                                                <li className="page-item clickable" onClick={() => setParams(prevParam => ({
                                                    ...prevParam,
                                                    page: pages
                                                }))}>
                                                    <span className="page-link">
                                                        <i className="bi bi-chevron-double-right"></i>
                                                    </span>
                                                </li>
                                        }

                                    </ul>
                                </nav>
                        }

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchMoviesComponent