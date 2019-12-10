// import components and react

import React, { Component } from "react";

// import FormFill from "../components/FormFill"

import JobSearch from "../components/JobSearch";

import SearchResult from "../components/SearchResult"

import PagesNavBar from "../components/PagesNavbar";

import API from "../utils/API"


// class for search page

class JobApi extends Component {

    // state obj for input fields on search page

    state = {

        search: "",
        
        results: []
    }

    // load this after search page loads

    componentDidMount() {

      API.search("web developer")
      .then(res => {
          console.log(res);
          this.setState({ results: res.data.message })
        })
      .catch(err => console.log(err));

    }


    // google sign out method

    signOut = () => {
        document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:3000";
    }


    // handles changes in input fields when user types

    handleInputChange = event => {

        const { name, value } = event.target;

        this.setState({
            [name] : value
        })
      
    };


    // handles form submission

    handleFormSubmit = event => {

        // prevent default form submission

        event.preventDefault(); 


        // save what user typed in database when form submitted

        API.saveJob({
            company_name: this.state.company,
            location: this.state.location,
            position: this.state.position,
            description: this.state.description,
            application_date: this.state.date,
            documents: this.state.documents

        })
      .then(res => {

        // clear input fields after form submission

          this.setState({
            search: "",
            company: "",
            location: "",
            position: "",
            description: "",
            date: "",
            documents: "",
          })
        
        
        
        })
      .catch(err => console.log(err));

    }

   
    // renders the search page using the required components

    render () {
        return (        
            <div id="job-page">
                <PagesNavBar signOut={this.signOut}/>
               
            {/* <div id="search-form" className="d-flex justify-content-between border-bottom mr-2">
            
            <Row>
                <Col size="md-2">
                <Logo image={logoImage[0].image} name={logoImage[0].name} />
                </Col>
            </Row>
            <Row className="ml-5">
                <Col size="md-12">
                <SearchForm 
               search={this.state.search}
                // location={this.state.location}
                onChange={this.handleInputChange}
               onClick={this.handleFormSubmit}
                />
                
              </Col>
              
                
            </Row>
            </div> */}
            
            <div id="search" className="ml-5 shadow mt-5 mr-5">
            
            <JobSearch 
            search={this.searchJobs}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            />

            <SearchResult 
            results={this.state.results}
            saveJob={this.saveJob}
            />
           
            </div>

            </div>
        
         
        )
    }


}

export default JobApi;