const router = require("express").Router();
const Card = require("../db/Card");
const User = require("../db/User");
const Collection = require("../db/Collection");

router.post("/addCard", (req, res) => {
    const data = req.body;
    const newCard = new Card({
        id: data.card.fronInfo + data.user.id,
        frontInfo: data.card.fronInfo,
        backInfo: data.card.backInfo,
        comment: data.card.comment
    });
    Collection.findOneAndUpdate({ id: data.collection.id }, { $push: {card: newCard} });
});

router.post("/addCollection", (req, res) => {
    const data = req.body;
    const newCollection = new Collection(data.collection);
    User.findOneAndUpdate({ id: data.user.id }, { $push: {collection: newCollection }});
})

router.post("/editCard", (req, res) => {
    const newCard = req.body;
    Card.findOneAndUpdate({ id: newCard.id}, newCard, (err) => {
        if (err) {
            res.status(400).json({ message: "something went wrong!"});
        } else {
            res.json({ message: "success" });
        }
    })
});

router.delete("/deleteCard", (req, res) => {
    const data = req.body;
    Card.findOne({ id: data.card.id}, (err, card) => {
        card.remove()
    })
    .then(() => {
        Collection.findOne({ id: data.collection.id}, (err, collection) => {
            res.json(collection);
        })
    });
});

module.exports = router;