const express = require('express')
const app = express()
const mysql = require('mysql');
const sys = require('sys');
var messageArrayTemp = [];


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
	connection.query(`INSERT INTO sampletable (name) VALUE ('${message}')`, function(error, rows, fields){
		if(error){
			console.log("error in query");
		}
	}); 
}

function selectFromDb(callback)
{
	connection.query(`SELECT name FROM sampletable`, function(error, rows, fields){
		if (error) 
			callback(error,null);
		else{
			var lengthRows = rows.length;
			for (var i = lengthRows - 1; i >= 0; i--) {
				messageArrayTemp.push(rows[i].name);
			}
			console.log("ret 1 "+messageArrayTemp);
			callback(null,messageArrayTemp);
		}
	});
    // console.log("ret 2 "+messageArrayTemp);
    // return messageArrayTemp;
}

module.exports.addToDb = addToDb;
module.exports.selectFromDb = selectFromDb;