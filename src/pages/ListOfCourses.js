import React, { Component } from "react";
import { withRouter } from 'react-router';

import './ListOfCourses.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash , faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link} from 'react-router-dom';




class ListOfCourses extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            courses:[
                {
                    id:1,
                    course_id:"CS218",
                    course_name:"Data Structures",
                    instructor_name:"Dr. M kashif",
                    offered_in_sem:4,
                    is_compulsary:'Yes',
                    department:"CS"
                },
            
                {
                    id:2,
                    course_id:"CS217",
                    course_name:"Object Oriented Programming",
                    instructor_name:"Prof. Ali Raheem",
                    offered_in_sem:4,
                    is_compulsary:'No',
                    department:"CS"
                },
            
                {
                    id:3,
                    course_id:"EE217",
                    course_name:"Digital Logic Design",
                    instructor_name:"Mr. Omer Ali",
                    offered_in_sem:4,
                    is_compulsary:'Yes',
                    department:"EE"
                },
            
                {
                    id:4,
                    course_id:"CS211",
                    course_name:"Discrete Structures",
                    instructor_name:"Dr. Mehmoona Raza",
                    offered_in_sem:4,
                    is_compulsary:'No',
                    department:"CS"
                },
            
                {
                    id:5,
                    course_id:"MT104",
                    course_name:"Linear Algebra",
                    instructor_name:"Dr. Bilal Tahir",
                    offered_in_sem:4,
                    is_compulsary:'Yes',
                    department:"MT"
                }
            ]
        }
    }


    renderTableHeader(){
        let header= Object.keys(this.state.courses[0])
        let key1='Action'
        header.push(key1)
        return header.map((key,index)=>{
          
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData(){
        return this.state.courses.map((course,index)=>{
            var{id,course_id,course_name,instructor_name,offered_in_sem,is_compulsary,department}=course
           if(is_compulsary==1)
           {
               is_compulsary='Yes'
           }
           else
           {
               is_compulsary='No'
           }
            return(
                <tr className="my-table" key={id}>
                    <td> <a href="#" className="course-link">{id}</a></td>
                    <td> <a href="#" className="course-link">{course_id}</a></td>
                    <td> <a href="#" className="course-link" >{course_name}</a></td>
                    <td> <a href="#" className="students-link">{instructor_name}</a></td>
                    <td> <a href="#" className="students-link" >{offered_in_sem}</a></td>

                    
                    <td> <a href="#" className="students-link" >{is_compulsary}</a></td>
                    <td> <a href="#" className="students-link" >{department}</a></td>
                    
                    
                    <td>
                        
                        <div className="action-buttons">
                            

                           <Link to='/courses/profile'> <button className="edit-button-course" >
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                            </Link>

                            <button className="delete-button">
                                <FontAwesomeIcon icon={faTrash} />
                            </button>

                        </div>
                        
                    </td>
                    
                </tr>
            )
        })
    }

    render() { 
        return ( 
            <div>
                <h1>Courses List</h1>
                <table id='courses'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default withRouter(ListOfCourses);