import React from 'react'; 7
import style from './newCourse.css';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const NewCourse = (props) => {

    const { name, image, company, fullName, Cost, id } = props.course;
    return (
        <div className="col-lg-6">
            <div className="card">
                <div className='row g-0'>
                    <div className='col-6 col-md-5'>
                        <img src={image} className='card-img' alt="" />
                        
                    </div>
                    <div className='col-6 col-md-7'>
                        <div className='card-body d-flex flex-column'>
                            <div className='text-body'>
                                <h5 className='card-title'>{name}</h5>
                                <p>{fullName}</p>
                                <h4 className='card-title'>{company}</h4>
                                <h5 className='card-title mb-3 text-danger'>$ <strong>{Cost}</strong></h5>
                            </div>
                            <div>
                                <div>
                                    <Link to={`/course/${id}`}>
                                        <button type='button' className='btn btn-dark'>Purchase Class</button>
                                    </Link>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default NewCourse;