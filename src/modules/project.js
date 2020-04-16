import React from "react";
import {
  ButtonGroup,
  Button,
  Card,
  Row,
  Col,
  ProgressBar,
} from "react-bootstrap";
import Api from "../utils/project.json";
import Slider from "react-slick";
import ImgOne from "../assets/images/project-1.jpg";
import ImgTwo from "../assets/images/project-2.jpg";
import ImgThree from "../assets/images/project-3.jpg";
import Icon from "../componentes/icon";

const Project = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="projects">
      <h2>
        You may also like these projects
        <Button>Descover all</Button>
      </h2>

      <Slider {...settings}>
        <div className="slide">
          <Card className="card-project">
            <Card.Img variant="top" src={ImgOne} />
            <Card.Body>
              <ul>
                <li>Animals</li>
                <li>Egypt</li>
              </ul>
              <Card.Title>Future Campaign</Card.Title>
              <Card.Text>
                <strong>40</strong> raised of $110,000
              </Card.Text>
              <ProgressBar now={70} />
              <Card.Text>35 days left</Card.Text>
              <ButtonGroup aria-label="Basic example">
                <Button variant="primary">Donate</Button>
                <Button variant="like">
                  <Icon name="like" size="1.3em" />
                </Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </div>
        <div className="slide">
          <Card className="card-project">
            <Card.Img variant="top" src={ImgTwo} />
            <Card.Body>
              <ul>
                <li>Animals</li>
                <li>Egypt</li>
              </ul>
              <Card.Title>Future Campaign</Card.Title>
              <Card.Text>
                <strong>40</strong> raised of $110,000
              </Card.Text>
              <ProgressBar now={70} />
              <Card.Text>35 days left</Card.Text>
              <ButtonGroup aria-label="Basic example">
                <Button variant="primary">Donate</Button>
                <Button variant="like">
                  <Icon name="like" size="1.3em" />
                </Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </div>
        <div className="slide">
          <Card className="card-project">
            <Card.Img variant="top" src={ImgThree} />
            <Card.Body>
              <ul>
                <li>Animals</li>
                <li>Egypt</li>
              </ul>
              <Card.Title>Future Campaign</Card.Title>
              <Card.Text>
                <strong>40</strong> raised of $110,000
              </Card.Text>
              <ProgressBar now={70} />
              <Card.Text>35 days left</Card.Text>
              <ButtonGroup aria-label="Basic example">
                <Button variant="primary">Donate</Button>
                <Button variant="like">
                  <Icon name="like" size="1.3em" />
                </Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </div>
        <div className="slide">
          <Card className="card-project">
            <Card.Img variant="top" src={ImgTwo} />
            <Card.Body>
              <ul>
                <li>Animals</li>
                <li>Egypt</li>
              </ul>
              <Card.Title>Future Campaign</Card.Title>
              <Card.Text>
                <strong>40</strong> raised of $110,000
              </Card.Text>
              <ProgressBar now={70} />
              <Card.Text>35 days left</Card.Text>
              <ButtonGroup aria-label="Basic example">
                <Button variant="primary">Donate</Button>
                <Button variant="like">
                  <Icon name="like" size="1.3em" />
                </Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </div>
      </Slider>

      {/* 
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
                  <Card.Text>
                    <strong>{d.price}</strong> {d.raised}
                  </Card.Text>
                  <ProgressBar now={d.progress} />
                  <Card.Text>{d.date}</Card.Text>
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="primary">Donate</Button>
                    <Button variant="like">
                      <Icon name="like" size="1.3em" />
                    </Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row> */}
    </div>
  );
};

export default Project;
