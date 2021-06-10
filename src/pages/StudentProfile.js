import React, { Component } from "react";
import { withRouter } from 'react-router';
import Data from '../data/students_data.json'

import './StudentProfile.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faEdit } from "@fortawesome/free-solid-svg-icons";
import AddStudent from "./AddStudents";





class StudentProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:'0',
            new_rollnum:'19L-1234',
            new_name: 'Jane Doe',
            new_dob: '2000-01-01',
            new_address:'Bakers Street, 221 B',
            new_semester:'Semester 4',
            new_warning:'0',
            new_cgpa:'3.34',
            status:'',
            is_edited:false,
            rollno:''
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

    rollnumChanged=(event)=>
    {
        this.setState({new_rollnum:event.target.value})
       // this.setState({new_obj:event.target.value});

       // console.log(new_obj)
    }

    nameChanged=(event)=>
    {
        this.setState({new_name:event.target.value})
       // this.setState({new_obj:event.target.value});

       // console.log(new_obj)
    }

    dobChanged=(event)=>
    {
        this.setState({new_dob:event.target.value})
       // this.setState({new_obj:event.target.value});

       // console.log(new_obj)
    }

    addressChanged=(event)=>
    {
        this.setState({new_address:event.target.value})
       // this.setState({new_obj:event.target.value});

       // console.log(new_obj)
    }

    warningChanged=(event)=>
    {
        this.setState({new_warning:event.target.value})
       // this.setState({new_obj:event.target.value});

       // console.log(new_obj)
    }

    cgpaChanged=(event)=>
    {
        this.setState({new_cgpa:event.target.value})
       // this.setState({new_obj:event.target.value});

       // console.log(new_obj)
    }

    semesterChanged=(event)=>
    {
        this.setState({new_semester:event.target.value})
       // this.setState({new_obj:event.target.value});

       // console.log(new_obj)
    }
    render() { 

        
        if (this.state.is_edited==false)
        {
            console.log(this.state.new_rollnum)
            
                return (
                    <div className="outer-div">
                        
                           <h1>Student Profile</h1>
                           
                           <div>
                               <div className="inner-div">
                                   <h3 className="labels">ROLL NUMBER: </h3>
                                   <p className="student-data-p">{this.state.new_rollnum}</p>
                               </div>
       
                               <div className="inner-div">
                                   <h3 className="labels">NAME: </h3>
                                   <p className="student-data-p">{this.state.new_name}</p>
                               </div>
       
                               <div className="inner-div">
                                   <h3 className="labels">DATE OF BIRTH: </h3>
                                   <p className="student-data-p">{this.state.new_dob}</p>
                               </div>
       
                               <div className="inner-div">
                                   <h3 className="labels">ADDRESS: </h3>
                                   <p className="student-data-p">{this.state.new_address}</p>
                               </div>
       
                               <div className="inner-div">
                                   <h3 className="labels">SEMESTER: </h3>
                                   <p className="student-data-p">{this.state.new_semester}</p>
                               </div>
       
                               <div className="inner-div">
                                   <h3 className="labels">WARNING: </h3>
                                   <p className="student-data-p">{this.state.new_warning}</p>
                               </div>
       
                               <div className="inner-div">
                                   <h3 className="labels">CGPA: </h3>
                                   <p className="student-data-p">{this.state.new_cgpa}</p>
                               </div>
       
                              
       
                               
                            </div>
                            
                            <button className="edit-button" onClick={this.canEdit.bind(this)}>
                                       <FontAwesomeIcon icon={faEdit} />
                           </button>
                   </div>
            );


        }

        else if(this.state.is_edited===true)
        {
           
            return(
                <div className="outer-div">
                        
                <h1>Student Profile</h1>
                
                    <div>
                        <div className="inner-div">
                            <h3 className="labels">ROLL NUMBER: </h3>
                            <input  className="input-fields" defaultValue={this.state.new_rollnum} type="input" onChange={this.rollnumChanged.bind(this)}></input>
                            
                        </div>
                    </div>

                    <div>
                        <div className="inner-div">
                            <h3 className="labels">NAME: </h3>
                            <input  className="input-fields" defaultValue={this.state.new_name} type="input" onChange={this.nameChanged.bind(this)}></input>
                        </div>
                    </div>

                    <div>
                        <div className="inner-div">
                            <h3 className="labels">DOB: </h3>
                            <input  className="input-fields" defaultValue={this.state.new_dob} type="date" onChange={this.dobChanged.bind(this)}></input>
                        </div>
                    </div>

                    <div>
                        <div className="inner-div">
                            <h3 className="labels">ADDRESS: </h3>
                            <input  className="input-fields" defaultValue={this.state.new_address} type="text" onChange={this.addressChanged.bind(this)}></input>
                        </div>
                    </div>

                    <div>
                        <div className="inner-div">
                            <h3 className="labels">SEMESTER: </h3>
                           
                                <select name="mySelect" className="inputs-field" required onChange={this.semesterChanged.bind(this)}>
                                    <option value="" selected disabled hidden>{this.state.new_semester}</option>
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
                            <h3 className="labels">WARNING: </h3>
                           
                                <select name="mySelect" className="inputs-field" required onChange={this.warningChanged.bind(this)}>
                                   
                                    <option value="" selected disabled hidden>{this.state.new_warning}</option>
                                    
                                    <option id="warning" value="1">1</option>
                                    <option id="warning" value="2">2</option>
                                    <option id="warning" value="3">3</option>
                                </select>
                            
                        </div>
                    </div>

                    <div>
                        <div className="inner-div">
                            <h3 className="labels">CGPA: </h3>
                            <input  className="input-fields" defaultValue={this.state.new_cgpa} type="text" onChange={this.cgpaChanged.bind(this)}></input>
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
 
export default withRouter(StudentProfile);