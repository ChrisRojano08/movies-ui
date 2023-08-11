import { useHistory } from 'react-router-dom';
import logo from './image/logo.png';

const NavBar = () => {
    const history = useHistory();

    return (
        <nav className='navbar navbar-expand-sm bg-secondary p-3'>
            <div className="container-fluid">
                <button className='btn' onClick={() => history.push('/')}>
                    <img src={logo} alt='Inicio' className='img-fluid img-btn' />
                </button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 navbar-nav-scroll"></ul>

                    <form className="d-flex" role="search">
                        <ul className="navbar-nav me-auto navbar-nav-scroll">
                            <li className="nav-item dropdown">
                                <button className="btn btn-light dropdown-toggle mx-1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Administración
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item" onClick={() => history.push('/moviesGrid')}>Peliculas</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item" onClick={() => history.push('/seriesGrid')}>Series</button>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <button className='btn mx-1 btn-light' onClick={() => history.push('/movies')}>Películas</button>
                        <button className='btn mx-1 btn-light' onClick={() => history.push('/series')}>Series</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar