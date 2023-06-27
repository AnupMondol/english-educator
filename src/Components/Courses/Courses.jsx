import React from 'react';
import style from './Courses.css';
import Image from 'react-bootstrap/Image';
import myImage2 from '../../../public/pexels-pixabay-247819.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import CoursesData from '../../Fake-Courses/courses.json'
import { Container } from 'react-bootstrap';
import NewCourse from '../New-Single-Course/NewCourse';
import { Link } from 'react-router-dom';

import myImage4 from '../../../public/teacher.jpg'

const Courses = () => {
    return (
        <div className='courses-body'>
            <Image className='body-image' src={myImage2} fluid />
            <h1 className='classes'>All The Courses</h1>
            <Container>

                <div className="cream-bg">
                    <div className="container">

                        <div className='row g-5 justify-content-evenly'>
                            {
                                CoursesData.map(cd => <NewCourse key={cd.id} course={cd}></NewCourse>)
                            }
                        </div>



                    </div>
                </div>

            </Container>

            <Container className='card-teacher'>
                <Card className=" text-dark">
                    <img className='card-image' src={myImage4} alt="" />
                    <Card.ImgOverlay className='card-detail'>
                        <h2 className='text-Primary'>Learn English With Our Best Teachers</h2>
                        <br />
                        <br />
                        <Card.Text>
                            <h3 className='text-primary'>Visit Our Teachers Page</h3>
                        </Card.Text>
                        <br />
                        <br />
                        <Link to={'/teachers'}><Button variant="outline-primary">Our Teachers</Button></Link>
                    </Card.ImgOverlay>
                </Card>
            </Container>


        </div>
    );
};

export default Courses;