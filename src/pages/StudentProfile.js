import React, { Component } from "react";
import { withRouter } from 'react-router';

import axios from "axios"

import './StudentProfile.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faEdit } from "@fortawesome/free-solid-svg-icons";

class StudentProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:'0',
            roll_number:'19L-1234',
            student_name: 'Jane Doe',
            student_dob: '2000-01-01',
            address:'Bakers Street, 221 B',
            semester:'Semester 4',
            warnings:'0',
            cgpa:'3.34',
            
            status:'',
            is_edited:false,
            courses:[
                {
                    
                    course_id:'CS111',
                    course_name:'Data Structures'
                },

                {
                    course_id:'CS201',
                    course_name:'Algorithms'
                },

                {
                    course_id:'CS204',
                    course_name:'Data Science'
                }
            ],

            student:[]
         }


       
    }

    componentDidMount()
    {
        let url= "http://localhost:5000/api/students/"+ this.state.roll_number;
        axios.get(url).then((res) => {
        console.info(res);

        this.setState({roll_number:res.data.roll_number})
        this.setState({student_name:res.data.student_name})
        this.setState({student_dob:res.data.student_dob})
        this.setState({address:res.data.address})
        this.setState({semester:res.data.semester})
        this.setState({warnings:res.data.warning})
        this.setState({student_courses:res.courses})

        
     });
    }

    
    canEdit()
    {
        this.setState({is_edited:true})
    }

    saveData()
    {
        
        const updated_object={
            student_name:this.state.student_name,
            student_dob:this.state.student_dob,
            address:this.state.address,
            semester:this.state.semester,
            warnings:this.warnings,
            cgpa:this.cgpa

            
            
            };
        let url="http://localhost:5000/api/students/"+ this.state.roll_number


        axios.put(url,updated_object).then((res) => {
        console.info(res);
        this.setState({is_edited:false})

        });
        console.log("i am after put")

        this.setState({is_edited:false})

    }

    rollnumChanged=(event)=>
    {
        this.setState({roll_number:event.target.value})
       // this.setState({new_obj:event.target.value});

       // console.log(new_obj)
    }

    nameChanged=(event)=>
    {
        this.setState({student_name:event.target.value})
       // this.setState({new_obj:event.target.value});

       // console.log(new_obj)
    }

    dobChanged=(event)=>
    {
        this.setState({student_dob:event.target.value})
       // this.setState({new_obj:event.target.value});

       // console.log(new_obj)
    }

    addressChanged=(event)=>
    {
        this.setState({address:event.target.value})
       // this.setState({new_obj:event.target.value});

       // console.log(new_obj)
    }

    warningChanged=(event)=>
    {
        this.setState({warnings:event.target.value})
       // this.setState({new_obj:event.target.value});

       // console.log(new_obj)
    }

    cgpaChanged=(event)=>
    {
        this.setState({cgpa:event.target.value})
       // this.setState({new_obj:event.target.value});

       // console.log(new_obj)
    }

    semesterChanged=(event)=>
    {
        this.setState({semester:event.target.value})
       // this.setState({new_obj:event.target.value});

       // console.log(new_obj)
    }
    render() { 

        
        if (this.state.is_edited==false)
        {
            console.log(this.state.roll_number)
            
                return (
                    <div className="outer-div">
                        
                           <h1>Student Profile</h1>
                           
                           <div>
                               <div className="inner-div">
                                   <h3 className="labels">ROLL NUMBER: </h3>
                                   <p className="student-data-p">{this.state.roll_number}</p>
                               </div>
       
                               <div className="inner-div">
                                   <h3 className="labels">NAME: </h3>
                                   <p className="student-data-p">{this.state.student_name}</p>
                               </div>
       
                               <div className="inner-div">
                                   <h3 className="labels">DATE OF BIRTH: </h3>
                                   <p className="student-data-p">{this.state.student_dob}</p>
                               </div>
       
                               <div className="inner-div">
                                   <h3 className="labels">ADDRESS: </h3>
                                   <p className="student-data-p">{this.state.address}</p>
                               </div>
       
                               <div className="inner-div">
                                   <h3 className="labels">SEMESTER: </h3>
                                   <p className="student-data-p">{this.state.semester}</p>
                               </div>

                               <div className="inner-div">
                                   <h3 className="labels">COURSES: </h3>
                                   <table className="table-courses">
                                       
                                       <tr className="table-courses" >
                                           <th className="table-header">Course ID</th>
                                           <th className="table-header">Course Name</th>
                                       </tr>
                                       {
                                           this.state.courses.map((item)=>
                                           <tr className="table-courses">
                                               <td className="table-row">{item.course_id}</td>
                                               <td className="table-row">{item.course_name}</td>
                                           </tr>)
                                       }
                                   </table>
                                   
                               </div>
       
                               <div className="inner-div">
                                   <h3 className="labels">WARNING: </h3>
                                   <p className="student-data-p">{this.state.warnings}</p>
                               </div>
       
                               <div className="inner-div">
                                   <h3 className="labels">CGPA: </h3>
                                   <p className="student-data-p">{this.state.cgpa}</p>
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
                            <input  className="input-fields" defaultValue={this.state.roll_number} type="input" onChange={this.rollnumChanged.bind(this)}></input>
                            
                        </div>
                    </div>

                    <div>
                        <div className="inner-div">
                            <h3 className="labels">NAME: </h3>
                            <input  className="input-fields" defaultValue={this.state.student_name} type="input" onChange={this.nameChanged.bind(this)}></input>
                        </div>
                    </div>

                    <div>
                        <div className="inner-div">
                            <h3 className="labels">DOB: </h3>
                            <input  className="input-fields" defaultValue={this.state.student_dob} type="date" onChange={this.dobChanged.bind(this)}></input>
                        </div>
                    </div>

                    <div>
                        <div className="inner-div">
                            <h3 className="labels">ADDRESS: </h3>
                            <input  className="input-fields" defaultValue={this.state.address} type="text" onChange={this.addressChanged.bind(this)}></input>
                        </div>
                    </div>

                    <div>
                        <div className="inner-div">
                            <h3 className="labels">SEMESTER: </h3>
                           
                                <select name="mySelect" className="inputs-field" required onChange={this.semesterChanged.bind(this)}>
                                    <option value="" selected disabled hidden>{this.state.semester}</option>
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
                                   
                                    <option value="" selected disabled hidden>{this.state.warnings}</option>
                                    
                                    <option id="warning" value="1">1</option>
                                    <option id="warning" value="2">2</option>
                                    <option id="warning" value="3">3</option>
                                </select>
                            
                        </div>
                    </div>

                    <div>
                        <div className="inner-div">
                            <h3 className="labels">CGPA: </h3>
                            <input  className="input-fields" defaultValue={this.state.cgpa} type="text" onChange={this.cgpaChanged.bind(this)}></input>
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