import React, { useState, useEffect } from 'react'
import { Card, ListGroup, Badge, Dropdown } from 'react-bootstrap'
import Img from '../assets/images/avatar-2.jpg'
import api from '../utils/donation.json'
import Icon from '../componentes/icon'
import { Radio } from 'antd';

const DonationList = () => {
    const [state, setstate] = useState(api.donation)
    const [values, setValues] = useState(1)

    useEffect(() =>  setstate(api.donation), [])

      const onChange = e => {          
        console.log('radio checked', e.target.value);
        setValues(e.target.value)
      };

    
    return(
        <Card className="c-donation">
            <ListGroup variant="flush">
                {state.map((d, i) => {
                    return (
                        <ListGroup.Item>
                            <div className="details mb-3">
                                <Card className="card-message">
                                    <Card.Img variant="left" src={Img} />
                                    <Card.Body>
                                        <div className="text-wrap">
                                            <Card.Title>{d.title}</Card.Title>
                                            <Card.Text>{d.description}</Card.Text>
                                        </div>
                                        <Dropdown>
                                            <Dropdown.Toggle  id="edit-list">
                                               <Icon name="dots" size="0.6em"/>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Move to Following projects</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="action">
                                <Radio.Group onChange={onChange} value={values}>
                                    {d.radio.map(data => {
                                        return (
                                            <Radio value={data.value}>{data.name}</Radio>
                                        )
                                    })}
                                    
                                </Radio.Group>
                                <Badge><Icon name="dollar" size="0.88em"/> {d.price}</Badge>
                            </div>
                        </ListGroup.Item>
                    )
                })}
            </ListGroup>
        </Card>
    )
}
export default DonationList
