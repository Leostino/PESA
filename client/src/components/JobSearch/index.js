import React from "react";

import { Row, Col } from "../Grid";

function JobSearch(props) {
    return(
  <Row>
    
    <Col size="md-4">
    
    
    </Col>

    <Col size="md-3">

    <label htmlFor="search" className="mt-5 font-weight-bold border ml-2 pl-1">Jobs Keyword</label>

    
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control w-50 mt-5 d-inline border ml-4"
          placeholder="keyword"
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