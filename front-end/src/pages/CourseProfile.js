import React, { Component } from "react";
import { withRouter } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faEdit } from "@fortawesome/free-solid-svg-icons";
import "./CourseProfile.css";
import axios from "axios";

class CourseProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        course_ID: "",
        name: "",
        instructor: "",
        offered_in_sem: "",
        department: "",
        is_compulsory: "",
      },

      is_edited: false,
    };

    this.onInputchange = this.onInputchange.bind(this);
    //this.postCourse = this.postCourse.bind(this);
  }

  componentDidMount() {
    const { course_ID } = this.props.location.state;

    let url =
      `${window._env_.URL}/${window._env_.BACKEND_PORT}` +
      "/api/courses/" +
      course_ID;
    axios.get(url).then((res) => {
      console.info(res);

      let temp = res.data.data[0];

      this.setState({ course: temp });
    });
  }

  onInputchange(event) {
    let temp = {
      ...this.state.course,
      [event.target.name]: event.target.value,
    };
    this.setState({ course: temp });
  }

  canEdit() {
    this.setState({ is_edited: true });
  }

  saveData() {
    const updated_object = {
      course_ID: this.state.course.course_ID,
      name: this.state.course.name,
      instructor: this.state.course.instructor,
      offered_in_sem: this.state.course.offered_in_sem,
      department: this.state.course.department,
      is_compulsory: this.state.course.is_compulsory,
    };

    let url =
      `${window._env_.URL}/${window._env_.BACKEND_PORT}` +
      "/api/courses/" +
      this.state.course.course_ID;

    axios.put(url, updated_object).then((res) => {
      console.info(res);
      this.setState({ is_edited: false });
    });

    this.setState({ is_edited: false });

    let url1 =
      `${window._env_.URL}/${window._env_.BACKEND_PORT}` +
      "/api/courses/" +
      this.state.course.course_ID;
    axios.get(url1).then((res) => {
      console.info(res);

      let temp = res.data.data[0];

      this.setState({ course: temp });
    });

    this.setState({ is_edited: false });

    window.location.reload();
  }

  render() {
    if (this.state.is_edited === false) {
      return (
        <div className="outer-div">
          <h1>Course Profile</h1>

          <div>
            <div className="inner-div">
              <h3 className="labels">COURSE ID: </h3>
              <p className="student-data-p">{this.state.course.course_ID}</p>
            </div>

            <div className="inner-div">
              <h3 className="labels">COURSE NAME: </h3>
              <p className="student-data-p">{this.state.course.name}</p>
            </div>

            <div className="inner-div">
              <h3 className="labels">INSTRUCTOR : </h3>
              <p className="student-data-p">{this.state.course.instructor}</p>
            </div>

            <div className="inner-div">
              <h3 className="labels">OFFERED IN SEMESTER: </h3>
              <p className="student-data-p">
                {this.state.course.offered_in_sem}
              </p>
            </div>

            <div className="inner-div">
              <h3 className="labels">COMPULSARY: </h3>
              <p className="student-data-p">
                {this.state.course.is_compulsory}
              </p>
            </div>

            <div className="inner-div">
              <h3 className="labels">DEPARTMENT: </h3>
              <p className="student-data-p">{this.state.course.department}</p>
            </div>
          </div>

          <button className="edit-button" onClick={this.canEdit.bind(this)}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </div>
      );
    }

    if (this.state.is_edited === true) {
      return (
        <div className="outer-div">
          <h1>Course Profile</h1>

          <div>
            <div className="inner-div">
              <h3 className="labels">COURSE ID: </h3>
              <p className="student-data-p">{this.state.course.course_ID}</p>
            </div>
          </div>

          <div>
            <div className="inner-div">
              <h3 className="labels">COURSE NAME: </h3>
              <input
                name="name"
                className="input-fields"
                defaultValue={this.state.course.name}
                type="input"
                onChange={this.onInputchange}
              ></input>
            </div>
          </div>

          <div>
            <div className="inner-div">
              <h3 className="labels">INSTRUCTOR: </h3>
              <input
                name="instructor"
                className="input-fields"
                defaultValue={this.state.course.instructor}
                type="text"
                onChange={this.onInputchange}
              ></input>
            </div>
          </div>

          <div>
            <div className="inner-div">
              <h3 className="labels">OFFERED IN SEMESTER: </h3>

              <select
                name="offered_in_sem"
                className="inputs-fields"
                required
                onChange={this.onInputchange}
              >
                <option value="" selected disabled hidden>
                  {this.state.course.offered_in_sem}
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
              <h3 className="labels">COMPULSARY: </h3>

              <select
                name="is_compulsory"
                className="inputs-fields"
                required
                onChange={this.onInputchange}
              >
                <option value="" selected disabled hidden>
                  {this.state.course.is_compulsory}
                </option>

                <option id="compulsory" value="true">
                  Yes (for core courses)
                </option>
                <option id="compulsory" value="false">
                  No (for elective courses)
                </option>
              </select>
            </div>
          </div>

          <div>
            <div className="inner-div">
              <h3 className="labels">DEPARTMENT: </h3>

              <select
                name="department"
                className="inputs-fields"
                required
                onChange={this.onInputchange}
              >
                <option value="" selected disabled hidden>
                  {this.state.course.department}
                </option>
                <option id="compulsory" value="CS">
                  CS
                </option>
                <option id="compulsory" value="EE">
                  EE
                </option>
                <option id="compulsory" value="CV">
                  CV
                </option>
                <option id="compulsory" value="MG">
                  MG
                </option>
              </select>
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

export default withRouter(CourseProfile);
