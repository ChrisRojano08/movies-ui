import { React, useEffect, useState } from 'react';
import { getSeries } from '../controller/SeriesController.jsx';

const SeriesGridComponent = () => {
    const [seriesData, setSeriessData] = useState([
        {
            banner: "",
            description: "",
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

    const [params, setParams] = useState({
        page: 1,
        query: '',
        limit: 20,
        genre: [],
        mode: 'all'
    });

    const [pages, setPages] = useState(0);

    useEffect(() => {
        initData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        initData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params]);

    const initData = async () => {
        const dataD = await getSeries(params);

        if (dataD.success) {
            setSeriessData(dataD.data);
            setPages(dataD.pages);
            return true;
        } else {
            return false;
        }
    }

    const renderMovs = () => {
        return (
            seriesData.map((mov) => (
                mov.founded ?
                    <tr>
                        <td className='align-middle'>{mov.filename}</td>
                        <td className='align-middle'>{mov.title}</td>
                        <td className='text-center align-middle'>
                            <i className="bi bi-check text-success fs-4"></i>
                        </td>
                        <td className='text-center align-middle'><button className='btn btn-primary'><i className="bi bi-pencil-square"></i></button></td>
                        <td className='text-center align-middle'><button className='btn btn-danger'><i className="bi bi-trash-fill"></i></button></td>
                    </tr>
                    :
                    <tr className="table-active">
                        <td className='align-middle'>{mov.filename}</td>
                        <td className='align-middle'>{mov.title}</td>
                        <td className='text-center align-middle'>
                            <i className="bi bi-x text-danger fs-4 "></i>
                        </td>
                        <td className='text-center align-middle'><button className='btn btn-primary'><i className="bi bi-pencil-square"></i></button></td>
                        <td className='text-center align-middle'><button className='btn btn-danger'><i className="bi bi-trash-fill"></i></button></td>
                    </tr>
            ))
        );
    }

    return (
        <div className='container-fluid my-4 mt-4 p-4'>
            <div className='row my-2 justify-content-center mx-1'>
                <div className='col-12'>
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
            {
                seriesData.length === 0 ?
                    <div className='row row-cols-1 g-4 mb-4 mt-2 justify-content-center p-4'>
                        <section className='text-center'>
                            <p className='fs-3 text-white'>No se han encontrado series que coincidan con el criterio de búsqueda!</p>
                        </section>
                    </div>
                    :
                    <div className='row p-4 table-responsive-sm'>
                        <table className="table table-bordered table-dark border-secondary">
                            <thead className='table-light text-center'>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Titulo</th>
                                    <th scope="col">Encontrado</th>
                                    <th scope="col" colSpan='2'>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderMovs()}
                            </tbody>
                        </table>
                    </div>
            }

            <div className='row'>
                {
                    seriesData.length === 0 ?
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
    )
}

export default SeriesGridComponent