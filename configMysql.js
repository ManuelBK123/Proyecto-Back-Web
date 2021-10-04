const mysql = require('mysql')

const config = {
    /*
     host: 'base-datos-manuel-universidad.cgutotuqauwy.us-east-1.rds.amazonaws.com',
    user: 'admin',
     */

    host: 'localhost',
    user: 'programacion.react',
    database: 'tienda',
    password: 'Percucionista13.'
}
const conn = mysql.createConnection(config);
conn.connect(function(err) {
    if (err) throw err;
    console.log('Conexión a la base de datos exitosa!');
});

module.exports = conn;
