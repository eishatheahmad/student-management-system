import React, { Component } from 'react';

import './Home.css';


import img1 from '../images/avatar.jpg';
import img2 from '../images/course.png'
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="outer-div-dash">
                <h1>Student Management System</h1>
                <h2>Dashboard</h2>

                <div className="div-images">
                   
                   <div className="div-image-labels" >
                        <Link to="/students" className="img-links">
                            <img className="row-img1" src={img1} alt="logo"></img>
                            <h2>Manage Students</h2>
                        </Link>
                    </div>  
                    
                    <div className="div-image-labels">
                        <Link to="/courses" className="img-links">
                            <img className="row-img2" src={img2} alt="logo"></img>
                            <h2>Manage Courses</h2>
                        </Link>

                    </div>

                </div>

                





            </div> );
    }
}
 
export default Home;