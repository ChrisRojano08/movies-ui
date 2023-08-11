import { React, useEffect, useState, useRef } from 'react';

const MovieComponent = (props) => {
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

    useEffect(() => {
        console.log(props);

        setMovieData(props.location.props)
    }, [props]);

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
                </div>
            </div>
            </FadeInSection>
        </div>
    )
}

export default MovieComponent