import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';

import Home from './pages/Home'
import StudentsList from './pages/StudentsList'
import ListOfCourses from './pages/ListOfCourses'
import AddStudent from './pages/AddStudents'
import AddCourse from './pages/AddCourses'
import StudentProfile from './pages/StudentProfile'

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/students' component={StudentsList} />
          <Route path='/courses' component={ListOfCourses} />
          <Route path='/add-student' component={AddStudent} />
          <Route path='/add-course' component={AddCourse} />

          <Route path='/student/profile' component={StudentProfile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
