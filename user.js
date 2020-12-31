const express = require('express')
const router = express.Router()

const {spawn} = require('child_process');


router.post('/result', (req,res)=>{

    console.log(req.body.radius)
    console.log(req.body.texture)
    console.log(req.body.perimeter)
    console.log(req.body.area)
    console.log(req.body.smoothness)
    let dt = 0;

const pt = spawn('python',["final.py", req.body.radius, req.body.texture , req.body.perimeter, req.body.area, req.body.smoothness]);

  pt.stdout.on('data',  (data)  => {
      console.log(`${data}`)
     return res.status(200).send({set :data.toString()})
  })
  
console.log(dt,"12")
//  console.log("123")
 //return res.json({dt})

 })

module.exports = router