const connection = require("../Database");



module.exports={

    getAll: function (callback) {
        const sql = 'SELECT * FROM `politics`'
        connection.query(sql, function (error, results, fields) {
          callback(error, results);
        });
      },
      getOne: function (name,callback) {
        const sql=  'SELECT * FROM `politics` WHERE `title`=?'
        connection.query(sql,[name],function(error,results){
          callback(error, results);
        })
  
        },
        // a function that can be used to add a user to the users table.
        add: function (x,callback) {
          const sql='INSERT INTO `politics` SET ?'
          connection.query(sql,x,function(error,results){
            callback(error,results)
          })
        },
         updateproduct : (params, id, callback) => {
            const sql = 'UPDATE politics SET `title`=?, `description`=?, `image`=? WHERE `id`=?';
            connection.query(sql, [params.title, params.description, params.image, id], function(err, results) {
              callback(err, results);
            });
          },

        deleteproduct:(id,callback)=>{
            const sql='DELETE FROM politics WHERE `id`=?';
            connection.query(sql,[id],function(err,results){
                callback(err,results)
            })

}}