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
    },
    deleteStudent: function(id){
        var delstu = axios.create({
            baseURL: "http://localhost:9090",
        });
        return new Promise((resolve, reject) => {
            delstu({
                method: 'get',
                url: '/student/delete/' + id,
            }).then((response) => {
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });
    },
    getStudent: function(id){
        var ax = axios.create({
            baseURL: "http://localhost:9090",
        });
        return new Promise((resolve, reject) => {
            ax({
                method: 'get',
                url: '/student/get/' + id,
            }).then((response) => {
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });
    },
    updateStudent: function(student){
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
                .post("/student/update", student, config)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });
<<<<<<< HEAD
    },
    putRequest: function(request){
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
                .post("/request/insert", request, config)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });
=======
>>>>>>> d751150c819c972f2fd3d961ce5b8c9c3d5eede1
    }
}