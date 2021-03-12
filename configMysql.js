const mysql = require('mysql')

const config = {
    host: 'localhost',
    user: 'programacion.react',
    database: 'tienda',
    password: '123456'
}
const conn = mysql.createConnection(config);
conn.connect(function(err) {
    if (err) throw err;
    console.log('Conexión a la base de datos exitosa!');
});

module.exports = conn;
