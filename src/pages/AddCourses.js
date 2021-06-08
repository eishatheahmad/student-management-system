import React, { Component } from 'react';
import './AddCourses.css'

import * as BiIcons from "react-icons/bi"
import * as AiIcons from "react-icons/ai"


import * as FaIcons from "react-icons/fa"




class AddCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            new_course:[],
            course_id:'',
            course_name:'',
            instructor_name:'',
            offered_in_sem:'',
            is_compulsary:'',
            department:''

          }
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
                        <input type="text" className="inputs" name="courseid" placeholder="Enter Course ID i.e. CS000" required></input>
                        </div>

                        <label className="labels">COURSE NAME</label>
                        <div className="icon-div">
                        <BiIcons.BiRename className="icons"></BiIcons.BiRename>
                        <input type="text" className="inputs" name="coursename" placeholder="Enter full course name " required></input>
                        </div>

                        <label className="labels">INSTRUCTOR NAME</label>
                        <div className="icon-div">
                        <FaIcons.FaChalkboardTeacher className="icons"></FaIcons.FaChalkboardTeacher>
                        <input type="text" className="inputs" name="instructor" placeholder="Enter Instructor name " required></input>
                        </div>


                        
                        <label className="labels">FOR SEMESTER</label>
                        <div className="icon-div">
                        <AiIcons.AiOutlineNumber className="icons"></AiIcons.AiOutlineNumber>
                       
                            <select name="mySelect" className="inputs-select" required>
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



                        <label className="labels">COMPULSORY</label>
                        <div className="icon-div">
                        <AiIcons.AiFillCheckSquare className="icons"></AiIcons.AiFillCheckSquare>
                       
                            <select name="mySelect" className="inputs-select" required>
                                <option value="" selected disabled hidden>Select option</option>
                                <option id="compulsory" value="0">Yes (for core courses)</option>
                                <option id="compulsory" value="1">No (for elective courses)</option>
                                
                               
                            </select>
                        </div>


                        <label className="labels">DEPARTMENT</label>
                        <div className="icon-div">
                        <BiIcons.BiBuilding className="icons"></BiIcons.BiBuilding >
                       
                            <select name="mySelect" className="inputs-select" required>
                                <option value="" selected disabled hidden>Select Department</option>
                                <option id="compulsory" value="CS">Fast School of Computing</option>
                                <option id="compulsory" value="EE">Department of Electrical Engineering</option>
                                <option id="compulsory" value="CV">Department of Civil Engineering</option>
                                <option id="compulsory" value="MG">Fast School of Management</option>
                                
                               
                            </select>
                        </div>

                       
                        

                        <button className="add-button">Add Course</button>

                    </form>

                </div>

            </div>
         );
    }
}
 
export default AddCourse;