import React from 'react'
import { ButtonGroup, Button, Card, Row, Col, ProgressBar } from 'react-bootstrap'
import Api from '../utils/project.json'
import Img from '../assets/images/project-1.jpg'
import Icon from '../componentes/icon'

const Project = () => {

    return (
        <div className="projects">
            <h2>
                You may also like these projects
                <Button>Descover all</Button>
            </h2>

            <Row>
                {Api.projects.map((d, i) => {
                    return (
                        <Col md={6} lg={4}>
                        <Card className="card-project">
                            <Card.Img variant="top" src={Img} />
                            <Card.Body>
                                <ul>
                                    <li>Animals</li>
                                    <li>Egypt</li>
                                </ul>
                                <Card.Title>{d.title}</Card.Title>
                                <Card.Text><strong>{d.price}</strong> {d.raised}</Card.Text>
                                <ProgressBar now={d.progress} />
                                <Card.Text>{d.date}</Card.Text>
                                <ButtonGroup aria-label="Basic example">
                                    <Button variant="primary">Donate</Button>
                                    <Button variant="like"><Icon name="like" size="1.3em" /></Button>
                                </ButtonGroup>

                            </Card.Body>
                        </Card>
                    </Col>
                    )
                })}
            </Row>

        </div>
    )
}

export default Project
