import React from 'react'
import DonationList from '../componentes/donationList'
import Addmore from '../componentes/addmore'
import Total from '../componentes/total'
import { Row, Col, Button } from 'react-bootstrap'

const Donation = () => {
    return (
        <div className="app-donation">
            <h2>Donation list</h2>
            <Row>
                <Col lg={7}><DonationList/></Col>
                <Col lg={5}>
                    <div className="wrap">
                        <Addmore />
                        <Total />
                    </div>
                    <article className="article-donation">
                        <p>You have chosen a monthly recurring donation, Your creadit card will be changed $125.00 today. Starting next month, your credit card will be charged $15.00 each month..</p>
                        <Button>Learn more</Button>
                    </article>
                </Col>
            </Row>
        </div>
    )
}

export default Donation
