const express = require("express");

const {
  newAction,
  getActions,
  deleteAction,
  patchAction
} = require("../projectdata/actions");

const {
  validateId,
  validateAction,
  validateActionId
} = require("../middleware/validation");
const router = express.Router();

router.post("/actions", validateId, validateAction, newAction);
router.get("/allactions", getActions);
router.get("/:id", validateActionId, (req, res) => {
  res.status(200).json(req.action);
});
router.delete("/:id", validateActionId, deleteAction);
router.put("/:id", validateActionId, validateActionId, patchAction);
module.exports = router;
