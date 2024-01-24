const connection = require("../Database");



module.exports={

    getAll: function (callback) {
        const sql = 'SELECT * FROM `home`'
        connection.query(sql, function (error, results, fields) {
          callback(error, results);
        });
      },
      getOne: function (name,callback) {
        const sql=  'SELECT * FROM `home` WHERE `title`=?'
        connection.query(sql,[name],function(error,results){
          callback(error, results);
        })
  
        },
        deleteproduct:(id,callback)=>{
          const sql='DELETE FROM home WHERE `id`=?';
          connection.query(sql,[id],function(err,results){
              callback(err,results)
          })
    }
  }