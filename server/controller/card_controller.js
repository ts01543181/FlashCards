const router = require("express").Router();
const Card = require("../db/Card");
const User = require("../db/User");
const Collection = require("../db/Collection");

router.post("/addCard", (req, res) => {
    const data = req.body;
    const newCard = new Card({
        id: data.card.fronInfo + data.user._id,
        Collection: data.collection,
        frontInfo: data.card.fronInfo,
        backInfo: data.card.backInfo,
        comment: data.card.comment
    });
    Collection.findOneAndUpdate({ id: data.collection.id }, { $push: {card: newCard} });
    res.json(newCard);
});

router.post("/addCollection", (req, res) => {
    const data = req.body;
    const newCollection = new Collection({
        id: data.collection.title + data.user._id,
        title: data.collection.title
    });
    
    User.findOne({ email: data.user.email })
    .then(user => {
        if (user) {
            user.Collection.push(newCollection);
            user.save();
            return user;
        }
    })
    .then(async(user) => {
        const cols = [];
        user.Collection.forEach(col => {
            console.log(col.toObject())
            Collection.findOne({id:col.id}).then(c => {
                cols.push(c)
            });
        });
        const parsed = await Promise.all(cols);
        console.log(parsed)
        res.json(parsed);
    })
    .catch(e => {
        res.status(400).json({ message:"something went wrong!"});
    })
    
})

router.post("/editCard", (req, res) => {
    const newCard = req.body;
    Card.findOneAndUpdate({ id: newCard.id }, newCard, (err) => {
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