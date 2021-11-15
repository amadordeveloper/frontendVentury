import React from 'react';

// Bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//styles
import './Activity.css';

// assets
import addperson from '../../../assets/images/addperson.png';
import calendar from '../../../assets/images/calendar.png';
import book from '../../../assets/images/book.png';
import arrow from '../../../assets/images/arrow.png';
import arrowRight from '../../../assets/images/arrow-right.png';

const Activity = (props) => {

    const activities = [
        {
            icon: addperson,
            message: <span>You have new 5 followers including <a href="/#">Kathryn Crawford</a> and <a href="/#">Piper Shaw</a></span>, 
        },
        {
            icon: calendar,
            message: <span>3 new events were added to yor calendar</span>, 
        },
        {
            icon: book,
            message: <span>You have 3 pending readings to complete 🤓</span>, 
        }
    ]


    return(
        <div className="section activity">
        <Row className="full-width">
            <Col sm={12} xs={12} className="title-spaced">
                <h1 className="section-title mr-20">Activity</h1>
                <div className="bar-title-spaced"></div>
                <button className="button-gray-spaced ml-20">
                    <img src={arrowRight} alt="arrow" />
                </button>
            </Col>
        </Row >
        <br/>
        {
            activities.map((activity, index) => {
                return(
                    <Row key={index} className="activity-item">
                        <Col sm={12} xs={12} className="activity-item-content">
                            <div className="icon-activity">
                                <img src={activity.icon} alt="icon-activity" />
                            </div>
                            <div className="message-activity">
                                {activity.message}
                            </div>
                            <div className="arrow-activity">
                                <img src={arrow} alt="arrow-activity" />
                            </div>
                        </Col>
                    </Row>
                )
            })
        }
        
        </div>
    );
};

export default Activity;