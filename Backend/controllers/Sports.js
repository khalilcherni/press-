

const sports=require('../model/Sports')



module.exports = {
   
    getAllsports: function(req, res) {
    sports.getAll(function(err,results){
        if(err){
            res.status(500).send(err)
        }
else{
    res.json(results)
}
    })
    },
    addsports: function(req, res) {
        var x=req.body
        sports.add(x,function(err,results){
           if(err){
            res.status(500).send(err)
           
           }
           else{
            res.json(results)
           }
        })
        },
   
        getOnesports: function(req, res) {
        var w=req.params.title
        sports.getOne(w,(err,results)=>{
            if(err)
                res.status(500).send(err)
            
        
            else
                res.status(201).json(results)
            
        })
    },
    update:(req, res) => {
        var x = req.body
        var y = req.params.id
      
        sports.updateproduct(x, y, function (err, results) {
          if (err) {
            res.status(500).send(err)
          } else {
            res.json(results)
          }
        });
        },
        
        fassakh:(req, res) => {
            var id= req.params.id
          
            sports.deleteproduct( id, function (err, results) {
              if (err) {
                res.status(500).send(err)
              } else {
                res.json(results)
              }
            });
            },
}