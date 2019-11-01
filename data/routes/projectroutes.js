const express = require("express");

const {
  newProject,
  getProject,
  updateProject,
  deleteProject,
  getProjectActions
} = require("../projectdata/projects");
const router = express.Router();

router.post("/projects", newProject);
router.get("/:id/projects", getProject);
router.put("/:id/projects", updateProject);
router.delete("/:id/projects", deleteProject);
router.get("/:id/projectactions", getProjectActions);

module.exports = router;
