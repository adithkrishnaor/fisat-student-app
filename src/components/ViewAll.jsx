import React, { useState } from "react";
import Navbar from "./Navbar";

const ViewAll = () => {
  const [data, setData] = useState([
    {
      _id: "66651683741a512717d92b87",
      firstname: "Manu",
      lastname: "R",
      college: "FISAT",
      dob: "02/04/1999",
      course: "B-Tech Comp Science",
      mobile: "+91 95266 7443",
      email: "aa@gmail.com",
      address: "Kochi",
      __v: 0,
    },
    {
      _id: "666516bc741a512717d92b88",
      firstname: "Rahul",
      lastname: "D",
      college: "FISAT",
      dob: "02/01/1992",
      course: "MCA",
      mobile: "+91 95266 74440",
      email: "aa@gmail.com",
      address: "Test Address",
      __v: 0,
    },
  ]);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <center>
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
                          <h6 class="card-text">Full Name : {value.firstname} {value.lastname}</h6>
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
