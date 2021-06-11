import React, { Component } from 'react';
import './AddCourses.css'

import * as BiIcons from "react-icons/bi"
import * as AiIcons from "react-icons/ai"


import * as FaIcons from "react-icons/fa"
import axios from 'axios';




class AddCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            new_course:{},
            course_ID:'',
            name:'',
            instructor:'',
            is_compulsory:'',
            department:'',
            offered_in_sem:'',
            
            temp:{}

          }

          this.onInputchange = this.onInputchange.bind(this);
    }


    addNewCourse(event)
    {
        
        const updated_object={
            course_ID:this.state.course_ID,
            name:this.state.name,
            instructor:this.state.instructor,
           
            department:this.state.department,
            is_compulsory:this.state.is_compulsory,
            offered_in_sem:this.state.offered_in_sem,
            

            };
            console.log(updated_object)

        let url="http://localhost:5000/api/courses/"

        axios.post(url,updated_object).then((res) => {
            console.info(res);
            this.setState({new_course:updated_object})
            console.log("i am in post of course")
            
         });
         console.log("i am in out of post of course")
         event.preventDefault();
         console.log(updated_object)
       
    }


    onInputchange(event) {
        
        this.setState({
          [event.target.name]: event.target.value
        });

        console.log(event.target.name)
        console.log(event.target.value)
        console.log(this.state.is_compulsory)
        
        
    }
    render() { 
        return ( 
            <div className="form-outer-div">
                <h1>Add New Course</h1>
                <h2>Please fill the form below to add new course</h2>
               <div className="form-inner-div">
                    <form class="my-form">
                        <label className="labels">COURSE ID</label>
            
                        <div className="icon-div">
                        <BiIcons.BiBookAdd className="icons"></BiIcons.BiBookAdd>
                        <input type="input" className="inputs" name="course_ID" placeholder="Enter Course ID i.e. CS000" required  onChange={this.onInputchange}></input>
                        </div>

                        <label className="labels">COURSE NAME</label>
                        <div className="icon-div">
                        <BiIcons.BiRename className="icons"></BiIcons.BiRename>
                        <input type="text" className="inputs" name="name" placeholder="Enter full course name " required onChange={this.onInputchange}></input>
                        </div>

                        <label className="labels">INSTRUCTOR NAME</label>
                        <div className="icon-div">
                        <FaIcons.FaChalkboardTeacher className="icons"></FaIcons.FaChalkboardTeacher>
                        <input type="text" className="inputs" name="instructor" placeholder="Enter Instructor name " required onChange={this.onInputchange}></input>
                        </div>


                        <label className="labels">COMPULSORY</label>
                        <div className="icon-div">
                        <AiIcons.AiFillCheckSquare className="icons"></AiIcons.AiFillCheckSquare>
                       
                            <select name="is_compulsory" className="inputs-select" required onChange={this.onInputchange}>
                                <option value="" selected disabled hidden>Select option</option>
                                <option id="compulsory" value='0'>Yes (for core courses)</option>
                                <option id="compulsory" value='1'>No (for elective courses)</option>
                                
                               
                            </select>
                        </div>

                        
                        
                        <label className="labels">FOR SEMESTER</label>
                        <div className="icon-div">
                        <AiIcons.AiOutlineNumber className="icons"></AiIcons.AiOutlineNumber>
                       
                            <select name="offered_in_sem" className="inputs-select" required onChange={this.onInputchange}>
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



                       


                        <label className="labels">DEPARTMENT</label>
                        <div className="icon-div">
                        <BiIcons.BiBuilding className="icons"></BiIcons.BiBuilding >
                       
                            <select name="department" className="inputs-select" required onChange={this.onInputchange}>
                                <option value="" selected disabled hidden>Select Department</option>
                                <option id="dept" value="CS">CS</option>
                                <option id="dept" value="EE">EE</option>
                                <option id="dept" value="CV">CV</option>
                                <option id="dept" value="MG">MG</option>
                                
                               
                            </select>
                        </div>

                       
                        

                        <button className="add-button" onClick={this.addNewCourse.bind(this)}>Add Course</button>

                    </form>

                </div>

            </div>
         );
    }
}
 
export default AddCourse;