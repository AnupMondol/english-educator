import React from 'react';
import style from './teachers.css'
import Image from 'react-bootstrap/Image';
import teacherTopImage from '../../../public/teacherTop.jpg'
import { Button, Card, Container } from 'react-bootstrap';
import fakeTeachers from '../../Fake-Teachers/teachers.json';
import SingleTeacher from '../Single-Teacher/SingleTeacher';
import { Link } from 'react-router-dom';
import aboutImage from '../../../public/aboutUs.jpg'

const Teachers = () => {
    console.log(fakeTeachers);
    return (
        <div>
            <div>
                <Image className='image-section' src={teacherTopImage} />
                <h2 className='heading text-success'>Our Teachers</h2>
            </div>
            <h1 className='classes'>Our Best Teachers</h1>
            <Container>
                {
                    <div className="cream-bg">
                        <div className="container">
                            <div className='row g-5 justify-content-evenly'>
                                {
                                    fakeTeachers.map(teacher => <SingleTeacher key={teacher.id} teacher={teacher}></SingleTeacher>)
                                }
                            </div>
                        </div>
                    </div>
                }
            </Container>

            <Container className='card-teacher'>
                <Card className=" text-dark">
                    <img className='card-image' src={aboutImage} alt="" />
                    <Card.ImgOverlay className='card-detail'>
                        <Card.Title> <h3 className='about-text'>Visit Our About Page</h3> </Card.Title>
                        <br />
                        <Card.Text>
                            <h3 className='about-text'>Stay In Touch</h3>
                        </Card.Text>
                        <br />
                        <br />
                        <Link to={'/aboutUs'}><Button variant="outline-warning">About Us</Button></Link>
                    </Card.ImgOverlay>
                </Card>
            </Container>
        </div>
    );
};

export default Teachers;