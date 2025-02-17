const express = require("express");
const router = express.Router();
const {
  createContacts,
  getContact,
  getContacts,
  updateContact,
  deleteContact,
} = require("../controllers/contactControllers");
const verifyToken = require("../middleware/verifyToken");

router.use(verifyToken);
router.route("/").get(getContacts).post(createContacts);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
