import React, { Component } from "react";
import { withRouter } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
  faSave,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

import "./StudentProfile.css";

class StudentProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: {
        roll_number: "",
        name: "",
        dob: "",
        address: "",
        semester: "",
        warnings: "",
        cgpa: "",
      },
      courses: [],
      new_course: {},
      all_courses: [],
      status: "",
      is_edited: false,
      is_delete: "",
    };

    this.onInputchange = this.onInputchange.bind(this);
    this.courseAdd = this.courseAdd.bind(this);
    this.postCourse = this.postCourse.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
  }

  componentDidMount() {
    const { roll_number } = this.props.location.state;

    // fetch student info
    let url =
      `${window._env_.URL}/${window._env_.BACKEND_PORT}` +
      "/api/students/" +
      roll_number;
    axios.get(url).then((res) => {
      let temp = res.data.data[0];

      this.setState({ student: temp });
    });

    // fetch student's courses
    let url2 =
      `${window._env_.URL}/${window._env_.BACKEND_PORT}` +
      "/api/studentCourses/" +
      roll_number;
    axios.get(url2).then((res) => {
      console.info(res);

      this.setState({ courses: res.data.data });
    });

    // fetch all courses
    let url3 =
      `${window._env_.URL}/${window._env_.BACKEND_PORT}` +
      "/api/studentCourses/" +
      roll_number;
    axios.get(url3).then((res) => {
      console.info(res);

      this.setState({ all_courses: res.data.data });
    });
  }

  deleteCourse(courseid) {
    let url =
      `${window._env_.URL}/${window._env_.BACKEND_PORT}` +
      "/api/studentCourses/" +
      this.state.student.roll_number +
      "/" +
      courseid;
    axios.delete(url).then((res) => {
      console.info(res);
    });

    let url2 =
      `${window._env_.URL}/${window._env_.BACKEND_PORT}` +
      "/api/studentCourses/" +
      this.state.student.roll_number;
    axios.get(url2).then((res) => {
      console.info(res);

      this.setState({ courses: res.data.data });
    });

    window.location.reload();
  }

  postCourse() {
    let url =
      `${window._env_.URL}/${window._env_.BACKEND_PORT}` +
      "/api/studentCourses/";
    axios.post(url, this.state.new_course).then((res) => {
      console.log(res);
    });

    let url2 =
      `${window._env_.URL}/${window._env_.BACKEND_PORT}` +
      "/api/studentCourses/" +
      this.state.student.roll_number;
    axios.get(url2).then((res) => {
      console.info(res);

      this.setState({ courses: res.data.data });
    });

    window.location.reload();
  }

  canEdit() {
    this.setState({ is_edited: true });
  }

  saveData() {
    const updated_object = {
      name: this.state.student.name,
      dob: new Date(this.state.student.dob).toJSON().slice(0, 10),
      address: this.state.student.address,
      semester: this.state.student.semester,
      warnings: this.state.student.warnings,
      cgpa: this.state.student.cgpa,
    };

    let url =
      `${window._env_.URL}/${window._env_.BACKEND_PORT}` +
      "/api/students/" +
      this.state.student.roll_number;

    axios.put(url, updated_object).then((res) => {
      console.info(res);
      this.setState({ is_edited: false });
    });

    this.setState({ is_edited: false });
  }

  onInputchange(event) {
    let temp = {
      ...this.state.student,
      [event.target.name]: event.target.value,
    };

    this.setState({ student: temp });
  }

  courseAdd(event) {
    this.setState({
      new_course: {
        roll_number: this.state.student.roll_number,
        course_ID: event.target.value,
      },
    });
  }

  render() {
    if (this.state.is_edited === false) {
      return (
        <div className="outer-div">
          <h1>Student Profile</h1>

          <div>
            <div className="inner-div">
              <h3 className="labels">ROLL NUMBER: </h3>
              <p className="student-data-p">{this.state.student.roll_number}</p>
            </div>

            <div className="inner-div">
              <h3 className="labels">NAME: </h3>
              <p className="student-data-p">{this.state.student.name}</p>
            </div>

            <div className="inner-div">
              <h3 className="labels">DATE OF BIRTH: </h3>
              <p className="student-data-p">{this.state.student.dob}</p>
            </div>

            <div className="inner-div">
              <h3 className="labels">ADDRESS: </h3>
              <p className="student-data-p">{this.state.student.address}</p>
            </div>

            <div className="inner-div">
              <h3 className="labels">SEMESTER: </h3>
              <p className="student-data-p">{this.state.student.semester}</p>
            </div>

            <div className="inner-div">
              <h3 className="labels">COURSES: </h3>
              <table className="table-courses">
                <tr className="table-courses">
                  <th className="table-header">Course ID</th>
                  <th className="table-header">Course Name</th>
                </tr>
                {this.state.courses.map((item) => (
                  <tr className="table-courses">
                    <td className="table-row">{item.course_ID}</td>
                    <td className="table-row">{item.name}</td>
                  </tr>
                ))}
              </table>
            </div>

            <div className="inner-div">
              <h3 className="labels">WARNING: </h3>
              <p className="student-data-p">{this.state.student.warnings}</p>
            </div>

            <div className="inner-div">
              <h3 className="labels">CGPA: </h3>
              <p className="student-data-p">{this.state.student.cgpa}</p>
            </div>
          </div>

          <button className="edit-button" onClick={this.canEdit.bind(this)}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </div>
      );
    } else if (this.state.is_edited === true) {
      return (
        <div className="outer-div">
          <h1>Student Profile</h1>

          <div className="inner-div">
            <h3 className="labels">ROLL NUMBER: </h3>
            <p className="student-data-p">{this.state.student.roll_number}</p>
          </div>

          <div>
            <div className="inner-div">
              <h3 className="labels">NAME: </h3>
              <input
                name="name"
                className="input-fields"
                defaultValue={this.state.student.name}
                type="input"
                onChange={this.onInputchange}
              ></input>
            </div>
          </div>

          <div>
            <div className="inner-div">
              <h3 className="labels">DOB: </h3>
              <input
                name="dob"
                className="input-fields"
                defaultValue={this.state.student.dob}
                type="date"
                onChange={this.onInputchange}
              ></input>
            </div>
          </div>

          <div>
            <div className="inner-div">
              <h3 className="labels">ADDRESS: </h3>
              <input
                name="address"
                className="input-fields"
                defaultValue={this.state.student.address}
                type="text"
                onChange={this.onInputchange}
              ></input>
            </div>
          </div>

          <div>
            <div className="inner-div">
              <h3 className="labels">SEMESTER: </h3>

              <select
                name="semester"
                className="inputs-field"
                required
                onChange={this.onInputchange}
              >
                <option value="" selected disabled hidden>
                  {this.state.student.semester}
                </option>
                <option id="semester" value="1">
                  Semester 1
                </option>
                <option id="semester" value="2">
                  Semester 2
                </option>
                <option id="semester" value="3">
                  Semester 3
                </option>
                <option id="semester" value="4">
                  Semester 4
                </option>
                <option id="semester" value="5">
                  Semester 5
                </option>
                <option id="semester" value="6">
                  Semester 6
                </option>
                <option id="semester" value="7">
                  Semester 7
                </option>
                <option id="semester" value="8">
                  Semester 8
                </option>
              </select>
            </div>
          </div>

          <div>
            <div className="inner-div">
              <h3 className="labels">WARNING: </h3>

              <select
                name="warnings"
                className="inputs-field"
                required
                onChange={this.onInputchange}
              >
                <option value="" selected disabled hidden>
                  {this.state.student.warnings}
                </option>

                <option id="warning" value="1">
                  1
                </option>
                <option id="warning" value="2">
                  2
                </option>
                <option id="warning" value="3">
                  3
                </option>
              </select>
            </div>
          </div>

          <div>
            <div className="inner-div">
              <h3 className="labels">CGPA: </h3>
              <input
                name="cgpa"
                className="input-fields"
                defaultValue={this.state.student.cgpa}
                type="text"
                onChange={this.onInputchange}
              ></input>
            </div>
          </div>

          <div>
            <div className="inner-div">
              <h3 className="labels">COURSES </h3>

              <table className="table-courses">
                <tr className="table-courses">
                  <th className="table-header">Course ID</th>
                  <th className="table-header">Course Name</th>
                  <th className="table-header">Action</th>
                </tr>
                {this.state.courses.map((item) => (
                  <tr className="table-courses">
                    <td className="table-row">{item.course_ID}</td>
                    <td className="table-row">{item.name}</td>

                    <td className="table-row">
                      <button
                        className="delete-button"
                        onClick={() => this.deleteCourse(item.course_ID)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>

          <div className="add-course-button">
            {" "}
            Add Course
            <div className="inner-div">
              <button className="table-row" onClick={this.postCourse}>
                <FontAwesomeIcon icon={faPlus} />
              </button>

              <input
                name="new_course"
                className="input-fields"
                placeholder="Enter course ID"
                type="text"
                onChange={this.courseAdd}
              ></input>
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
