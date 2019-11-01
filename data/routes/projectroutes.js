const express = require("express");

const {
  newProject,
  getProject,
  updateProject,
  deleteProject,
  getProjectActions
} = require("../projectdata/projects");

const { validateId, validateProject } = require("../middleware/validation");
const router = express.Router();

router.post("/projects", validateProject, newProject);
router.get("/:id/projects", validateId, getProject);
router.put("/:id/projects", updateProject);
router.delete("/:id/projects", deleteProject);
router.get("/:id/projectactions", getProjectActions);

module.exports = router;
