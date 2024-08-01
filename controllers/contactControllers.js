const express = require("express");

//@desc Get Contacts
//@route GET /api/contacts/
//@access public

const getContacts = (req, res) => {
  res.status(200).json({ message: "Get Contacts" });
};
//@desc Get Contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
  res.status(200).json({ message: `Get Contacts ${req.params.id}` });
};

//@desc Create Contacts
//@route POST /api/contacts/
//@access public
const createContacts = (req, res) => {
  res.status(201).json({ message: "Create Contacts" });
};

//@desc Update Contacts
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update Contacts ${req.params.id}` });
};

//@desc Delete Contacts
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete Contacts ${req.params.id}` });
};

module.exports = {
  createContacts,
  getContact,
  getContacts,
  updateContact,
  deleteContact,
};
