const express = require("express");

const {
  newProject,
  getProject,
  updateProject,
  deleteProject,
  getProjectActions,
  getAllProjects
} = require("../projectdata/projects");

const {
  validateId,
  validateProject,
  validateActionId
} = require("../middleware/validation");
const router = express.Router();

router.post("/projects", validateProject, newProject);
router.get("/projects", getAllProjects);
router.get("/:id/project", validateId, getProject);
router.put("/:id/project", validateId, validateProject, updateProject);
router.delete("/:id/projects", validateId, deleteProject);
router.get("/:id/projectactions", validateId, getProjectActions);

module.exports = router;
