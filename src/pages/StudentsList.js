import React, { Component } from "react";
import { withRouter } from "react-router";

import "./StudentsList.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";



class StudentsList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        row_click_id:'',

        
      students: [
        {
          id: 1,
          student_roll: "19L-4116",
          student_name: "Muaz Ali",
          student_dob: "1999-06-08",
          student_address: "221 B, Bakers Street, Lahore",
          student_semester: 4,
          student_warning: 0,
          student_cgpa: 3.42,
        },

        {
          id: 2,
          student_roll: "19L-4006",
          student_name: "Umair Mirza",
          student_dob: "1998-10-08",
          student_address: "164 B, Liberty Street, Lahore",
          student_semester: 4,
          student_warning: 1,
          student_cgpa: 1.89,
        },

        {
          id: 3,
          student_roll: "19L-2236",
          student_name: "Asad Imran",
          student_dob: "1997-02-02",
          student_address: "200 E, Pineapple Street, Lahore",
          student_semester: 4,
          student_warning: 0,
          student_cgpa: 3.2,
        },

        {
          id: 4,
          student_roll: "19L-4232",
          student_name: "Faiqah Shuaib",
          student_dob: "1999-03-09",
          student_address: "209 B, Banana Street, Lahore",
          student_semester: 4,
          student_warning: 0,
          student_cgpa: 3.75,
        },

        {
          id: 5,
          student_roll: "19L-2760",
          student_name: "Sameen Imran",
          student_dob: "1999-07-08",
          student_address: "21 B, Apricot Street, Lahore",
          student_semester: 4,
          student_warning: 0,
          student_cgpa: 2.98,
        },

        {
          id: 6,
          student_roll: "19L-1189",
          student_name: "Omer Hassan",
          student_dob: "1998-01-21",
          student_address: "221 B, Apple Street, Lahore",
          student_semester: 4,
          student_warning: 0,
          student_cgpa: 3.1,
        },

        {
          id: 7,
          student_roll: "19L-2760",
          student_name: "Hadia Ishtiaq",
          student_dob: "1999-05-16",
          student_address: "83 C, Grapes Street, Lahore",
          student_semester: 4,
          student_warning: 0,
          student_cgpa: 3.33,
        },

        {
          id: 8,
          student_roll: "19L-1022",
          student_name: "Areeb Ahmed",
          student_dob: "1998-02-01",
          student_address: "34 D, Bakers Street,Lahore",
          student_semester: 4,
          student_warning: 0,
          student_cgpa: 3.75,
        },

        {
          id: 9,
          student_roll: "19L-1223",
          student_name: "Maida Tariq",
          student_dob: "1999-03-08",
          student_address: "24 E, Orange Street, Lahore",
          student_semester: 4,
          student_warning: 0,
          student_cgpa: 3.52,
        },

        {
          id: 10,
          student_roll: "19L-2375",
          student_name: "Humza Noor",
          student_dob: "1997-11-04",
          student_address: "190 D, Strawberry Street, Lahore",
          student_semester: 4,
          student_warning: 0,
          student_cgpa: 3.24,
          delete:''
        },
      ],
    };

    
  }

  deleteClicked= (studentroll)=>
    {
        console.log("i am in delete"+studentroll)
        let url="http://localhost:5000/api/courses/"+ studentroll
        axios.delete(url).then((res) => {
            console.info(res);
        });

        this.setState({delete:"1"})


    }

  renderTableHeader() {
    let header = Object.keys(this.state.students[0]);
    let key1 = "Action";
    header.push(key1);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  componentDidMount() {
    console.log("i am in get")
    axios.get("http://localhost:5000/api/students").then((res) => {
      console.info(res);
    });
  }

  rowClicked = (rollnum) =>
  {
      this.setState({row_click_id:rollnum});

     console.log(rollnum)
     

  }
 
  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, student_name, student_roll, student_dob, student_address, student_semester, student_warning, student_cgpa } =
        student;
      return (
        <tr className="my-table" key={id} data-item={student} >
          <td>
            {" "}
            
              {id}
            
          </td>
          <td>
            {" "}
            
              {student_roll}
            
          </td>
          <td>
            {" "}
           
              {student_name}
            
          </td>
          <td>
            {" "}
           
              {student_dob}
            
          </td>
          <td>
            {" "}
           
              {student_address}
            
          </td>
          <td>
            {" "}
            
              {student_semester}
            
          </td>
          <td>
            {" "}
            
              {student_warning}
            
          </td>
          <td>
            {" "}
            
              {student_cgpa}
            
          </td>
          
          <td>
            <div className="action-buttons">
            
              <Link to="/students/profile">
                <button classstudent_name="edit-button-student" onClick={() => this.rowClicked(student.student_roll)}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </Link>

              <button cclassName="delete-button" onClick={()=>this.deleteClicked(student.student_roll)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </td>
        </tr>
      );
    });
  }

 
  render() {

    
    return (
      <div>
        <h1>Students List</h1>

        <table id="students">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(StudentsList);
