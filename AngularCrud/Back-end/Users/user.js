const express = require('express')
const User = require('../Models/user')
const router = new express.Router();
router.post('/users', (request, response) => {
    
    //res.send("Save users");
   
    const user = new User(request.body)
    
    user.save().then(() => {
       
        response.status(200).json({
            message: 'Data save successfully.'
        });
        
    }).catch((e) => {
        res.status(400).send(e)
    })
})
router.get('/users', function (req, res) {
    console.log("get requeestr-->")
    User.find().then(data=>{
        res.send(data)
    }).catch(errors => console.log(errors))

});

  module.exports = router; 