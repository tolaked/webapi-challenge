const express = require("express");

const { newAction } = require("../projectdata/actions");

const {
  validateId,
  validateProject,
  validateAction,
  validateActionId
} = require("../middleware/validation");
const router = express.Router();

router.post("/:id/actions", validateId, validateAction, newAction);
router.get("/:id", validateActionId, getAction);
module.exports = router;
