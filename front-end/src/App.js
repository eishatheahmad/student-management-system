import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";

import Home from "./pages/Home";
import StudentsList from "./pages/StudentsList";
import ListOfCourses from "./pages/ListOfCourses";
import AddStudent from "./pages/AddStudents";
import AddCourse from "./pages/AddCourses";
import StudentProfile from "./pages/StudentProfile";
import CourseProfile from "./pages/CourseProfile";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/students" exact component={StudentsList} />
          <Route path="/courses" exact component={ListOfCourses} />
          <Route path="/add-student" component={AddStudent} />
          <Route path="/add-course" component={AddCourse} />

          <Route path="/students/profile" component={StudentProfile} />
          <Route path="/courses/profile" component={CourseProfile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
