// import react and link

import React from "react";

import Container from "../Grid";

import { Link } from "react-router-dom";


// component for database page

function SearchResult(props) {
  return (

    <ul className="list-group d-flex align-items-center">
      {props.results.map(result => (
        <li key={result.id} className="list-group-item card-body font-weight-bold mt-3 mb-3">
          <p><b>COMPANY:</b>  {result.company.name}</p>
          {/* <p><b>LOCATION:</b>  {result.company.location.name}  </p> */}
          <p><b>CATEGORY:</b>  {result.category.name} </p>
          <p><b>POSITION:</b>  {result.title}</p>
          <p><b>TYPE:</b>  {result.type.name}</p>
          <p><b>APPLY HERE:</b>  <a href={result.apply_url} target="_blank">{result.apply_url}</a></p>
          <p><b>HOW TO APPLY:</b>  {result.howto_apply}</p>          
          {/* <p><b>JOB DESCRIPTION:</b> {result.description} </p> */}
          <p><b>POST DATE & TIME:</b>  {result.post_date} </p>
          {/* <p>DOCUMENT:  {result.documents} </p> */}

         
         <div className="text-center">             
          {/* save button */}
          <button className="card-button btn btn-secondary" key={result.id} onClick={() => props.saveJob}>
            Save Job
          </button>
          </div>
        </li>
      ))}
    </ul>

  );
}

export default SearchResult;