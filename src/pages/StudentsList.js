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
      row_click_id: "",
      new_student_added: "",

      students: [],
    };

    this.deleteClicked = this.deleteClicked.bind(this);
  }

  deleteClicked(studentroll) {
    let url = `${process.env.URL}/${process.env.PORT}` + "/api/students/" + studentroll;
    axios.delete(url).then((res) => {
      console.info(res);
    });

    axios.get(`${process.env.URL}/${process.env.PORT}` + "/api/students").then((res) => {
      console.info(res); //add the new student to studen[]

      this.setState({ students: res.data.data });
    });

    window.location.reload();
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
    axios.get(`${process.env.URL}/${process.env.PORT}` + "/api/students").then((res) => {
      console.info(res); //add the new student to studen[]

      this.setState({ students: res.data.data });
    });
  }

  rowClicked = (rollnum) => {
    this.setState({ row_click_id: rollnum });
  };

  renderTableData() {
    return this.state.students.map((student, index) => {
      const { name, roll_number, dob, address, semester, warnings, cgpa } =
        student;
      return (
        <tr className="my-table" data-item={student}>
          <td> {roll_number}</td>
          <td> {name}</td>
          <td> {dob}</td>
          <td> {address}</td>
          <td> {semester}</td>
          <td> {warnings}</td>
          <td> {cgpa}</td>

          <td>
            <div className="action-buttons">
              <Link
                to={{
                  pathname: "/students/profile/" + student.roll_number,
                  state: { roll_number: student.roll_number },
                }}
              >
                <button
                  classname="edit-button-student"
                  onClick={() => this.rowClicked(student.roll_number)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </Link>

              <button
                className="delete-button"
                onClick={() => this.deleteClicked(student.roll_number)}
              >
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
      <div style={{ padding: "2%" }}>
        <h1>Students List</h1>

        {this.state.students.length > 0 ? (
          <table id="students">
            <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
            </tbody>
          </table>
        ) : (
          <h4>No Students found...</h4>
        )}
      </div>
    );
  }
}

export default withRouter(StudentsList);
