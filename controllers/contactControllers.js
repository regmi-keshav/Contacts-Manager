const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc Get Contacts
//@route GET /api/contacts/
//@access public

const getContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.find({});
  res.status(200).json(contact);
});
//@desc Get Contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found !");
  }
  res.status(200).json(contact);
});

//@desc Create Contacts
//@route POST /api/contacts/
//@access public
const createContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.create(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  res.status(201).json(contact);
});

//@desc Update Contacts
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found !");
  }
  res.status(200).json(contact);
});

//@desc Delete Contacts
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found !");
  }
  res.status(200).json({ message: `Delete Contacts ${req.params.id}` });
});

module.exports = {
  createContacts,
  getContact,
  getContacts,
  updateContact,
  deleteContact,
};
