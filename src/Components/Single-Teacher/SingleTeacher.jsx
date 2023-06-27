import React from 'react';
import style from './singleTeacher.css'

const SingleTeacher = (props) => {

    const { name, phone, username, website } = props.teacher;
    return (
            <div className="col-lg-6">
                <div className="card">
                    <div className='row g-0'>
                        <div className='col-6 col-md-5'>
                            <img src={props.teacher.address.photo
                            } className='teacher-image' alt="" />

                        </div>
                        <div className='col-6 col-md-7'>
                            <div className='m-3 d-flex flex-column'>
                                <div className='text-body'>
                                    <h5 className='card-title'>{name}</h5>
                                    <h6>{username}</h6>
                                    <h4 className='card-title'>Website : {website}</h4>
                                    <h5 className='card-title mb-3 text-danger'>{phone}</h5>
                                    <p>Teaches : {props.teacher.address.subject}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        
    );
};

export default SingleTeacher;