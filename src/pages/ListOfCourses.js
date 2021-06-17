import React, { Component } from "react";
import { withRouter } from "react-router";

import "./ListOfCourses.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

class ListOfCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      courseid: "",
      delete: "",
    };
  }

  renderTableHeader() {
    let header = Object.keys(this.state.courses[0]);
    let key1 = "Action";
    header.push(key1);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  componentDidMount() {
    axios.get(`${process.env.URL}/${process.env.PORT}` + "/api/courses").then((res) => {
      console.info(res);

      this.setState({ courses: res.data.data });
    });
  }

  rowClicked = (courseid) => {
    this.setState({ course_ID: courseid });
  };

  deleteClicked = (courseid) => {
    let url = `${process.env.URL}/${process.env.PORT}` + "/api/courses/" + courseid;
    axios.delete(url).then((res) => {
      console.info(res);
    });

    axios.get(`${process.env.URL}/${process.env.PORT}` + "/api/courses").then((res) => {
      console.info(res); //add the new student to studen[]

      this.setState({ students: res.data.data });
    });

    window.location.reload();
  };

  renderTableData() {
    return this.state.courses.map((course, index) => {
      var {
        course_ID,
        name,
        instructor,
        offered_in_sem,
        is_compulsory,
        department,
      } = course;

      return (
        <tr className="my-table" key={course_ID}>
          <td>
            {" "}
            <a href="#" className="course-link">
              {course_ID}
            </a>
          </td>
          <td>
            {" "}
            <a href="#" className="course-link">
              {name}
            </a>
          </td>
          <td>
            {" "}
            <a href="#" className="students-link">
              {instructor}
            </a>
          </td>
          <td>
            {" "}
            <a href="#" className="students-link">
              {offered_in_sem}
            </a>
          </td>

          <td>
            {" "}
            <a href="#" className="students-link">
              {is_compulsory}
            </a>
          </td>
          <td>
            {" "}
            <a href="#" className="students-link">
              {department}
            </a>
          </td>

          <td>
            <div className="action-buttons">
              <Link
                to={{
                  pathname: "/courses/profile/" + course.course_ID,
                  state: { course_ID: course.course_ID },
                }}
              >
                <button
                  classname="edit-button-student"
                  onClick={() => this.rowClicked(course.course_ID)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </Link>

              <button
                className="delete-button"
                onClick={() => this.deleteClicked(course.course_ID)}
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
        <h1>Courses List</h1>
        {this.state.courses.length > 0 ? (
          <table id="courses">
            <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
            </tbody>
          </table>
        ) : (
          <h4>No Courses found...</h4>
        )}
      </div>
    );
  }
}

export default withRouter(ListOfCourses);
