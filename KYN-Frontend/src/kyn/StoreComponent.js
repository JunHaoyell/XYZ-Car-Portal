import React from "react";
import './store.css';
import { Component } from "react";

import StoreService from "./StoreService";


class StoreComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={stores:[]}
    }


    componentDidMount(){
        StoreService.getAllStores()
        .then(res=>this.setState({stores:res.data}))
    }


    render(){
        return(

            <div class="container mt-3">
  <div className="row">
    <div className="col-m-9">
    <h2>Stores Lists</h2>
    </div>

  </div>
  <p></p>            
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Store Name</th>
        <th>Store Address</th>
        <th>Store Email</th>
        <th>Store Phone Number</th>
      </tr>
    </thead>
    {this.state.stores.map(store=>

<tbody>
<tr class="table-danger">
  <td>{store.name}</td>
  <td>{store.address}</td>
  <td>{store.email}</td>
  <td>{store.phoneNumber}</td>
</tr>
</tbody>

    )}
 
  </table>
  
</div>

        )
    }

}

export default StoreComponent