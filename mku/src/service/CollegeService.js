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
    },
    deleteCollege: function(id){
        var delclg = axios.create({
            baseURL: "http://localhost:9090",
        });
        return new Promise((resolve, reject) => {
            delclg({
                method: 'get',
                url: '/college/delete/' + id,
            }).then((response) => {
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });
    },
    getCollege: function(id){
        var ax = axios.create({
            baseURL: "http://localhost:9090",
        });
        return new Promise((resolve, reject) => {
            ax({
                method: 'get',
                url: '/college/get/' + id,
            }).then((response) => {
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });
    },
    updateCollege: function(college){
        var ax = axios.create({
            baseURL: "http://localhost:9090",
        });
        let config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        return new Promise((resolve, reject) => {
            ax
                .post("/college/update", college, config)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
}