// import axios

import axios from "axios";

export default {

  // Gets all jobs

  getJobs: function() {
    return axios.get("/api/pesa");
  },

  // Gets job with the given id

  getJob: function(id) {
    return axios.get("/api/pesa/"+id);
  },

  // Deletes job with the given id from database

  deleteJob: function(id) {
    return axios.delete("/api/pesa/"+id);
  },

  // Saves job to the database

  saveJob: function(jobData) {
    return axios.post("/pesa", jobData);
  },

  // Edits job with the given id saved in database

  editJob: function(id, jobData) {
    return axios.put("/api/pesa/"+id, jobData)
  },

  // query job api for jobs

  search: function(search) {

    const api_key = "72423555f215d5d8c1fbe985a57e35bd";

    const endPoint = "https://cors-anywhere.herokuapp.com/https://authenticjobs.com/api/?api_key="+ api_key +"&method=aj.jobs.search&keywords="+ search +"&perpage=3&format=json"

    return axios.get(endPoint)
  }
  
};