import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom'
import AppHeader from '../app/AppHeader';
import Home from '../home/Home';
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import Profile from '../user/profile/Profile';
import OAuth2RedirectHandler from '../user/oauth2/OAuth2RedirectHandler';
import LocalRedirectHandler from '../user/oauth2/LocalRedirectHandler';
import NotFound from '../app/NotFound';
import LoadingIndicator from '../app/LoadingIndicator';
import { getCurrentUser } from '../service/OnlineService';
import PrivateRoute from '../app/PrivateRoute';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';
import StoreComponent from '../kyn/StoreComponent';
import AboutUs from '../kyn/AboutUs';
import ContactUs from '../kyn/ContactUs';
import TermCon from '../kyn/Termcondition';

export const ACCESS_TOKEN = 'accessToken';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    this.setState({
      loading: true
    });

    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response,
        authenticated: true,
        loading: false
      });
      console.log ("Response is "+JSON.stringify(response.provider));
      if(response.provider=="local"){
        console.log("Local");
      }
    }).catch(error => {
      this.setState({
        loading: false
      });  
    }); 
    
    
    
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
    Alert.success("You're safely logged out!");
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    if(this.state.loading) {
      return <LoadingIndicator />
    }

    return (
      <div className="app">
        <div className="app-top-box">
          <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout} />
        </div>
        <div className="app-body">
          <Switch>
            <Route exact path="/" component={Home}></Route>           
            <PrivateRoute path="/profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
              component={Profile}></PrivateRoute>
            <Route path="/stores" component={StoreComponent}></Route>
            <Route path="/about" component={AboutUs}></Route>
            <Route path="/contact" component={ContactUs}></Route>
            <Route path="/term" component={TermCon}></Route>
           
            <Route path="/login"
              render={(props) => <Login authenticated={this.state.authenticated} {...props} />}></Route>
            <Route path="/signup"
              render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}></Route>
            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
            <Route path="/local/redirect" component={LocalRedirectHandler}></Route>   
            <Route component={NotFound}></Route>
            
            
          </Switch>
        </div>
        <Alert stack={{limit: 3}} 
          timeout = {3000}
          position='top-right' effect='slide' offset={65} />
          <hr/>
        <div className="app-bottom-box">
          <p style={{color:'white'}}>@ KYN 2023 copyrght deserved</p>
        </div>
      </div>
    );
  }
}

export default App;
