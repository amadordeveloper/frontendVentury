import React from "react";

//Components 
import Search from "./search/Search";

//assets
import logo from "../../assets/images/logo.png";
import searchIcon from "../../assets/images/search.png";
import bell from "../../assets/images/bell.png";
import chat from "../../assets/images/chat.png";
import arrow from "../../assets/images/arrow.png";
import menu from "../../assets/images/menu.png";

//style
import "./Header.css";

const Header = (props) => {

    const [existsNotifications] = React.useState(true);

    const user = props.user;

    return (
        <div>
            <header className="header d-none d-lg-flex d-xl-flex d-xxl-flex">
                <div className="header__logo">  
                    <img src={logo} alt="logo" className="logo"/>
                </div>
                <div className="header__search">
                    <Search placeholder={"Search and Find"} contentBtn={<img src={searchIcon} alt="search"/>}/>
                    <div className="header__add">
                        <button className="btn btn-primary">+Add</button>
                    </div>
                </div>
                <div className="header__userpanel">
                    <div className="header__notifications" >
                        <button className="btn-icon-bell">
                            <img src={bell} alt="bell"/>
                        </button>
                        { existsNotifications &&  <div className="notification-indicator"></div>}                
                    </div>
                    <div className="header__notifications" >
                        <button className="btn-icon-chat">
                            <img src={chat} alt="chat"/>    
                        </button> 
                    </div>
                    <div className="header__user">
                        <div className="name__user">
                            {user.name + " " + user.lastName}
                        </div>
                        <div className="avatar__user" style={{backgroundImage:`url(${user.avatar})`}}></div>
                        <div className="avatar__arrow">
                            <button className="btn-icon-arrow">
                                <img src={arrow} alt="arrow"/>
                            </button>
                        </div>
                    </div>
                </div>
            </header>      
            <header className="header header-movil  d-lg-none d-sm-flex">
                <div className="sidebar-link-movil">
                    <img src={menu} alt="menu" className="bars-movil" />
                </div>
                <div className="header__logo__movil">  
                    <img src={logo} alt="logo" className="logo"/>
                </div>
                <div className="avatar__user" style={{backgroundImage:`url(${user.avatar})`}}>
                { existsNotifications &&  <div className="notification-indicator"></div>}    
                </div>
            </header>  
            <div className="searchMovil d-lg-none d-sm-flex">
                <Search placeholder={"Search and Find"} contentBtn={<img src={searchIcon} alt="search"/>}/>
            </div>
        </div>
      
    );
}

export default Header;