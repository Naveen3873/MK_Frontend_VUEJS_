/* eslint-disable */
import axios from 'axios';

export default {
    putFaculty: function(faculty){
        var facinsert = axios.create({
            baseURL: "http://localhost:9090",
        });
        let config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        return new Promise((resolve, reject) => {
            facinsert
                .post("/sacscollege/insert", faculty, config)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
}