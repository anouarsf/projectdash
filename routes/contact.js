const Contact = require("../models/contacts");
const express = require("express");
const router = express.Router();

//get
router.get("/", (req, res) => {
  Contact.find()
    .then(contacts => res.send(contacts))
    .catch(err => console.log(err));
});

//delete
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Contact.findOneAndDelete({ _id: id })
    .then(contacts => res.send(contacts))
    .catch(err => console.log(err));
});
// update
router.put("/:id", (req, res) => {
  const { nom,prenom, telephone, email, role } = req.body;
  Contact.findOneAndUpdate(
    { _id: req.params },
    { $set: { nom, telephone, email, prenom, role } }
  )
    .then(contacts => res.send(contacts))
    .catch(err => console.log(err));
});
// add
router.post("/", (req, res) => {
  const { nom, telephone, email, prenom, role } = req.body;
  const newcontact = new Contact({
    nom,
    prenom,
    telephone,
    email,
    role
  });
  newcontact
    .save()
    .then(contacts => res.send(contacts))
    .catch(err => console.log(err));
});
module.exports = router;
