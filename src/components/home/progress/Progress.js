import React from "react";

// boostrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// styles 
import "./Progress.css";

const Progress = () => {

    const porcentaje = 40;
    const mailconfirmation =false;

    const progressData = [
        {
            title: "Total Webinars",
            number: 9,
        },
        {
            title: "Pending Assignments",
            number: 0,
        },
        {
            title: "Total Units",
            number: 5,
        },
        {
            title: "Total Readings",
            number: 14,
        },
        {
            title: "Total Videos",
            number: 5,
            class: "active",
        }
    ]

    return (
        <div>
            <div className="progress-container-movil d-md-none d-sm-block">
            <div className="overview-box">
                    <h2 className="overview-title">
                    Progress overview
                    </h2>
                    <div className="overview-chart">
                    <svg viewBox="0 0 36 36">
                    <svg viewBox="0 0 36 36" class="circular-chart green">
                        <path class="circle-bg"
                            d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path class="circle"
                            stroke-dasharray={porcentaje+", 100"}
                            d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <text x="18" y="20.35" class="percentage">{porcentaje}%</text>
                    </svg>

                    </svg>
                    </div>
                    <div className="overview-data">
                        <Row>
                            <Col xs={6} className="data-item-content">
                                <div className="overview-data-item">
                                    <div className="status-indicator bg-yellow"></div>
                                    <div className="status-name">Completed</div>
                                </div>
                                <div className="overview-data-item">
                                    <div className="status-number">20</div>
                                    <div className="status-text">hours</div>
                                </div>
                            </Col>
                            <Col xs={6}>
                                <div className="overview-data-item">
                                    <div className="status-indicator bg-orange"></div>
                                    <div className="status-name">Left to go</div>
                                </div>
                                <div className="overview-data-item">
                                    <div className="status-number">30</div>
                                    <div className="status-text">hours</div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                    
            </div>
            <div className="section progress-sec">
                <Row className="full-width">
                    <Col md={4} sm={12} xs={12} className="padding0">
                        <div className="overview-box d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                            <h2 className="overview-title">
                            Progress overview
                            </h2>
                            <div className="overview-chart">
                            <svg viewBox="0 0 36 36">
                            <svg viewBox="0 0 36 36" class="circular-chart green">
                                <path class="circle-bg"
                                    d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path class="circle"
                                    stroke-dasharray={porcentaje+", 100"}
                                    d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <text x="18" y="20.35" class="percentage">{porcentaje}%</text>
                            </svg>

                            </svg>
                            </div>
                            <div className="overview-data">
                                <Row>
                                    <Col xs={6} className="data-item-content">
                                        <div className="overview-data-item">
                                            <div className="status-indicator bg-yellow"></div>
                                            <div className="status-name">Completed</div>
                                        </div>
                                        <div className="overview-data-item">
                                            <div className="status-number">20</div>
                                            <div className="status-text">hours</div>
                                        </div>
                                    </Col>
                                    <Col xs={6}>
                                        <div className="overview-data-item">
                                            <div className="status-indicator bg-orange"></div>
                                            <div className="status-name">Left to go</div>
                                        </div>
                                        <div className="overview-data-item">
                                            <div className="status-number">30</div>
                                            <div className="status-text">hours</div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    
                    </Col>
                    <Col md={8} sm={12} xs={12} className="relative padding-left-progress">
                        <br/>
                        <Row className="full-width">
                            <Col sm={12} xs={12} className="progress-title-spaced">
                                <h1 className="section-title">Progress</h1>
                                <div className="bar-title-progress"></div>
                            </Col>
                        </Row >
                            <br/>
                        <Row className="full-width progress-item-container">
                        {                            
                                progressData.map((item, index) => {

                                    let posSpace = item.title.indexOf(" ");
                                    let title = item.title.substring(0, posSpace);
                                    let title2 = item.title.substring(posSpace+1, item.title.length);

                                    return (
                                        <div className={"progress-item "+(item.class?item.class:"")} key={index}>
                                            <div className="progress-item-title">{title}<br/>{title2}</div>
                                            <div className="progress-item-number">{item.number}</div>
                                        </div>
                                    )
                                })
                        }
                        {
                            progressData.length % 3 === 2 &&  <Col sm={4} xs={12}  className="padding0"></Col> 
                        }
                        </Row>   
                        {
                        !mailconfirmation &&
                            <Row className="full-width mailconfirmation-alert">
                                <Col sm={12} xs={12} className="relative thin text-center" >
                                    <b>Confirm your account details</b> Please confirm your email and phone number.&nbsp;😰
                                </Col>
                            </Row> 
                        }
                
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Progress;