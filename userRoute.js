const express = require("express");

const router = express.Router();

router.get("*",(req,res)=>{
    const pathname = req.path;
    console.log(pathname);

    console.log(`Requsted pathname :  ${pathname}`);

    res.send(`<h1> you Requsted : ${pathname} </h1>`)
})

module.exports = router;