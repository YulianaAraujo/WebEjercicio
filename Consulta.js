const mysql = require('mysql')
const express = require('express')
const app = express()


const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'gestion'
})

conexion.connect((error)=>{
    if(error) throw error
    console.log('¡Soy una Conexión y soy muy exitosa!')
})

app.get('/', function(req, resp) {
    conexion.query('SELECT * FROM users', function(error, rows){
        if(!!error){
            console.log('Conexión fallida')
        }
        else {
            console.log('Consulta de la información de la tabla:')
            console.log(rows)
            resp.json(rows)
            conexion.end()
        }
});

});

app.listen(1337)
