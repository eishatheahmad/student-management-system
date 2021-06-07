import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';

import Home from './pages/Home'
import StudentsList from './pages/StudentsList'
import ListOfCourses from './pages/ListOfCourses'



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
        </Switch>
      </Router>
    </>
  );
}

export default App;
