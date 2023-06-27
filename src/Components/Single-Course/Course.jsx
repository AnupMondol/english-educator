import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import style from './course.css'
import { Link } from 'react-router-dom';

const Course = (props) => {

    const { name, image, id, fullName } = props.corse;

    return (
        <div >
            <Row>
                <Col>
                    <Card style={{ width: '22rem', margin: '10px' }}>
                        <img className='image' src={image} alt="" />
                        <Card.Body className='card-body'>
                            <Card.Title className='text-danger'>{name}</Card.Title>
                            <br />
                            <Card.Text className='text-info'>
                                {fullName}
                            </Card.Text>
                            <br />
                            <Link to={`/course/${id}`}><Button variant="warning">See Detail</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Course;