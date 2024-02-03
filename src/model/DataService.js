import axios from "axios";

export default class DataService {
    constructor() {
        axios.defaults.baseURL = "http://localhost:8000/api/";
      }
    
      async getData(uri, callback) {
        try {
          const response = await axios.get(uri);
          callback(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    
      async postData(uri, data) {
        try {
          console.log(data)
          const response = await axios.post(uri, data);
          console.log(response);
          location.reload(); 
        } catch (error) {
          console.log(error);
        }
      }
    
      async putData(uri, id, data) {
        try {
          const response = await axios.put(uri + "/" + id, data);
          console.log(response);
          location.reload(); 
        } catch (error) {
          console.log(error);
        }
      }
    
      async deleteData(uri, id) {
        try {
          const response = await axios.delete(uri + "/" + id);
          console.log(response);
          location.reload(); 
        } catch (error) {
          console.log(error);
        }
      }
    }