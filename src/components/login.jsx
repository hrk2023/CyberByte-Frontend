import React, {useState, useEffect,useContext} from 'react';
import {LoginContext} from './loginContext';
import {Redirect} from 'react-router-dom';
import '../static/login.css';
function Login(){
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const[loginErr,setLoginErr] = useState('');
    const[token,setToken] = useContext(LoginContext);

    useEffect(() => {
        let jwt = localStorage.getItem('token');
        if(jwt){
            setToken(jwt);
        }
    });

    const formSubmitHandler = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST','http://127.0.0.1:5000/user/account/login',true);
        xhr.responseType = 'json';
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => {
            if(xhr.status == 200){
                localStorage.setItem('token',xhr.response.token);
                setToken(xhr.response.token);
            }else{
                setLoginErr(xhr.response.message);
            }
        };
        xhr.send(JSON.stringify({"username" : username,"password" : password}));
    }

    return(
        <React.Fragment>
            {token &&  <Redirect to="/"/>}
            <div className="login-form-wrapper">
                <div className="login-form-inner-wrapper">
                    <div className="img-wrapper">
                        <img src={require("../static/netflix-logo-png-2562.png")}
                        className="form-header"/>    
                    </div> 
                    <form className="login-form"
                     onSubmit={() => formSubmitHandler()}
                    >
                        <div className="form-group">
                            <input type="text" 
                            placeholder="Username"
                            value = {username}
                            onChange={(e) => setUsername(e.target.value)} 
                            className="form-control field"/>
                        </div>
                        <div className="form-group">
                            <input type="password" 
                            placeholder="Password" 
                            value = {password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control field"/>
                            {loginErr !== '' && 
                            <div className="login-error">
                                {loginErr}
                            </div>
                            }
                        </div>
                        <div className="form-group">
                            <button className="form-control login-btn"
                            >Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Login;