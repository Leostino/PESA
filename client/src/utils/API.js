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

  // search method for backend job api

  search: function(jobObj) {
    return axios.post("/api/jobs", jobObj)
  }
  
};