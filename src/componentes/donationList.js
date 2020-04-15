import React, { useState, useEffect } from "react";
import { Card, ListGroup, Badge, Dropdown, FormControl } from "react-bootstrap";
import Img from "../assets/images/avatar-2.jpg";
import api from "../utils/donation.json";
import Icon from "../componentes/icon";
import { Radio } from "antd";

const DonationList = (props) => {
  const [state, setstate] = useState(api.donation);

  useEffect(() => {
    setstate(api.donation);
    totalAmount();
  }, []);

  const onChangeField = (e, idx) => {
    const value = e.target.value === "" ? 0 : e.target.value;
    state[idx].price = value;
    setstate(state);
    totalAmount();
  };

  const totalAmount = () => {
    const price = state.reduce(function (acc, val) {
      return parseInt(acc) + parseInt(val.price);
    }, 0);
    props.totlAmount(price);
  };

  const deleteItem = (e, i) => {
    state.splice(i, 1);
    setstate(state);
    totalAmount();
  };

  return (
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
                      <Dropdown.Toggle id="edit-list">
                        <Icon name="dots" size="0.6em" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          Move to Following projects
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => deleteItem(d, i)}>
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Card.Body>
                </Card>
              </div>
              <div className="action">
                <Radio.Group>
                  {d.radio.map((data) => {
                    return <Radio value={data.value}>{data.name}</Radio>;
                  })}
                </Radio.Group>
                <Badge>
                  <Icon name="dollar" size="0.88em" />
                  <FormControl
                    type="number"
                    placeholder={d.price}
                    aria-label="Username"
                    id="price"
                    onChange={(e) => onChangeField(e, i)}
                    aria-describedby="basic-addon1"
                  />
                </Badge>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Card>
  );
};
export default DonationList;
