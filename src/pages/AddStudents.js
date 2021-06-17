import React, { Component } from "react";
import "./AddStudents.css";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as ImIcons from "react-icons/im";

import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      new_students: [],
      id: "",
      roll_number: "",
      name: "",
      dob: "",
      address: "",
      semester: "",
      warnings: "",
      cgpa: "",
      status: "",
    };

    this.onInputchange = this.onInputchange.bind(this);
  }

  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  addStudent(event) {
    const updated_object = {
      roll_number: this.state.roll_number,
      name: this.state.name,
      address: this.state.address,
      dob: new Date(this.state.dob).toJSON().slice(0, 10),
      semester: this.state.semester,
      warnings: this.state.warnings,
      cgpa: this.state.cgpa,
    };

    let url = `${process.env.URL}/${process.env.PORT}` + "/api/students/";

    axios.post(url, updated_object).then((res) => {
      this.setState({ new_course: updated_object });
    });
  }

  render() {
    return (
      <div className="form-outer-div">
        <h1>Add New Student</h1>
        <h2>Please fill the form below to add new student</h2>
        <div className="form-inner-div">
          <form class="my-form">
            <label className="labels">ROLL NUMBER</label>
            <h5 className="help-text">Roll Number i.e. (17L-1234)</h5>
            <div className="icon-div">
              <BsIcons.BsPersonFill className="icons"></BsIcons.BsPersonFill>
              <input
                type="text"
                className="inputs"
                name="roll_number"
                placeholder="Enter roll number"
                required
                onChange={this.onInputchange}
              ></input>
            </div>

            <label className="labels">NAME</label>
            <div className="icon-div">
              <BiIcons.BiRename className="icons"></BiIcons.BiRename>
              <input
                type="text"
                className="inputs"
                name="name"
                placeholder="Enter full name"
                required
                onChange={this.onInputchange}
              ></input>
            </div>

            <label className="labels">DATE OF BIRTH</label>
            <div className="icon-div">
              <BiIcons.BiCalendar className="icons"></BiIcons.BiCalendar>
              <input
                type="date"
                className="inputs"
                name="dob"
                required
                onChange={this.onInputchange}
              ></input>
            </div>

            <label className="labels">ADDRESS</label>
            <div className="icon-div">
              <MdIcons.MdLocationCity className="icons"></MdIcons.MdLocationCity>
              <textarea
                className="inputs"
                name="address"
                placeholder="Enter address"
                required
                onChange={this.onInputchange}
              ></textarea>
            </div>

            <label className="labels">SEMESTER</label>
            <div className="icon-div">
              <AiIcons.AiOutlineNumber className="icons"></AiIcons.AiOutlineNumber>

              <select
                name="semester"
                className="inputs-select"
                required
                onChange={this.onInputchange}
              >
                <option value="" selected disabled hidden>
                  Semester
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

            <label className="labels">WARING COUNT</label>
            <div className="icon-div">
              <ImIcons.ImWarning className="icons"></ImIcons.ImWarning>

              <select
                name="warnings"
                className="inputs-select"
                required
                onChange={this.onInputchange}
              >
                <option value="" selected disabled hidden>
                  Select warning count
                </option>
                <option id="warning" value="0">
                  0
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

            <label className="labels">CGPA</label>
            <div className="icon-div">
              <ImIcons.ImCalculator className="icons"></ImIcons.ImCalculator>
              <input
                type="text"
                className="inputs"
                name="cgpa"
                placeholder="Enter CGPA"
                required
                onChange={this.onInputchange}
              ></input>
            </div>

            <Link
              to="/students "
              onClick={() => setTimeout(() => window.location.reload(), 500)}
            >
              <button
                className="add-button"
                onClick={this.addStudent.bind(this)}
              >
                Add Student
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(AddStudent);

//roll number, name , dob, address, semester, warning, cgpa
