const connection = require("../Database");



module.exports={

    getAll: function (callback) {
        const sql = 'SELECT * FROM `sports`'
        connection.query(sql, function (error, results, fields) {
          callback(error, results);
        });
      },
      getOne: function (name,callback) {
        const sql=  'SELECT * FROM `sports` WHERE `title`=?'
        connection.query(sql,[name],function(error,results){
          callback(error, results);
        })
  
        },
        // a function that can be used to add a user to the users table.
        add: function (x,callback) {
          const sql='INSERT INTO `sports` SET ?'
          connection.query(sql,x,function(error,results){
            callback(error,results)
          })
        },
         updateproduct : (params, id, callback) => {
            const sql = 'UPDATE sports SET `title`=?, `description`=?, `image`=? WHERE `id`=?';
            connection.query(sql, [params.title, params.description, params.image, id], function(err, results) {
              callback(err, results);
            });
          },

        deleteproduct:(id,callback)=>{
            const sql='DELETE FROM sports WHERE `id`=?';
            connection.query(sql,[id],function(err,results){
                callback(err,results)
            })

}}