// import components and react

import React, { Component } from "react";

import Container from "../components/Grid";

import JobSearch from "../components/JobSearch";

import SearchResult from "../components/SearchResult"

import PagesNavBar from "../components/PagesNavbar";

import API from "../utils/API"


// class for search page

class JobApi extends Component {

    // state obj for input fields on search page

    state = {

        keyword: "",
        location: "",        
        results: [],
        company: "",
        category: "",
            title: "",
            type: "",
            link: "",
            instruction: "",
            post_date: ""
    }

    // load this after search page loads

    componentDidMount() {

      API.search("web developer", "")
      .then(res => {
          let data = res.data.listings.listing;
          console.log(data)
        this.setState({ results: data })
                    
        })
      .catch(err => console.log(err));

    }

    search = (keyword, location) => {
        API.search(keyword, location)
        .then(res => {
            let data = res.data.listings.listing;
            console.log(data)
            this.setState({results: data})
            
            for(let i = 0; i < this.state.data.length; i++) {


             this.setState({
                company: data[i].company.name,
                category: data[i].category.name,
                title: data[i].title,
                type: data[i].type.name,
                link: data[i].apply_url,
                instruction: data[i].howto_apply,
                post_date: data[i].post_date
            })
            }

            console.log(this.state)

        })
    }

    saveJob = () => {
        API.saveJob({
            company: this.state.company,
            category: this.state.category,
            title: this.state.title,
            type: this.state.type,
            link: this.state.link,
            instruction: this.state.instruction,
            post_date: this.state.post_date

        })
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

        this.search(this.state.keyword, this.state.location)
    //   .then(res => this.setState({results: res}))
    //   .catch(err => console.log(err));

    }

   
    // renders the search page using the required components

    render () {
        return (        
            <div id="job-page">
                <PagesNavBar signOut={this.signOut}/>
               
            
            <div id="search" className="ml-5 mt-5 mr-5 mb-4">
            
            <JobSearch 
            keyword={this.state.keyword}
            location={this.state.location}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            />           
            </div>

            
            <div id="result" className="container">
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