import {React} from 'react';

// Bootstrap Components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Assets 
import flag from '../../assets/images/flag.png';
import guy from '../../assets/images/guy.png';
import emoji from '../../assets/images/emoji.png';

// Styles 
import './Welcome.css';

const Welcome = (props) => {
    const user = props.user;
    return (
        <div className="section welcome">
            <Row>
                <Col sm={6} xs={6} className="text-start text-center-movil">
                    <h1 className="section-title">Dashboard</h1>
                </Col>
                <Col sm={6} xs={6} className="text-end">
                   <div className="card-currently">
                       <span className="card-currently-text-top">
                            Currently Learning
                       </span>    
                        <div className="card-currently-container-bottom">
                            <div className="icon-currently" style={{backgroundImage:`url(${flag})`}}></div>
                            <div className="card-currently-text-bottom">
                                English
                            </div>
                        </div> 
                   </div>
                </Col>
            </Row>
            <Row className="back-welcome">
                <Col lg={3} md={3} sm={12} className="container-guy">
                    <img src={guy} className="guy-welcome" alt="welcome guy"/>
                </Col>
                <Col lg={9} md={9} sm={12} className="container-text-welcome">
                    <span className="text-welcome" >Welcome back, {user.name}</span>
                    <span className="subtext-welcome" >Ta-da! You're up to date. <img src={emoji} alt="celebration emoji"  /></span>
                </Col>
            </Row>
        </div>
    );
}

export default Welcome;