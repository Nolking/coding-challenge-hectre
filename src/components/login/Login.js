import React, {useState, useEffect} from "react";
import { Card, Form, Input } from "antd"
import { NavLink } from 'react-router-dom'
import COGNITO_CONFIG from '../../configs/configs.js'
import "antd/dist/antd.css";

export default function LoginPageContent(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);
    const onLoad = (dataLogin) => {
        console.log(dataLogin)
        props.onLoadApp(dataLogin)
    }
    useEffect(()=> {
        setIsLoggedIn(props.isLoggedIn)
        onLoad(isLoggedIn)
    }, [isLoggedIn, props])
    
    return (
        <div className="main-page-content">
            <Card className="login-page-card" >
                <Card type="inner">
                    <h1>{props.content}</h1>
                    {isLoggedIn ? <a href={COGNITO_CONFIG.SIGNOUT_URL} >Sign out</a>:<a href={COGNITO_CONFIG.SIGNIN_URL}>Sign in</a>}
                    <div><NavLink to="/">Back to Home page</NavLink></div>
                </Card>
            </Card>
        </div>
    )
}