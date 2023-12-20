import React, { Component } from 'react';
import './Login.css';
import { login } from '../../service/OnlineService';
import { Link, Redirect } from 'react-router-dom'
import fbLogo from '../../img/fb-logo.png';
import googleLogo from '../../img/google-logo.png';
import Alert from 'react-s-alert';

export const API_BASE_URL = 'http://localhost:8080';
export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect';
export const LOCAL_REDIRECT_URI = 'http://localhost:3000/local/redirect';
export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const ACCESS_TOKEN = 'accessToken';



class Login extends Component {
    componentDidMount() {
        // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
        // Here we display the error and then remove the error query parameter from the location.
        if(this.props.location.state && this.props.location.state.error) {
            setTimeout(() => {
                Alert.error(this.props.location.state.error, {
                    timeout: 5000
                });
                this.props.history.replace({
                    pathname: this.props.location.pathname,
                    state: {}
                });
            }, 100);
        }
    }
    
    render() {
        if(this.props.authenticated) {
            return <Redirect
                to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>;            
        }

        return (
            <div className="login-container">
                <div className="login-content">
                    <h1 className="login-title">Login to KYN </h1>
                    <SocialLogin />
                    <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>
                    <LoginForm {...this.props} />
                    <span className="signup-link">New user? <Link to="/signup">Sign up!</Link></span>
                </div>
            </div>
        );
    }
}

//Social Login Form
class SocialLogin extends Component {
    
    render() {
        
        return (
            <div className="social-login">
                <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                    <img src={googleLogo} alt="Google" /> Log in with Google</a>
                <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                    <img src={fbLogo} alt="Facebook" /> Log in with Facebook</a>
            </div>
        );
    }
}

//Local LoginForm
class LoginForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loginAttempts: 0,
            isLocked: false,
            errorMessage: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        });        
    }

    handleSubmit(event) {
        event.preventDefault();   
        const { loginAttempts } = this.state;
        const loginRequest = Object.assign({}, this.state);
        
        if (loginAttempts >= 3) {
            this.setState({
              isLocked: true,
              errorMessage: 'Login locked. Please try again later.',
            });
            return;
          }

        login(loginRequest)
        .then(response => {
            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
            Alert.success("You're successfully logged in!");
            console.log ("Access Token is "+response.accessToken);

            if(response.accessToken) {
                console.log("In Login Form, Login JS URI Is "+ LOCAL_REDIRECT_URI);
                window.location.replace(LOCAL_REDIRECT_URI);
            
            }

           

        }).catch(error => {
            console.log("Error " +error.message);
            this.setState((prevState) => ({
                loginAttempts: prevState.loginAttempts + 1,
              }));
            Alert.error("Email and Password Do Not Match ! Please try again!");
        });
    }
    
    render() {
        const {errorMessage, isLocked } = this.state;
  
        return (
            <form onSubmit={this.handleSubmit}>
                {isLocked && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <div className="form-item">
                    <input type="email" name="email" 
                        className="form-control" placeholder="Email"
                        value={this.state.email} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                    <input type="password" name="password" 
                        className="form-control" placeholder="Password"
                        value={this.state.password} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                    <button type="submit" className="btn btn-block btn-primary" >Login</button>
                </div>
            </form>                    
        );
       
        
    }
}

export default Login
