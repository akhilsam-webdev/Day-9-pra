const express = require("express");
const contactModel = require("./models/contact.model");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/contact", async (req, res) => {
  const { name, number, email } = req.body;

  const contact = await contactModel.create({
    name,
    number,
    email,
  });

  res.status(201).json({
    msg: "contact created suff",
    contact,
  });
});

app.get("/api/contact", async (req, res) => {
  const contacts = await contactModel.find();

  res.status(200).json({
    msg: "fetched all contacts",
    contacts,
  });
});

app.delete("/api/contact/:id", async (req, res) => {
  const id = req.params.id;

  const deleteContact = await contactModel.findByIdAndDelete(id);

  res.status(200).json({
    msg: "selected contact deleted suff",
    deleteContact,
  });
});

module.exports = app;
