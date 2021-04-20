const bd = require('../configMysql')

module.exports = {
    getByIdProducto : (idProducto, callback) => {
        let sql = 'SELECT * FROM productos WHERE idProducto=?'
        bd.query(sql,idProducto, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data[0])
            else
                callback(null)
        })
    },
    getByNombreProducto : (nombre, callback) => {
        let sql = 'SELECT * FROM productos WHERE nombre=?'
        bd.query(sql,nombre, (err, data) => {
            if (err) throw err

            if (data.length>0)
                callback(data[0])
            else
                callback(null)
        })
    },
    getAllProductos : (callback) => {
        let sql = 'Select * from productos'
        bd.query(sql,(err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },
    insertProducto : (producto, okCallback, failCallback) => {
        let sql = 'INSERT INTO productos SET ?'
        bd.query(sql, producto, (err, data) => {
            if (err)
                return failCallback(err)
            else
                return okCallback(data)
        })
    },
    deleteProducto: (idProducto, callback) => {
        let sql = 'DELETE FROM productos WHERE idProducto = ?'
        bd.query(sql,idProducto, (err, data) => {
            try {
                if (err) throw new Err('Error en la eliminación')
                return callback(data)
            }
            catch (Err) {
                return callback(null)
            }
        })
    }
}