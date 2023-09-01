const express = require("express");
const router = express.Router();
// const {addUser} = require("../controllers/addUser");
const User = require("../models/User")

// router.post("/", addUser);

router.get("/userform", (req, res) => {
    res.render("GENQ.pug")
})

router.post("/regUser", async (req, res) => {
    try{
        const user = new User(req.body);
        await user.save();
        res.redirect("/api/userform") //it gives the page we want it to redirect to.
        console.log(req.body);
    }
    catch(error){
        res.status(400).render("GENQ.pug");
        console.log(error);
    }

})




module.exports = router;