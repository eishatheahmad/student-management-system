import React, { Component } from 'react';
import './AddStudents.css'
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from "react-icons/bi"
import * as AiIcons from "react-icons/ai"
import * as MdIcons from "react-icons/md"
import * as ImIcons from "react-icons/im"

import axios from 'axios';




class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            new_students:[],
            id:'',
            student_roll:'',
            student_name: '',
            student_dob: '',
            student_address:'',
            student_semester:'',
            student_warning:'',
            student_cgpa:'',
            status:'',

         }

         this.onInputchange = this.onInputchange.bind(this);
    }

    onInputchange(event) {
        
        this.setState({
          [event.target.name]: event.target.value
        });

        console.log(event.target.name)
        console.log(event.target.value)
        console.log(this.state.student_cgpa)
        
        
    }

    addStudent(event)
    {
        const updated_object={
            student_roll:this.state.student_roll,
            student_name:this.state.student_name,
            student_address:this.state.student_address,
            student_semester:this.state.student_semester,
            student_warning:this.state.student_warning,
            student_cgpa:this.state.student_cgpa,
            
            

            };
            console.log(updated_object)

        let url="http://localhost:5000/api/students/"

        axios.post(url,updated_object).then((res) => {
            console.info(res);
            this.setState({new_course:updated_object})
            console.log("i am in post of student")
            
         });
         console.log("i am in out of post of student")
         event.preventDefault();

       

       
    }

    
    render() { 
        console.log(this.state.new_students)
        return ( 
            <div className="form-outer-div">
                <h1>Add New Student</h1>
                <h2>Please fill the form below to add new student</h2>
               <div className="form-inner-div">
                    <form class="my-form">
                        <label className="labels">ROLL NUMBER</label>
                        <h5 className="help-text">Roll Number i.e. (17L-1234)</h5>
                        <div className="icon-div">
                            <BsIcons.BsPersonFill className="icons"></BsIcons.BsPersonFill>
                            <input type="text" className="inputs" name="student_roll" placeholder="Enter roll number" 
                                required onChange={this.onInputchange}>

                            </input>
                        </div>

                        <label className="labels">NAME</label>
                        <div className="icon-div">
                        <BiIcons.BiRename className="icons"></BiIcons.BiRename>
                        <input type="text" className="inputs" name="student_name" placeholder="Enter full name" required
                            onChange={this.onInputchange}></input>
                        </div>


                        <label className="labels">DATE OF BIRTH</label>
                        <div className="icon-div">
                        <BiIcons.BiCalendar className="icons"></BiIcons.BiCalendar>
                        <input type="date" className="inputs" name="student_dob" required onChange={this.onInputchange}></input>
                        </div>

                        <label className="labels">ADDRESS</label>
                        <div className="icon-div">
                        <MdIcons.MdLocationCity className="icons"></MdIcons.MdLocationCity>
                        <textarea className="inputs" name="student_address" placeholder="Enter address" required 
                        onChange={this.onInputchange}></textarea>
                        </div>


                        <label className="labels">SEMESTER</label>
                        <div className="icon-div">
                        <AiIcons.AiOutlineNumber className="icons"></AiIcons.AiOutlineNumber>
                       
                            <select name="student_semester" className="inputs-select" required onChange={this.onInputchange}>
                                <option value="" selected disabled hidden>Semester</option>
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



                        <label className="labels">WARING COUNT</label>
                        <div className="icon-div">
                        <ImIcons.ImWarning className="icons"></ImIcons.ImWarning>
                       
                            <select name="student_warning" className="inputs-select" required onChange={this.onInputchange}>
                                <option value="" selected disabled hidden>Select warning count</option>
                                <option id="warning" value="0">0</option>
                                <option id="warning" value="1">1</option>
                                <option id="warning" value="2">2</option>
                                <option id="warning" value="3">3</option>
                               
                            </select>
                        </div>

                        <label className="labels">CGPA</label>
                        <div className="icon-div">
                        <ImIcons.ImCalculator className="icons"></ImIcons.ImCalculator>
                        <input type="text" className="inputs" name="student_cgpa" placeholder="Enter CGPA" required onChange={this.onInputchange}></input>
                        </div>
                        
                        

                        <button className="add-button" onClick={this.addStudent.bind(this)}>Add Student</button>

                    </form>

                </div>

            </div>
         );
    }
    
}
 
export default AddStudent;

//roll number, name , dob, address, semester, warning, cgpa