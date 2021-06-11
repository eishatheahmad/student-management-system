import React, { Component } from "react";
import { withRouter } from 'react-router';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave , faEdit } from "@fortawesome/free-solid-svg-icons";
import './CourseProfile.css'
import axios from "axios"; 


class CourseProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:'0',
            course_ID:'CS218',
            name: 'Data Structures',
            instructor: 'Dr. M Kashif',
            offered_in_sem:'Semester 4',
            
            department:'CS',
            is_edited:false,
            is_compulsory:'0',

            course:[]
            
         }
    }


    componentDidMount()
    {
        let url= "http://localhost:5000/api/courses/"+ this.state.course_ID;
        axios.get(url).then((res) => {
        console.info(res);

        this.setState({course_ID:res.data.course_ID})
        this.setState({name:res.data.name})
        this.setState({instructor:res.data.instructor})
        this.setState({offered_in_sem:res.data.offered_in_sem})
        this.setState({department:res.data.department})
        this.setState({is_compulsory:res.data.is_compulsory})
        

        
     });
    }




    canEdit()
    {
        this.setState({is_edited:true})
    }

    saveData()
    {

        const updated_object={
                                name:this.state.name,
                                instructor:this.state.instructor,
                                instructor:this.state.instructor,
                                offered_in_sem:this.state.offered_in_sem,
                                department:this.department,
                                is_compulsory:this.is_compulsory

                                
                                
                                };
        let url="http://localhost:5000/api/courses/"+ this.state.course_ID
        

        axios.put(url,updated_object).then((res) => {
            console.info(res);
            this.setState({is_edited:false})
            
         });
         console.log("i am after put")

        this.setState({is_edited:false})

    }


    courseidChanged=(e)=>
    {
        this.setState({course_ID:e.target.value})
    }

    nameChanged=(e)=>
    {
        this.setState({name:e.target.value})
    }

    instructorChanged=(e)=>
    {
        this.setState({instructor:e.target.value})
    }

    departmentChanged=(e)=>
    {
        this.setState({department:e.target.value})
    }

    is_compulsory_Changed=(e)=>
    {
        this.setState({is_compulsory:e.target.value})
        

        console.log(e.target.value)
    }

    offered_in_semester_Changed=(e)=>
    {
        this.setState({offered_in_sem:e.target.value})
        
    }

    render() { 

       
        if(this.state.is_edited==false)
        {
            
            return ( 
                
                <div className="outer-div">
                        
                           <h1>Course Profile</h1>
                           
                           <div>
                               <div className="inner-div">
                                   <h3 className="labels">COURSE ID: </h3>
                                   <p className="student-data-p">{this.state.course_ID}</p>
                               </div>
       
                               <div className="inner-div">
                                   <h3 className="labels">COURSE NAME: </h3>
                                   <p className="student-data-p">{this.state.name}</p>
                               </div>
       
                            
       
                               <div className="inner-div">
                                   <h3 className="labels">INSTRUCTOR : </h3>
                                   <p className="student-data-p">{this.state.instructor}</p>
                               </div>
       
                               <div className="inner-div">
                                   <h3 className="labels">OFFERED IN SEMESTER: </h3>
                                   <p className="student-data-p">{this.state.offered_in_sem}</p>
                               </div>
       
                               <div className="inner-div">
                                   <h3 className="labels">COMPULSARY: </h3>
                                   <p className="student-data-p">{this.state.is_compulsory}</p>
                               </div>

                               <div className="inner-div">
                                   <h3 className="labels">DEPARTMENT: </h3>
                                   <p className="student-data-p">{this.state.department}</p>
                               </div>
       
                               
       
                              
       
                               
                            </div>
                            
                            <button className="edit-button" onClick={this.canEdit.bind(this)} >
                                       <FontAwesomeIcon icon={faEdit} />
                           </button>
                   </div>
             );
        }

        if(this.state.is_edited===true)
        {
            return(
                <div className="outer-div">
                        
                <h1>Course Profile</h1>
                
                    <div>
                        <div className="inner-div">
                            <h3 className="labels">COURSE ID: </h3>
                            <input  className="input-fields" defaultValue={this.state.course_ID} type="input" onChange={this.courseidChanged.bind(this)}></input>
                            
                        </div>
                    </div>

                    <div>
                        <div className="inner-div">
                            <h3 className="labels">COURSE NAME: </h3>
                            <input  className="input-fields" defaultValue={this.state.name} type="input" onChange={this.nameChanged.bind(this)}></input>
                        </div>
                    </div>

                   

                    <div>
                        <div className="inner-div">
                            <h3 className="labels">INSTRUCTOR: </h3>
                            <input  className="input-fields" defaultValue={this.state.instructor} type="text" onChange={this.instructorChanged.bind(this)}></input>
                        </div>
                    </div>

                    <div>
                        <div className="inner-div">
                            <h3 className="labels">OFFERED IN SEMESTER: </h3>
                           
                                <select name="mySelect" className="inputs-fields" required onChange={this.offered_in_semester_Changed.bind(this)}>
                                <option value="" selected disabled hidden>{this.state.offered_in_sem}</option>
                                    <option id="semester" value="1">Semester 1</option>
                                    <option id="semester" value="2">Semester 2</option>
                                    <option id="semester" value="3">Semester 3</option>
                                    <option id="semester" value="4">Semester 4</option>
                                    <option id="semester" value="5">Semester 5</option>
                                    <option id="semester" value="6">Semester 6</option>
                                    <option id="semester" value="7">Semester 7</option>
                                    <option id="semester" value="8">Semester 8</option>
                                </select>
                            
                        </div>
                    </div>

                    <div>
                        <div className="inner-div">
                            <h3 className="labels">COMPULSARY: </h3>
                           
                                <select name="mySelect" className="inputs-fields" required onChange={this.is_compulsory_Changed.bind(this)}>
                                   
                                    <option value="" selected disabled hidden>{this.state.is_compulsory}</option>
                                    
                                    <option id="compulsory" value="0">Yes (for core courses)</option>
                                    <option id="compulsory" value="1">No (for elective courses)</option>
                                
                                </select>
                            
                        </div>
                    </div>

                  
                    <div>
                        <div className="inner-div">
                            <h3 className="labels">DEPARTMENT: </h3>
                           
                                <select className="inputs-fields" required onChange={this.departmentChanged.bind(this)}>
                                    <option value="" selected disabled hidden>{this.state.department}</option>
                                    <option id="compulsory" value="CS">CS</option>
                                    <option id="compulsory" value="EE">EE</option>
                                    <option id="compulsory" value="CV">CV</option>
                                    <option id="compulsory" value="MG">MG</option>
                                    
                                </select>
                            
                        </div>
                    </div>


                    <button className="save-button" onClick={this.saveData.bind(this)}>
                                       <FontAwesomeIcon icon={faSave} />
                    </button>
                </div>
            );
        }

       
    }
}
 
export default withRouter(CourseProfile);