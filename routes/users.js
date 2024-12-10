const express = require('express')
const router=express.Router()

const userController=require("../controller/userController");
const validate = require("../middll/validate");


/*router.get("/add/:username/:email/:cin" ,(req, res)=> {

    try{
        new User({
            username: req.params.username,
            email: req.params.email,
            cin: req.params.cin
        }).save();
        res.status(200).send("good added");

    }catch(err) {
        consolelog(err);
    }
});*/

router.post("/add" , validate,userController.add);
router.get("/showuser" ,userController.showuser);
router.get("/showByid/:id",userController.showByid );
router.get("/showByname/:username" ,userController.showByname);
router.get("/showBynameUsers/:username" ,userController.showBynameUsers);
router.put("/updateuser/:id" ,userController.update);
router.delete("/delete/:id" ,userController.deleteUsers);
router.get("/chat",(req,res) =>{
    res.render("chat")
})

module.exports = router;