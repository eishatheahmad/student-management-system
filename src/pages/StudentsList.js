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
        new_student_added:'',

        
      students: [
        {
         
          roll_number: "19L-4116",
          name: "Muaz Ali",
          dob: "1999-06-08",
          address: "221 B, Bakers Street, Lahore",
          semester: 4,
          warnings: 0,
          cgpa: 3.42,
        },

        {
          
          roll_number: "19L-4006",
          name: "Umair Mirza",
          dob: "1998-10-08",
          address: "164 B, Liberty Street, Lahore",
          semester: 4,
          warnings: 1,
          cgpa: 1.89,
        },

        {
          
          roll_number: "19L-2236",
          name: "Asad Imran",
          dob: "1997-02-02",
          address: "200 E, Pineapple Street, Lahore",
          semester: 4,
          warnings: 0,
          cgpa: 3.2,
        },

        {
          
          roll_number: "19L-4232",
          name: "Faiqah Shuaib",
          dob: "1999-03-09",
          address: "209 B, Banana Street, Lahore",
          semester: 4,
          warnings: 0,
          cgpa: 3.75,
        },

        {
       
          roll_number: "19L-2760",
          name: "Sameen Imran",
          dob: "1999-07-08",
          address: "21 B, Apricot Street, Lahore",
          semester: 4,
          warnings: 0,
          cgpa: 2.98,
        },

        
      ],
    };

    
  }

  deleteClicked= (studentroll)=>
    {
        console.log("i am in delete"+studentroll)
        let url="http://localhost:5000/api/students/"+ studentroll
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
      console.info(res); //add the new student to studen[]
    /*  const updated_object={
    
        id:this.state.students.length+1,
        roll_number:res.data.roll_number,
        name:res.data.name,
        address:res.data.address,
        dob:res.data.dob,
        semester:res.data.semester,
        warnings:res.data.warnings,
        cgpa:res.data.cgpa,
        
        };*/
        
       
        console.log("updated object")
      
        let date=String(res.data.data.dob)
        console.log("date")
        console.log(res.data.data.dob)

        
      
        let temp= this.state.students.concat(res.data.data)
        
        
       this.setState({students:temp})
       console.log(this.state.students)


        
    });
  }

  rowClicked = (rollnum) =>
  {
      this.setState({row_click_id:rollnum});

     console.log(rollnum)
     

  }
 
  renderTableData() {
    return this.state.students.map((student, index) => {
      const { name, roll_number, dob, address, semester, warnings, cgpa } =
        student;
      return (
        <tr className="my-table"  data-item={student} >
          
          <td>
            {" "}
            
              {roll_number}
            
          </td>
          <td>
            {" "}
           
              {name}
            
          </td>
          <td>
            {" "}
           
              {dob}
            
          </td>
          <td>
            {" "}
           
              {address}
            
          </td>
          <td>
            {" "}
            
              {semester}
            
          </td>
          <td>
            {" "}
            
              {warnings}
            
          </td>
          <td>
            {" "}
            
              {cgpa}
            
          </td>
          
          <td>
            <div className="action-buttons">
            
              <Link to="/students/profile">
                <button classname="edit-button-student" onClick={() => this.rowClicked(student.roll_number)}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </Link>

              <button cclassName="delete-button" onClick={()=>this.deleteClicked(student.roll_number)}>
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
