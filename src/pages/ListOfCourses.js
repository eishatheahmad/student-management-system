import React, { Component } from "react";
import { withRouter } from 'react-router';

import './ListOfCourses.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash , faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link} from 'react-router-dom';
import axios from "axios";



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
                    is_compulsory:'0',
                    department:"CS"
                },
            
                {
                    id:2,
                    course_id:"CS217",
                    course_name:"Object Oriented Programming",
                    instructor_name:"Prof. Ali Raheem",
                    offered_in_sem:4,
                    is_compulsory:'1',
                    department:"CS"
                },
            
                {
                    id:3,
                    course_id:"EE217",
                    course_name:"Digital Logic Design",
                    instructor_name:"Mr. Omer Ali",
                    offered_in_sem:4,
                    is_compulsory:'0',
                    department:"EE"
                },
            
                {
                    id:4,
                    course_id:"CS211",
                    course_name:"Discrete Structures",
                    instructor_name:"Dr. Mehmoona Raza",
                    offered_in_sem:4,
                    is_compulsory:'1',
                    department:"CS"
                },
            
                {
                    id:5,
                    course_id:"MT104",
                    course_name:"Linear Algebra",
                    instructor_name:"Dr. Bilal Tahir",
                    offered_in_sem:4,
                    is_compulsory:'0',
                    department:"MT"
                }
            ]

            ,
            courseid:'',
            delete:''
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


    componentDidMount() {
        axios.get("http://localhost:5000/api/courses").then((res) => {
          console.info(res);
        });
      }

    rowClicked = (courseid) =>
    {
        this.setState({course_id:courseid});
  
        console.log(courseid)
       
  
    }


    deleteClicked= (courseid)=>
    {
        console.log("i am in delete"+courseid)
        let url="http://localhost:5000/api/courses/"+ courseid
        axios.delete(url).then((res) => {
            console.info(res);
        });

        this.setState({delete:"1"})


    }
   
    
    renderTableData(){
        return this.state.courses.map((course,index)=>{
            var{id,course_id,course_name,instructor_name,offered_in_sem,is_compulsory,department}=course
         
            return(
                <tr className="my-table" key={id}>
                    <td> <a href="#" className="course-link">{id}</a></td>
                    <td> <a href="#" className="course-link">{course_id}</a></td>
                    <td> <a href="#" className="course-link" >{course_name}</a></td>
                    <td> <a href="#" className="students-link">{instructor_name}</a></td>
                    <td> <a href="#" className="students-link" >{offered_in_sem}</a></td>

                    
                    <td> <a href="#" className="students-link" >{is_compulsory}</a></td>
                    <td> <a href="#" className="students-link" >{department}</a></td>
                    
                    
                    <td>
                        
                        <div className="action-buttons">
                            

                           <Link to='/courses/profile'> <button className="edit-button-course" onClick={() => this.rowClicked(course.course_id)} >
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                            </Link>

                            <button className="delete-button" onClick={()=>this.deleteClicked(course.course_id)}>
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