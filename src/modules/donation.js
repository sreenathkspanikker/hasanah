import React, { useState } from "react";
import DonationList from "../componentes/donationList";
import Addmore from "../componentes/addmore";
import Total from "../componentes/total";
import { Row, Col, Button } from "react-bootstrap";

const Donation = () => {
  const [state, setState] = useState(0);

  return (
    <div className="app-donation">
      <h2>Donation list</h2>
      <Row>
        <Col lg={7}>
          <DonationList totlAmount={(amount) => setState(amount)} />
        </Col>
        <Col lg={5}>
          <div className="wrap">
            <Addmore />
            <Total amount={state} />
          </div>
          <article className="article-donation">
            <p>
              You have chosen a monthly recurring donation, Your creadit card
              will be changed $125.00 today. Starting next month, your credit
              card will be charged $15.00 each month..
            </p>
            <Button variant="link-black">Learn more</Button>
          </article>
        </Col>
      </Row>
    </div>
  );
};

export default Donation;
