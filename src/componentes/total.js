import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Icon from '../componentes/icon'

const Total = () => {
    return (
        <Card className="total">
            <Card.Body>
                <div className="content">
                    <article>
                        <Card.Title><Icon name="dollar" size="0.9em"  /> 280</Card.Title>
                        <Card.Text>Total due today</Card.Text>
                    </article>
                    <article>
                        <Card.Title><Icon name="dollar" size="0.9em"  /> 15</Card.Title>
                        <Card.Text>Including monthly payment</Card.Text>
                    </article>
                </div>
                <Button>Continue</Button>
            </Card.Body>
        </Card>
    )
}

export default Total
