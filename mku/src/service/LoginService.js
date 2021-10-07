/* eslint-disable */
import axios from 'axios';

export default {
  findByUsernameAndPassword(ad) {
      var axi = axios.create({
      baseURL: `http://localhost:9090/`
      });
      let config = {
          headers: {
              "Content-Type": "application/json"
          }
      };
      return new Promise((resolve, reject) => {
          axi
          .post("/admin/user", ad, config)
          .then((response) => {
              resolve(response);
          }).catch((err) => {
              alert("login failed");
              reject(err);
          });
      });
    }
}