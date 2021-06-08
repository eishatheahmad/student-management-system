import React, { Component } from "react";
import { withRouter } from 'react-router';


class StudentProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:'',
            new_rollnum:'',
            new_name: '',
            new_dob: '',
            new_address:'',
            new_semester:'',
            new_warning:'',
            new_cgpa:'',
            status:'',
         }
    }
    render() { 
        return (
             <div>hello i am student profile</div> );
    }
}
 
export default StudentProfile;