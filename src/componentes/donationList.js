import React, { useState, useEffect } from "react";
import { Card, ListGroup, Badge, Dropdown, FormControl } from "react-bootstrap";
import api from "../utils/donation.json";
import Icon from "../componentes/icon";
import { Radio, notification } from "antd";

const DonationList = (props) => {
  const [state, setstate] = useState(api.donation);
  const [isEmpty, setEmpty] = useState(false);

  useEffect(() => {
    setstate(api.donation);
    totalAmount();
  }, []);

  // NOTIFICATION
  const openNotification = (placement) => {
    notification.info({
      message: "Success",
      description: "Donation list item deleted",
      placement,
    });
  };

  // ON CHANGE
  const onChangeField = (e, idx) => {
    const value = e.target.value === "" ? 0 : e.target.value;
    state[idx].price = value;
    setstate(state);
    totalAmount();
  };

  // TOTAL COUNT
  const totalAmount = () => {
    const price = state.reduce(function (acc, val) {
      return parseInt(acc) + parseInt(val.price);
    }, 0);
    props.totlAmount(price);
  };

  // DELETE ITEMS
  const deleteItem = (idx) => {
    state.splice(idx, 1);
    setstate(state);
    totalAmount();
    openNotification("bottomRight");
    if (state.length === 0) {
      setEmpty(true);
    }
  };

  return (
    <Card className="c-donation">
      {isEmpty && (
        <Card className="card-message">
          <Card.Body>
            <Card.Title className="m-0">No data foud</Card.Title>
          </Card.Body>
        </Card>
      )}
      <ListGroup variant="flush">
        {state.map((d, i) => {
          return (
            <ListGroup.Item>
              <div className="details mb-3">
                <Card className="card-message">
                  <Card.Img variant="left" src={d.img} />
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
                        <Dropdown.Item onClick={() => deleteItem(i)}>
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
