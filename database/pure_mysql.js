var mysql = require('mysql');


const dbName = 'howtoask';
const tableName = 'users';

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

let connection2 = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: dbName
});

connection.connect((err1, success1) => {
  if (!err1) {
    var sqlQuery = `CREATE DATABASE IF NOT EXISTS ${dbName}`;
    connection.query(sqlQuery, (err2, success2) => {
      if (!err2) {
        console.log(`Database '${dbName}' successfully created`);

        connection2.connect(function (err) {
          if (err) {
            return console.error('error: ' + err.message);
          }

          let createTable = `CREATE TABLE IF NOT EXISTS ${tableName} (
                                  id INT PRIMARY KEY auto_increment,
                                  userName VARCHAR(255) NOT NULL,
                                  password VARCHAR(255) NOT NULL,
                                  score INT NOT NULL DEFAULT 0,
                                  progress INT NOT NULL DEFAULT 0,
                                  tutorial BOOLEAN NOT NULL DEFAULT TRUE
                              );`;

          connection2.query(createTable, function (err, results, fields) {
            if (err) {
              console.log(err.message);
            }
          });

          connection2.end(function (err) {
            if (err) {
              return console.log(err.message);
            }
          });
        });

      } else {
        console.log('err 2: ', err2)
      }
    });
  } else {
    console.log("err 1: ", err1);
  }
});


module.exports = connection2;