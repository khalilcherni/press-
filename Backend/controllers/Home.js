

const home =require('../model/Home')

module.exports = {
   
    getAllnews: function(req, res) {
    home.getAll(function(err,results){
        if(err){
            res.status(500).send(err)
        }
else{
    res.json(results)
}
    })
    },
    getOnenews: function(req, res) {
        var w=req.params.title
        home.getOne(w,(err,results)=>{
            if(err)
                res.status(500).send(err)
            
        
            else
                res.status(201).json(results)
            
        })
    },
    fassakh:(req, res) => {
        var id= req.params.id
      
        home.deleteproduct( id, function (err, results) {
          if (err) {
            res.status(500).send(err)
          } else {
            res.json(results)
          }
        });
        },
        addHome: function(req, res) {
            var x=req.body
            home.add(x,function(err,results){
               if(err){
                res.status(500).send(err)
               
               }
               else{
                res.json(results)
               }
            })
            },
        }