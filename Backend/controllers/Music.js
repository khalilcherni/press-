

const music=require('../model/Music')



module.exports = {
   
    getAllmusic: function(req, res) {
    music.getAll(function(err,results){
        if(err){
            res.status(500).send(err)
        }
else{
    res.json(results)
}
    })
    },
    addmusic: function(req, res) {
        var x=req.body
        music.add(x,function(err,results){
           if(err){
            res.status(500).send(err)
           
           }
           else{
            res.json(results)
           }
        })
        },
   
        getOnemusic: function(req, res) {
        var w=req.params.title
        music.getOne(w,(err,results)=>{
            if(err)
                res.status(500).send(err)
            
        
            else
                res.status(201).json(results)
            
        })
    },
    updateMu:(req, res) => {
        var x = req.body
        var y = req.params.id
      
        music.updateproduct(x, y, function (err, results) {
          if (err) {
            res.status(500).send(err)
          } else {
            res.json(results)
          }
        });
        },
        
        fassakhm:(req, res) => {
            var id= req.params.id
          
            music.deleteproduct( id, function (err, results) {
              if (err) {
                res.status(500).send(err)
              } else {
                res.json(results)
              }
            });
            },
}