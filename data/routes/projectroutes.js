const express = require("express");

const {
  newProject,
  getProject,
  updateProject,
  deleteProject,
  getProjectActions
} = require("../projectdata/projects");

const {
  validateId,
  validateProject,
  validateAction,
  validateActionId
} = require("../middleware/validation");
const router = express.Router();

router.post("/projects", validateProject, newProject);
router.get("/:id/projects", validateId, getProject);
router.put("/:id/projects", validateId, validateProject, updateProject);
router.delete("/:id/projects", validateId, deleteProject);
router.get("/:id/projectactions", validateId, getProjectActions);

module.exports = router;
