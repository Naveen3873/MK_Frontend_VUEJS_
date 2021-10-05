/* eslint-disable */
import axios from 'axios';
export default{
    putStudent: function(student){
        var stdinsert = axios.create({
            baseURL: "http://localhost:9090",
        });
        let config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        return new Promise((resolve, reject) => {
            stdinsert
                .post("/student/insert", student, config)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    getAllStudents: function(){
        var allstu = axios.create({
            baseURL: "http://localhost:9090",
        });
        return new Promise((resolve, reject) => {
            allstu({
                method: 'get',
                url: '/student/getAll',
            }).then((response) => {
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });
    }
}