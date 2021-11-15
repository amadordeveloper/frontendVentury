import React from "react";

// Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// components
import CustomCarousel from "../../carousel/Carousel";


// styles
import "./Events.css";

// assets   
import thumb from "../../../assets/images/thumb.png";
import slide from "../../../assets/images/slide.png";
import thumb2 from "../../../assets/images/thumb2.png";


const Events = () => {

    const slides = [
        {
            background: slide,
            text:   <Row>
                        <div className="purple-badge">SCIENCE</div>
                        <Col lg={6} xs={12} className="text-slide-left">
                            Youth Talent & Education
                        </Col>
                        <Col lg={6} xs={12} className="text-slide-right">
                            May, 20
                        </Col>
                    </Row>,      
        },
        {
            background: slide,
            text:   <Row>
                        <div className="purple-badge">SCIENCE</div>
                        <Col lg={6} xs={12} className="text-slide-left">
                            Youth Talent & Education
                        </Col>
                        <Col lg={6} xs={12} className="text-slide-right">
                            May, 20
                        </Col>
                    </Row>,   
        }
    ]

    const cardsEvents = [
        {
            title: "10:30AM",
            description: "Webinar: the basics of, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: thumb2,
        },
        {
            title: "2:15PM",
            description: "Team Building Activity🔥",
            image: thumb,
        }
    ];

    return (
        <div className="section events">
            <Row>
                <Col sm={12} xs={12} className="text-start">
                    <h1 className="section-title">Events</h1>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col md={8} sm={12} className="text-start">
                    <div className="carrousel-container">
                        <CustomCarousel slides={slides} />
                    </div>
                </Col>
                <Col md={4} sm={12} className="text-start">
                    <div className="cards-container">
                        <div className="cards-label-container">
                            <div className="events-label">EVENTS TODAY</div>
                            <div className="separator-right"></div>
                        </div>                      
                        <ul className="cards-list">
                            {cardsEvents && cardsEvents.map((card, index) => {
                                return (
                                    <li key={index} className="card-item">
                                       <Row className="card-content">
                                           <Col md={2} sm={4} xs={12} className="text-center padding0">
                                                <img src={card.image} alt={card.title} className={"card-image"}/>
                                            </Col>
                                            <Col md={10} sm={8} xs={12} className="text-start padding0-movil">
                                                <div className="card-title">{card.title}</div>
                                                <div className="card-description">{card.description.substring(0,24)}{card.description.length > 24 ? "...":""}</div>
                                            </Col>
                                        </Row>
                                    </li>
                                )
                            })}
                            
                        </ul>                     
                                                         


                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Events;