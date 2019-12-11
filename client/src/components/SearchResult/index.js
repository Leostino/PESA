// import react and link

import React from "react";

import { Link } from "react-router-dom"


// component for database page

function SearchResult(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li key={result._id} className="list-group-item card-body font-weight-bold mt-3 mb-3">
          <p>COMPANY: {result.company.name}</p>
          <p>LOCATION: {result.company.name} </p>
          <p>POSITION: {result.category.name} </p>
          {/* <p>JOB DESCRIPTION: {result.description} </p> */}
          <p>POST DATE: {result.post_date} </p>
          <p>DOCUMENT: {result.documents} </p>

         
             
          {/* delete button */}
          <button className="card-button btn btn-secondary ml-3" key={result._id} onClick={() => props.saveJob(result._id)}>
            Save Job
          </button>
        </li>
      ))}
    </ul>
  );
}

export default SearchResult;