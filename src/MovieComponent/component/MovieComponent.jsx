import { React, useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Urls } from '../../resources/Urls';

const MovieComponent = (props) => {
    const history = useHistory();
    const [movieData, setMovieData] = useState(
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
    );
    const [moviePath, setMoviePath] = useState('');

    useEffect(() => {
        setMovieData(props.location.props);

        console.log(props);
    }, [props]);

    useEffect(() => {
        return history.listen(() => {
          if (history.action === "POP") {
            window.location.reload();
          }
        });
      }, [history]);

    const startVideo = () => {
        if(moviePath === ''){
            setMoviePath(Urls.general.getVideo+"?path=" + movieData.path);
        }
    }

    const stopVideo = () => {
        let vid = document.getElementById("videoMov");
        vid.pause();
    }

    function FadeInSection(props) {
        const [isVisible, setVisible] = useState(false);
        const domRef = useRef();
        useEffect(() => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => setVisible(entry.isIntersecting));
            });
            observer.observe(domRef.current);
        }, []);
        return (
            <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef} >
                {props.children}
            </div>
        );
    }

    return (
        <div>
            <FadeInSection>
                <div className="banner">
                    <img src={movieData.banner} alt='' className='banner_img' />
                    <div className="banner-container p-4 mx-4">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-12 col-md-6 col-lg-7 col-xl-6 text-white">
                                <div className='d-xl-block d-none'>
                                    <h1 className='mb-4'>{movieData.title}</h1>
                                </div>
                                <div className='d-xl-block d-none'>
                                    <p className='mt-2 fs-4 '>{movieData.description}</p>
                                </div>

                                <div className='d-lg-block d-xl-none d-none'>
                                    <h1 className='mb-4'>{movieData.title}</h1>
                                </div>
                                <div className='d-lg-block d-xl-none d-none'>
                                    <p className='mt-2 fs-5 '>{movieData.description}</p>
                                </div>

                                <div className='d-md-block d-lg-none d-none'>
                                    <h2 className='mb-4'>{movieData.title}</h2>
                                </div>
                                <div className='d-md-block d-lg-none d-none'>
                                    <p className='mt-2 fs-6 '>{movieData.description}</p>
                                </div>

                                <div className='d-md-none'>
                                    <h2 className='mb-4 text-center'>{movieData.title}</h2>
                                </div>

                            </div>
                            <div className="col-12 col-md-1 col-lg-1 col-xl-1"></div>
                            <div className="col-8 col-md-5 col-lg-4 col-xl-3 p-4">
                                <img className="img-thumbnail" src={movieData.poster} alt="" />
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center mb-4">
                            <button type="button" className="btn btn-primary"
                                onClick={()=>startVideo()} 
                                data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Reproducir
                            </button>
                        </div>
                    </div>
                </div>

            </FadeInSection>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
                data-bs-backdrop='static' data-bs-keyboard="false">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content bg-dark">
                        <div class="modal-header">
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"
                                onClick={()=>stopVideo()}>
                            </button>
                        </div>
                        <div className="modal-body">
                            <video id='videoMov' src={moviePath} controls autoPlay={false} style={{'width':'100%', 'height': '100%'}} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MovieComponent