import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const AddStudent = () => {

  const [data,setData] = useState(
    {
      "firstname":"",
      "lastname":"",
      "college":"",
      "course":"",
      "email":"",
      "mobile":"",
      "dob":"",
      "address":""
    }
  )
  
  const inputHandler = (event) => {
    setData({...data,[event.target.name]:event.target.value})
  }

  const readValue = () =>{
    console.log(data)
    axios.post("https://courseapplogix.onrender.com/addstudents",data).then(
      (response) => {
         console.log(response.data)
         if (response.data.status=="success") {
           alert("Success")          
         } else {
           alert("Failed")
         }
       }
       ).catch()
  }

  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <center>
              <h3>Student Registration</h3>
            </center>
            <div className="row g-3">
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  First Name
                </label>
                <input type="text" className="form-control" name="firstname" value={data.firstname} onChange={inputHandler}/>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Last Name
                </label>
                <input type="text" className="form-control" name="lastname" value={data.lastname} onChange={inputHandler}/>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  College
                </label>
                <input type="text" className="form-control" name="college" value={data.college} onChange={inputHandler}/>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Course
                </label>
                <select className="form-control" name="course" value={data.course} onChange={inputHandler}>
                  <option value="">Select</option>
                  <option value="MCA">MCA</option>
                  <option value="MBA">MBA</option>
                  <option value="CSE">CSE</option>
                  <option value="EEE">EEE</option>
                  <option value="ECE">ECE</option>
                  <option value="MECH">MECH</option>
                </select>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input type="email" id="" className="form-control" name="email" value={data.email} onChange={inputHandler}/>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Mobile
                </label>
                <input type="number" id="" className="form-control" name="mobile" value={data.mobile} onChange={inputHandler}/>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Date Of Birth
                </label>
                <input type="date" id="" className="form-control" name="dob" value={data.dob} onChange={inputHandler}/>
              </div>  
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Address
                </label>
                <textarea id="" className="form-control" name="address" value={data.address} onChange={inputHandler}></textarea>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <center>
                  <button className="btn btn-success" onClick={readValue}>Submit</button> 
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
