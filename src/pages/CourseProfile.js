import React, { Component } from "react";
import { withRouter } from 'react-router';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave , faEdit } from "@fortawesome/free-solid-svg-icons";
import './CourseProfile.css'



class CourseProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:'0',
            course_id:'CS218',
            course_name: 'Data Structures',
            instructor_name: 'Dr. M Kashif',
            offered_in_sem:'Semester 4',
            
            department:'CS',
            is_edited:false,
            is_compulsary_value:'Yes'
            
         }
    }
    canEdit()
    {
        this.setState({is_edited:true})
    }

    saveData()
    {
        this.setState({is_edited:false})
    }


    courseidChanged=(e)=>
    {
        this.setState({course_id:e.target.value})
    }

    coursenameChanged=(e)=>
    {
        this.setState({course_name:e.target.value})
    }

    instructorChanged=(e)=>
    {
        this.setState({instructor_name:e.target.value})
    }

    departmentChanged=(e)=>
    {
        this.setState({department:e.target.value})
    }

    is_compulsary_Changed=(e)=>
    {
        this.setState({is_compulsary_value:e.target.value})
        

        console.log(e.target.value)
    }

    offered_in_semester_Changed=(e)=>
    {
        this.setState({offered_in_sem:e.target.value})
        
    }

    render() { 

        if(this.is_compulsary==1)
        {
           this.is_compulsary_value='Yes'
        }
        else
        {
            this.is_compulsary_value='No'
        }

        if(this.state.is_edited==false)
        {
            
            return ( 
                
                <div className="outer-div">
                        
                           <h1>Course Profile</h1>
                           
                           <div>
                               <div className="inner-div">
                                   <h3 className="labels">COURSE ID: </h3>
                                   <p className="student-data-p">{this.state.course_id}</p>
                               </div>
       
                               <div className="inner-div">
                                   <h3 className="labels">COURSE NAME: </h3>
                                   <p className="student-data-p">{this.state.course_name}</p>
                               </div>
       
                            
       
                               <div className="inner-div">
                                   <h3 className="labels">INSTRUCTOR : </h3>
                                   <p className="student-data-p">{this.state.instructor_name}</p>
                               </div>
       
                               <div className="inner-div">
                                   <h3 className="labels">OFFERED IN SEMESTER: </h3>
                                   <p className="student-data-p">{this.state.offered_in_sem}</p>
                               </div>
       
                               <div className="inner-div">
                                   <h3 className="labels">COMPULSARY: </h3>
                                   <p className="student-data-p">{this.state.is_compulsary_value}</p>
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
                            <input  className="input-fields" defaultValue={this.state.course_id} type="input" onChange={this.courseidChanged.bind(this)}></input>
                            
                        </div>
                    </div>

                    <div>
                        <div className="inner-div">
                            <h3 className="labels">COURSE NAME: </h3>
                            <input  className="input-fields" defaultValue={this.state.course_name} type="input" onChange={this.coursenameChanged.bind(this)}></input>
                        </div>
                    </div>

                   

                    <div>
                        <div className="inner-div">
                            <h3 className="labels">INSTRUCTOR: </h3>
                            <input  className="input-fields" defaultValue={this.state.instructor_name} type="text" onChange={this.instructorChanged.bind(this)}></input>
                        </div>
                    </div>

                    <div>
                        <div className="inner-div">
                            <h3 className="labels">OFFERED IN SEMESTER: </h3>
                           
                                <select name="mySelect" className="inputs-fields" required onChange={this.offered_in_semester_Changed.bind(this)}>
                                <option value="" selected disabled hidden>{this.state.offered_in_sem}</option>
                                    <option id="semester" value="Semester 1">Semester 1</option>
                                    <option id="semester" value="Semester 2">Semester 2</option>
                                    <option id="semester" value="Semester 3">Semester 3</option>
                                    <option id="semester" value="Semester 4">Semester 4</option>
                                    <option id="semester" value="Semester 5">Semester 5</option>
                                    <option id="semester" value="Semester 6">Semester 6</option>
                                    <option id="semester" value="Semester 7">Semester 7</option>
                                    <option id="semester" value="Semester 8">Semester 8</option>
                                </select>
                            
                        </div>
                    </div>

                    <div>
                        <div className="inner-div">
                            <h3 className="labels">COMPULSARY: </h3>
                           
                                <select name="mySelect" className="inputs-fields" required onChange={this.is_compulsary_Changed.bind(this)}>
                                   
                                    <option value="" selected disabled hidden>{this.state.is_compulsary_value}</option>
                                    
                                    <option id="compulsory" value="Yes">Yes (for core courses)</option>
                                    <option id="compulsory" value="No">No (for elective courses)</option>
                                
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