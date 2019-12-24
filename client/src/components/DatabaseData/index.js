// import react and link

import React from "react";

import { Link } from "react-router-dom"


// component for database page

function DatabaseData(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li key={result._id} className="list-group-item card-body font-weight-bold mt-3 mb-3">
          <p>COMPANY: {result.company_name}</p>
          <p>LOCATION: {result.location}</p>
          <p>POSITION: {result.position}</p>
          <p>JOB DESCRIPTION: {result.description}</p>
          <p>APPLICATION DATE: {result.application_date}</p>
          <p>DOCUMENT: {result.documents} </p>

          {/* edit button */}
          <Link to={"/view/pesa/"+ result._id} className={window.location.pathname === "/view/pesa"+ result._id}>
            <button className="card-button btn btn-secondary">
              Edit
            </button>
          </Link>
             
          {/* delete button */}
          <button className="card-button btn btn-secondary ml-3" key={result._id} onClick={() => props.deleteJob(result._id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default DatabaseData;