/* *******************************************************************************************
* Autor: V. Demir, 1/2024
* *******************************************************************************************
* Beschreibung:
* Express-Server, um CRUD-Operationen vom Browser entgegen zunehmen an der DB durchzuführen
* *******************************************************************************************
* Hinweise
* npm install node
* npm init -y
* npm install mysql
* npm install body-parser
* npm install express
** ***************************************************************************************** */
// Referenz: www.npmjs.com/package/mysql

const mysql = require("mysql");
const express = require('express');
var app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = 3004;

app.use(bodyParser.json());

const config = {
    host: 'localhost',
    database: 'immobilienverwaltung',
    user: "appAdmin",
    password: 'appAdminPW'
}

const connection = mysql.createConnection(config)

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected to MySQL database:', connection.config.database);
    /*
     var sqlstmt = 'SELECT * from user';
     // Das SQL-Statement wird vorbereitetet
     connection.query(sqlstmt, function (err, result) {
         if (err) throw err;
         // console.log('Data from MySQL:');
         //console.log(result); //
     });
     */
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/benutzer', (req, res) => {
    connection.query('SELECT * FROM ' +
        'benutzer', [req.params.id], (err, rows, fields) => {
        if (!err) {
            console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
        }

    })
});

app.get('/raeume', (req, res) => {
    connection.query('SELECT * FROM ' +
        'raeume', [req.params.id], (err, rows, fields) => {
        if (!err) {
            console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
        }

    })
});

app.get('/Reservationen', (req, res) => {
    connection.query('SELECT * FROM ' +
        'Reservationen', [req.params.id], (err, rows, fields) => {
        if (!err) {
            console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
        }

    })
});

app.get('/ressourcentyp', (req, res) => {
    connection.query('SELECT * FROM ' +
        'ressourcentyp', [req.params.id], (err, rows, fields) => {
        if (!err) {
            console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
        }

    })
});

app.get('/standort', (req, res) => {
    connection.query('SELECT * FROM ' +
        'standort', [req.params.id], (err, rows, fields) => {
        if (!err) {
            console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
        }

    })
});



app.get('/benutzer/:id', (req, res) => {
    connection.query('SELECT * FROM benutzer WHERE BenutzerID = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
            res.status(500).send('Interner Serverfehler');
        }
    });
});

app.get('/benutzer/:id', (req, res) => {
    connection.query('SELECT * FROM benutzer WHERE BenutzerID = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
            res.status(500).send('Interner Serverfehler');
        }
    });
});



app.get('/raeume/:id', (req, res) => {
    connection.query('SELECT * FROM raeume WHERE RaumID = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
            res.status(500).send('Interner Serverfehler');
        }
    });
});



app.get('/reservationen/:id', (req, res) => {
    connection.query('SELECT * FROM reservationen WHERE ReservierungsID = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
            res.status(500).send('Interner Serverfehler');
        }
    });
});



app.delete('/user/:id', (req, res) => {
    connection.query(' DELETE FROM user WHERE id = ? ', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send('Delete operation was successful')
            // res.send(rows)
        } else {
            console.log(err);
        }

    })
});

app.delete('/reservationen', (req, res) => {
    connection.query(' DELETE FROM reservationen ', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send('Delete operation was successful')
            // res.send(rows)
        } else {
            console.log(err);
        }

    })
});

app.delete('/reservationen/:id', (req, res) => {
    connection.query(' DELETE FROM reservationen WHERE ReservierungsID = ? ', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send('Delete operation was successful')
            // res.send(rows)
        } else {
            console.log(err);
        }

    })
});

app.delete('/benutzer', (req, res) => {
    connection.query(' DELETE FROM benutzer ', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send('Delete operation was successful')
            // res.send(rows)
        } else {
            console.log(err);
        }

    })
});

app.delete('/benutzer/:id', (req, res) => {
    connection.query(' DELETE FROM benutzer WHERE BenutzerID = ? ' , [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send('Delete operation was successful')
            // res.send(rows)
        } else {
            console.log(err);
        }

    })
});


