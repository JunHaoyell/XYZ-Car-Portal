import React, { Component } from 'react';
import './Home.css';
import elect from '../img/elect.jpg'
import fashion from '../img/fashion.jpg'
import OIP from '../img/OIP.jpg'
import neighbor from '../img/neighbor.png'

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8">
                            <img src={neighbor} alt="KYN Online Store" width={"100%"}></img>
                            </div>
                            <div className='col-sm-4'>
                            <div class="bg-light rounded">
                            <img src={elect} alt="KYN Online Store" width={"65%"}></img>
                                 <p>Electronic store</p>
                            </div>
                            <div class=" bg-light rounded">
                            <img src={fashion} alt="KYN Online Store" width={"65%"}></img>
                                 <p>Fashion store</p>
                            </div>
                            <div class="bg-light rounded">
                            <img src={OIP} alt="KYN Online Store" width={"65%"}></img>
                                 <p>Book Store</p>
                            </div>

                            </div>
                        </div>
                        <div className='row'>
                        <div class="bg-white text-black rounded">
                                 <h5>click here to Login</h5>
                                 <button className='btn-dark'><a href='/login'>Login</a></button>
                                 
                         </div>

                         <hr/>
                        </div>

                    </div>
            </div>
        )
    }
}

export default Home;