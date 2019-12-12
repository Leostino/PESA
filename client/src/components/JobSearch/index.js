import React from "react";

import { Row, Col } from "../Grid";

function JobSearch(props) {
    return(
  <Row>
      <Col size="md-3">
      </Col>
    
    <Col size="md-3">
    
    <label htmlFor="keyword" className="mt-5 font-weight-bold"><b>JOB KEYWORD</b></label>

    
        <input
          value={props.keyword}
          onChange={props.handleInputChange}
          name="keyword"
          type="text"
          className="form-control w-50 mt-5 d-inline ml-2"
          placeholder="keyword"
        />
    
    </Col>

    <Col size="md-3">

    <label htmlFor="location" className="mt-5 font-weight-bold ml-2 pl-1"><b>LOCATION</b></label>

    
        <input
          value={props.location}
          onChange={props.handleInputChange}
          name="location"
          type="text"
          className="form-control w-50 mt-5 d-inline ml-2"
          placeholder="location"
        />


      
    </Col>
    <Col size="md-3">
        <button onClick={props.handleFormSubmit} className="btn btn-secondary mt-5 mb-3">
          Search
        </button>
      
    </Col>

  </Row>
)}

export default JobSearch;