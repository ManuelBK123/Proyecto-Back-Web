const bd =require('../configMysql')

module.exports = {

    findByUsername : (username, callback) => {
        let sql = 'SELECT * FROM users WHERE userName=?'
        bd.query(sql,username, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data[0])
            else
                callback(null)
        })
    },
    getAllUsers : (callback) => {
        let sql = 'Select * from users'
        bd.query(sql,(err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },
    insertUser : (user, callback) => {
        let sql = 'INSERT INTO users SET ?'
        bd.query(sql,user, (err, data) => {
            if (err)
                return callback(null)
            else
                return  callback(data)
        })
    },
    deleteUser: (idUser, callback) => {
        let sql = 'DELETE FROM users WHERE idUser = ?'
        bd.query(sql,idUser, (err, data) => {
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