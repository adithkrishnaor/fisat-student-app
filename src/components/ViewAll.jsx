import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const ViewAll = () => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    axios.get("https://courseapplogix.onrender.com/getdata")
    .then(
      (response) => {
        console.log(response.data)
        setData(response.data)
      }
    ).catch(
      (error) => {
        console.log(error.message)
        alert(error.message)
      }
    ).finally()
  }
  useEffect(()=> {fetchData()},[])

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <br /><center>
              <h3>View All</h3>
            </center><br />
            <div className="row g-3">
              {
                data.map(
                  (value, index) => {
                    return <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <div class="card text-bg-secondary mb-3">
                        <h4 class="card-header text-center">{value.firstname}</h4>
                        <div class="card-body">
                          <h6 class="card-text">Name : {value.firstname} {value.lastname}</h6>
                          <h6 class="card-text">College : {value.college}</h6>
                          <h6 class="card-title">Course : {value.course}</h6>
                          <h6 class="card-text">Email : {value.email}</h6>
                          <h6 class="card-text">Mobile No. : {value.mobile}</h6>
                          <h6 class="card-text">Date of Birth : {value.dob}</h6>
                          <h6 class="card-text">Address : {value.address}</h6>
                        </div>
                      </div>
                    </div>
                  }
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
