import React, {useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Progress } from 'antd';
import Icon from '../componentes/icon'

const Addmore = () => {
    const [state, setstate] = useState(0)

    useEffect(() => {
        setTimeout(() => setstate(70), 1000);
    }, [])


    return (
        <Card className="addmore">
            <Card.Body>
                <div className="content">
                    <Progress type="circle" percent={state} width="72px" height="72px" />
                    <article>
                        <Card.Title><Icon name="dollar" size="0.9em"  /> 1400</Card.Title>
                        <Card.Text>of Zakat will remain</Card.Text>
                    </article>
                </div>
                <Button>Add more projects</Button>
            </Card.Body>
        </Card>
    )
}

export default Addmore
