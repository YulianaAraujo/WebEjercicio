const mysql = require('mysql')

const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'gestion'
})

conexion.connect((error)=>{
    if(error) throw error
    console.log('Soy una Conexion y soy muy exitosa!!!')
})

conexion.query('SELECT * FROM users',(error, rows)=>{
    if(error) throw error
    console.log('hable con la tabla y me dijo que tenia esta info')
    console.log(rows)
})

conexion.end()
