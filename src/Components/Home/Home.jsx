import React from 'react';
import style from './home.css'

import Courses from '../../Fake-Courses/courses.json'

import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import Course from '../Single-Course/Course';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import myImage from '../../../public/Capture.jpg';
import image3 from '../../../public/home.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div>
                <Image className='image-section' src={image3} />
                <h1 className='heading'>Learn English With Us</h1>
            </div>

            <Container className='card-teacher'>
                <Card className=" text-dark">
                    <img className='card-image' src={myImage} alt="" />
                    <Card.ImgOverlay className='card-detail'>
                        <Card.Title> <h3 className='text-warning'>Learn English With Our Best Teachers</h3> </Card.Title>
                        <br />
                        <Card.Text>
                            <h4 className='text-warning'>We Offer So Many Courses</h4>
                        </Card.Text>
                        <br />
                        <Link to={'/courses'}><Button variant="outline-success">Our Courses</Button></Link>
                    </Card.ImgOverlay>
                </Card>
            </Container>

            <h1 className='classes'>Courses We Offer</h1>
            <Container className='course-container'>

                <CardGroup className='cards'>
                    {
                        Courses.map(corse => <Course key={corse.id} corse={corse}></Course>)
                    }
                </CardGroup>

            </Container>



        </div>
    );
};

export default Home;