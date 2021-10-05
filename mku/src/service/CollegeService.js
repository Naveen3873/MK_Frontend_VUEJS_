/* eslint-disable */
import axios from 'axios';
export default{
    putCollege: function(college){
        var clginsert = axios.create({
            baseURL: "http://localhost:9090",
        });
        let config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        return new Promise((resolve, reject) => {
            clginsert
                .post("/college/insert", college, config)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    getAllColleges: function(){
        var allclg = axios.create({
            baseURL: "http://localhost:9090",
        });
        return new Promise((resolve, reject) => {
            allclg({
                method: 'get',
                url: '/college/getAll',
            }).then((response) => {
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });

    }
}