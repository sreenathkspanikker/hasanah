import React from 'react'
import Card from 'react-bootstrap/Card'
import Img from '../assets/images/avatar-2.jpg'

const Message = props => {
    return (
        <Card className={`card-message animated ${props.className}`}>
            <Card.Img variant="left" src={Img} />
            <Card.Body>
                <Card.Title>Anita smith</Card.Title>
                <Card.Text>New Mesage</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Message
