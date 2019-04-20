const router = require("express").Router();
const User = require("../db/User");


router.post("/signup", (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({
        email,
        password
    });
    newUser.save()
    .then(user => {
        res.json({user});
    })
    .catch(e => {
        res.status(400).json({ message: "server issue" });
    });
});


router.get("/login", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email })
    .then(user => {
        if (!user || user.password !== password) {
            res.status(400).json({ message: "invalid email/password!"})
        } else {
            res.json(user.collection)
        }
    })
});

module.exports = router;