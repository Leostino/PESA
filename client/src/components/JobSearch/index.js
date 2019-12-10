import React from "react";

import { Form, Row, Col } from "react-bootstrap";

function JobSearch(props) {
    return(
<Form>
<div className="ml-5 pl-5">
  <Row>
    
    <Col>
    
    <label htmlFor="search" className="mt-5 font-weight-bold d-inline ml-4">Keyword</label>
    
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control w-75 mt-5 d-inline ml-5"
          placeholder="keyword"
        />


      
    </Col>
    <Col>
        <button onClick={props.handleFormSubmit} className="btn btn-secondary mt-5 mb-3">
          Search
        </button>
      
    </Col>

  </Row>
  </div>
</Form>
)}

export default JobSearch;