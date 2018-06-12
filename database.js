const express = require('express')
const app = express()
const mysql = require('mysql');

    var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sampleDB'
    });

    connection.connect(function(error){
    if(error){
        console.log("error");
    }
    else{
        console.log("connection successfull");
    }
    });


function addToDb(message)
{
    app.get('/',function (req, resp){
    connection.query("SELECT * FROM sampletable", function(error, rows, fields){
        if(error){
        console.log("error in query");
    }
    else{
        console.log("query successfull");
        console.log(rows[0].name);
        resp.send("hello"+rows[0].name);    
    }
    }); 
    });
}

module.exports.addToDb = addToDb;