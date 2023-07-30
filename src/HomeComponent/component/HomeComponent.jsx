import { React, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import {writeJsonFile} from 'write-json-file';

const HomeComponent = () => {

    useEffect(()=>{
        console.log('hello world!');

        
    })
    
    return (
        <div className="container-fluid p-4 text-white">
            <h2 className='text-white text-center my-4'>Bienvenid@ al Perla negra!</h2>

            <div className='row justify-content-center alig-items-center my-4'>
                <div className='col-10'>
                    
                </div>
            </div>
        </div>
    )
}

export default withRouter(HomeComponent)