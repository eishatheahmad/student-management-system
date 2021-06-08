import React, { Component } from "react";
import { withRouter } from 'react-router';

import './StudentsList.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash , faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


class StudentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            students:[
                {
                    id:1,
                    RollNumber:"19L-4116",
                    name:"Muaz Ali",
                    dob:"1999-06-08",
                    address:"221 B, Bakers Street, Lahore",
                    semester:4,
                    warning:0,
                    cgpa:3.42,
                     
                    
            
                },
            
            
                {
                    id:2,
                    RollNumber:"19L-4006",
                    name:"Umair Mirza",
                    dob:"1998-10-08",
                    address:"164 B, Liberty Street, Lahore",
                    semester:4,
                    warning:1,
                    cgpa:1.89,
                     
            
                },
            
            
                {
                    id:3,
                    RollNumber:"19L-2236",
                    name:"Asad Imran",
                    dob:"1997-02-02",
                    address:"200 E, Pineapple Street, Lahore",
                    semester:4,
                    warning:0,
                    cgpa:3.2,
                    
                     
            
                },
            
            
                {
                    id:4,
                    RollNumber:"19L-4232",
                    name:"Faiqah Shuaib",
                    dob:"1999-03-09",
                    address:"209 B, Banana Street, Lahore",
                    semester:4,
                    warning:0,
                    cgpa:3.75,
                     
            
                },
            
            
                {
                    id:5,
                    RollNumber:"19L-2760",
                    name:"Sameen Imran",
                    dob:"1999-07-08",
                    address:"21 B, Apricot Street, Lahore",
                    semester:4,
                    warning:0,
                    cgpa:2.98,
                     
            
                },
            
                {
                    id:6,
                    RollNumber:"19L-1189",
                    name:"Omer Hassan",
                    dob:"1998-01-21",
                    address:"221 B, Apple Street, Lahore",
                    semester:4,
                    warning:0,
                    cgpa:3.10,
                     
            
                },
            
                {
                    id:7,
                    RollNumber:"19L-2760",
                    name:"Hadia Ishtiaq",
                    dob:"1999-05-16",
                    address:"83 C, Grapes Street, Lahore",
                    semester:4,
                    warning:0,
                    cgpa:3.33,
                     
            
                },
            
                {
                    id:8,
                    RollNumber:"19L-1022",
                    name:"Areeb Ahmed",
                    dob:"1998-02-01",
                    address:"34 D, Bakers Street,Lahore",
                    semester:4,
                    warning:0,
                    cgpa:3.75,
                     
            
                },
            
                {
                    id:9,
                    RollNumber:"19L-1223",
                    name:"Maida Tariq",
                    dob:"1999-03-08",
                    address:"24 E, Orange Street, Lahore",
                    semester:4,
                    warning:0,
                    cgpa:3.52,
                     
            
                },
            
                {
                    id:10,
                    RollNumber:"19L-2375",
                    name:"Humza Noor",
                    dob:"1997-11-04",
                    address:"190 D, Strawberry Street, Lahore",
                    semester:4,
                    warning:0,
                    cgpa:3.24,
                     
            
                }
            ]
        }
    }

    renderTableHeader(){
        let header= Object.keys(this.state.students[0])
        let key1='Action'
        header.push(key1)
        return header.map((key,index)=>{
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData(){
        return this.state.students.map((student,index)=>{
            const{id,name,RollNumber,dob,address,semester,warning,cgpa}=student
            return(
                    
                
                    <tr  className="my-table" key={id}>
                    <td> <a href="#" className="students-link">{id}</a></td>
                    <td> <a href="#" className="students-link">{RollNumber}</a></td>
                    <td> <a href="#" className="students-link" >{name}</a></td>
                    <td> <a href="#" className="students-link">{dob}</a></td>
                    <td> <a href="#" className="students-link" >{address}</a></td>
                    <td> <a href="#" className="students-link" >{semester}</a></td>
                    <td> <a href="#" className="students-link" >{warning}</a></td>
                    <td> <a href="#" className="students-link" >{cgpa}</a></td>
                    
                    <td>
                        
                        <div className="action-buttons">
                            

                            <button className="edit-button">
                                <FontAwesomeIcon icon={faEdit} />
                            </button>

                            <button className="delete-button">
                                <FontAwesomeIcon icon={faTrash} />
                            </button>

                        </div>
                        
                    </td>
                    
                </tr>

               
            )
        })
    }
    render() { 

     
    return(<div>
        <h1>Students List</h1>
        <table id='students'>
            <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderTableData()}
            </tbody>
        </table>
    </div>)
}
 
}




export default withRouter(StudentsList);