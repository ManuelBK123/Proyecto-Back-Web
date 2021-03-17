const bd = require('../configMysql')

module.exports = {
    getByIdProveedor : (idProveedor, callback) => {
        let sql = 'SELECT * FROM proveedores WHERE idProveedor=?'
        bd.query(sql,idProveedor, (err, data) => {
            if (err) throw err

            if (data.length>0)
                callback(data[0])
            else
                callback(null)
        })
    },
    getAllProveedores : (callback) => {
        let sql = 'Select * from proveedores'
        bd.query(sql,(err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },
    insertProveedor : (proveedor, okCallback, failCallback) => {
        let sql = 'INSERT INTO proveedores SET ?'
        bd.query(sql, proveedor, (err, data) => {
            if (err)
                return failCallback(err)
            else
                return okCallback(data)
        })
    },
    deleteProveedor: (idProveedor, callback) => {
        let sql = 'DELETE FROM proveedores WHERE idProveedor = ?'
        bd.query(sql,idProveedor, (err, data) => {
            console.log("err =>",err)
            console.log("data =>",data)
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