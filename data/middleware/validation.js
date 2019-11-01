const projects = require("../helpers/projectModel");
const actions = require("../helpers/actionModel");

function validateId(req, res, next) {
  projects
    .get(req.params.id)
    .then(project => {
      if (project) {
        req.project = project;
        next();
      } else {
        res.status(404).json({ message: "invalid project id" });
      }
    })
    .catch(error => {
      res.status(500).json({
        "something went wrong quering db": error.message
      });
    });
}

function validateProject(req, res, next) {
  if (!req.body) {
    res.status(400).json({ message: "missing project data" });
  } else if (!req.body.name || !req.body.description) {
    res.status(400).json({ message: "missing required field" });
  } else {
    next();
  }
}

module.exports = {
  validateId,
  validateProject
};
