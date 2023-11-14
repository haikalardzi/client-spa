import React from 'react';
import ReactDOM from 'react-dom/client'
import logo from '../../components/images/logo.svg'
import styles from './HomePage.module.css'

function HomePageView() {
    return (
        <div id = {styles["HomePageContainer"]}>
            <title>
                Home Page
            </title>
            <img 
            id = "LogoImage"
            src={logo} 
            ></img>
            {/* TODO: Home Page details */}
        </div>
    )
}

export default HomePageView;