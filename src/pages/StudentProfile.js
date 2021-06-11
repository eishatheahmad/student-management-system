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
            student_roll:'19L-1234',
            student_name: 'Jane Doe',
            student_dob: '2000-01-01',
            student_address:'Bakers Street, 221 B',
            student_semester:'Semester 4',
            student_warning:'0',
            student_cgpa:'3.34',
            
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
        let url= "http://localhost:5000/api/students/"+ this.state.student_roll;
        axios.get(url).then((res) => {
        console.info(res);

        this.setState({student_roll:res.data.student_roll})
        this.setState({student_name:res.data.student_name})
        this.setState({student_dob:res.data.student_dob})
        this.setState({student_address:res.data.student_address})
        this.setState({student_semester:res.data.student_semester})
        this.setState({student_warning:res.data.warning})
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
            student_address:this.state.student_address,
            student_semester:this.state.student_semester,
            student_warning:this.student_warning,
            student_cgpa:this.student_cgpa

            
            
            };
        let url="http://localhost:5000/api/students/"+ this.state.student_roll


        axios.put(url,updated_object).then((res) => {
        console.info(res);
        this.setState({is_edited:false})

        });
        console.log("i am after put")

        this.setState({is_edited:false})

    }

    rollnumChanged=(event)=>
    {
        this.setState({student_roll:event.target.value})
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
        this.setState({student_address:event.target.value})
       // this.setState({new_obj:event.target.value});

       // console.log(new_obj)
    }

    warningChanged=(event)=>
    {
        this.setState({student_warning:event.target.value})
       // this.setState({new_obj:event.target.value});

       // console.log(new_obj)
    }

    cgpaChanged=(event)=>
    {
        this.setState({student_cgpa:event.target.value})
       // this.setState({new_obj:event.target.value});

       // console.log(new_obj)
    }

    semesterChanged=(event)=>
    {
        this.setState({student_semester:event.target.value})
       // this.setState({new_obj:event.target.value});

       // console.log(new_obj)
    }
    render() { 

        
        if (this.state.is_edited==false)
        {
            console.log(this.state.student_roll)
            
                return (
                    <div className="outer-div">
                        
                           <h1>Student Profile</h1>
                           
                           <div>
                               <div className="inner-div">
                                   <h3 className="labels">ROLL NUMBER: </h3>
                                   <p className="student-data-p">{this.state.student_roll}</p>
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
                                   <p className="student-data-p">{this.state.student_address}</p>
                               </div>
       
                               <div className="inner-div">
                                   <h3 className="labels">SEMESTER: </h3>
                                   <p className="student-data-p">{this.state.student_semester}</p>
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
                                   <p className="student-data-p">{this.state.student_warning}</p>
                               </div>
       
                               <div className="inner-div">
                                   <h3 className="labels">CGPA: </h3>
                                   <p className="student-data-p">{this.state.student_cgpa}</p>
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
                            <input  className="input-fields" defaultValue={this.state.student_roll} type="input" onChange={this.rollnumChanged.bind(this)}></input>
                            
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
                            <input  className="input-fields" defaultValue={this.state.student_address} type="text" onChange={this.addressChanged.bind(this)}></input>
                        </div>
                    </div>

                    <div>
                        <div className="inner-div">
                            <h3 className="labels">SEMESTER: </h3>
                           
                                <select name="mySelect" className="inputs-field" required onChange={this.semesterChanged.bind(this)}>
                                    <option value="" selected disabled hidden>{this.state.student_semester}</option>
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
                                   
                                    <option value="" selected disabled hidden>{this.state.student_warning}</option>
                                    
                                    <option id="warning" value="1">1</option>
                                    <option id="warning" value="2">2</option>
                                    <option id="warning" value="3">3</option>
                                </select>
                            
                        </div>
                    </div>

                    <div>
                        <div className="inner-div">
                            <h3 className="labels">CGPA: </h3>
                            <input  className="input-fields" defaultValue={this.state.student_cgpa} type="text" onChange={this.cgpaChanged.bind(this)}></input>
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