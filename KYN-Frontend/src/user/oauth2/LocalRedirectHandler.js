import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

export const ACCESS_TOKEN = 'accessToken';

class LocalRedirectHandler extends Component {

    render() {      
            return <Redirect to={{
                pathname: "/profile",
                state: { from: this.props.location }
            }}/>; 
       
    }
}

export default LocalRedirectHandler;