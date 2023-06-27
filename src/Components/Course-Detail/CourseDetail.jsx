import React from 'react';
import style from './courseDetail.css';
import { Link, useParams } from 'react-router-dom'
import Courses from '../../Fake-Courses/courses.json'
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import myImage from '../../../public/Capture.jpg';

const CourseDetail = () => {

    const { courseId } = useParams();

    const singleCourse = Courses.filter(course => course.id == courseId);


    const myCourse = singleCourse[0];

    return (
        <div className='course-detail'>
            <div>
                <Image className='image-section' src={myCourse.image} />
                <h1 className='heading text-danger'>{myCourse.name}</h1>
            </div>
            <Container>
                <h1 className='title'>Course Detail</h1>
                 <Card className='text-center'>
                    <Card.Header as="h5"><h1 className='text-danger'>{myCourse.name}</h1></Card.Header>
                    <Card.Body style={{ width: '100%', height: '100%' }}>
                        <Card.Title><h3>{myCourse.fullName}</h3></Card.Title>
                        <Card.Text>
                            {myCourse.detail}
                            
                        </Card.Text>
                        <h3 className='text-danger'>Course fee : $ {myCourse.Cost}</h3>
                        <br />
                        <Button variant="primary">Buy Course</Button>
                    </Card.Body>
                </Card>
            </Container >

            <Container className='card-teacher'>
                <Card className=" text-dark">
                    <Card.Img className='card-image' src={myImage} alt="Card image" />
                    <Card.ImgOverlay className='card-detail'>
                        <Card.Title> <h3 className='text-warning'>Learn English With Our Best Teachers</h3> </Card.Title>
                        <br />
                        <Card.Text>
                            <h4 className='text-warning'>We Offer So Many Courses</h4>
                        </Card.Text>
                        <br />
                        <Link to={'/teachers'}><Button variant="outline-success">Our Teachers</Button></Link>
                    </Card.ImgOverlay>
                </Card>
            </Container>

        </div >
    );
};

export default CourseDetail;