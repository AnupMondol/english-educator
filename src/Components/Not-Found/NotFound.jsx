import React from 'react';
import { Image } from 'react-bootstrap';
import errorImg from '../../../public/error.jpg'

const NotFound = () => {
    return (
        <div>
            <div>
                <Image className='image-section' src={errorImg} />
                <h1 className='heading text-danger'>Opps</h1>
            </div>
        </div>
    );
};

export default NotFound;