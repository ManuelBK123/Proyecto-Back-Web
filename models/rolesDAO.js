const bd = require('../configMysql')

module.exports = {
    getByRolName : (idRol, callback) => {
        let sql = 'SELECT * FROM roles WHERE idRol=?'
        bd.query(sql,idRol, (err, data) => {
            if (err) throw err

            if (data.length>0)
                callback(data[0])
            else
                callback(null)
        })
    },
    getAllRoles : (callback) => {
        let sql = 'Select * from roles'
        bd.query(sql,(err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },
    insertRol : (rol, okCallback, failCallback) => {
        let sql = 'INSERT INTO roles SET ?'
        bd.query(sql, rol, (err, data) => {
            if (err)
                return failCallback(err)
            else
                return okCallback(data)
        })
    },
    deleteRol: (idRol, callback) => {
        let sql = 'DELETE FROM roles WHERE idRol = ?'
        bd.query(sql,idRol, (err, data) => {
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