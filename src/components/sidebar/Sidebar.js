import React from "react";

// Assets
import menu from "../../assets/images/menu.png";
import home from "../../assets/images/home.png";
import options from "../../assets/images/options.png";
import docs from "../../assets/images/docs.png";
import stats from "../../assets/images/stats.png";
import forum from "../../assets/images/forum.png";


// Styles
import './Sidebar.css';

const Sidebar = () => {

    return (
        <div className="sidebar d-none d-lg-flex d-xl-flex d-xxl-flex">
            <ul className="sidebar-items">
                <li className="sidebar-item">
                    <a href="/#" className="sidebar-link">
                        <img src={menu} alt="menu" />
                    </a>
                </li>
                <li className="sidebar-item active">
                    <a href="/#" className="sidebar-link">
                        <img src={home} alt="home" />
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="/#" className="sidebar-link">
                        <img src={options} alt="options" />
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="/#" className="sidebar-link">
                        <img src={docs} alt="docs" />
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="/#" className="sidebar-link">
                        <img src={stats} alt="stats" />
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="/#" className="sidebar-link">
                        <img src={forum} alt="forum" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;