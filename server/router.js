const router = require("express").Router();
const user_auth = require("./controller/user_auth.js");
const card_controller = require("./controller/card_controller");

router.use("/user", user_auth);
router.use("/card", card_controller);

module.exports = router;