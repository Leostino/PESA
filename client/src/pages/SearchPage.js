// import components and react

import React, { Component } from "react";

import FormFill from "../components/FormFill"

import PagesNavBar from "../components/PagesNavbar";

import API from "../utils/API"


// class for search page

class SearchPage extends Component {

    // state obj for input fields on search page

    state = {

        search: "",
        company: "",
        location: "",
        position: "",
        description: "",
        date: "",
        documents: "",
        results: []
    }

    // load this after search page loads

    componentDidMount() {

    //   API.search("web developer, boston")
    //   .then(res => this.setState({ results: res.data.message }))
    //   .catch(err => console.log(err));

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
            <div id="search-page">
                
                <PagesNavBar signOut={this.signOut}/>
            
                <div id="form-fill" className="ml-5 shadow mt-5 mr-5">
            
                   <FormFill 
                     company={this.state.company}
                     location={this.state.location}            
                     position={this.state.position}
                     description={this.state.description}
                     date={this.state.date}
                     documents={this.state.documents}
                     handleInputChange={this.handleInputChange}
                     handleFormSubmit={this.handleFormSubmit}
                    />
           
                </div>

            </div>
        
         
        )
    }


}

export default SearchPage;