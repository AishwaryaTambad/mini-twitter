import React, { Component } from 'react'
import './homestyle.css'
import Logo from './images/Logo.jpg'

export class Home extends Component {
    render() {
        return (
            <div className="Home">
              <div className="Left">
                <img src={Logo}/>
            </div>  
            <div className="Right"></div>
            </div>
        )
    }
}

export default Home
