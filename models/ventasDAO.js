const bd = require('../configMysql')

module.exports = {
    getByIdVenta : (idVenta, callback) => {
        let sql = 'SELECT * FROM ventas WHERE idVenta=?'
        bd.query(sql,idVenta, (err, data) => {
            if (err) throw err

            if (data.length>0)
                callback(data[0])
            else
                callback(null)
        })
    },
    getAllVentas : (callback) => {
        let sql = 'Select * from ventas'
        bd.query(sql,(err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },
    insertVenta : (venta, okCallback, failCallback) => {
        let sql = 'INSERT INTO ventas SET ?'
        bd.query(sql, venta, (err, data) => {
            if (err)
                return failCallback(err)
            else
                return okCallback(data)
        })
    },
    deleteVenta: (idVenta, callback) => {
        let sql = 'DELETE FROM ventas WHERE idVenta = ?'
        bd.query(sql,idVenta, (err, data) => {
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