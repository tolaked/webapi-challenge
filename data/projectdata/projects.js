const db = require("../helpers/projectModel");

function newProject(req, res) {
  const { name, description } = req.body;
  db.insert(req.body)
    .then(project => {
      res.status(200).json({
        success: true,
        project: { id: project.id, name, description }
      });
    })
    .catch(err =>
      res.status(500).json({
        success: false,
        error: "There was an error while saving the project to the database"
      })
    );
}

function getProject(req, res) {
  return res.status(200).json(req.project);
}

function updateProject(req, res) {
  const { id } = req.params;
  db.update(id, req.body)
    .then(project => {
      res.status(200).json({
        success: true,
        project
      });
    })
    .catch(err =>
      res.status(500).json({
        success: false,
        error: "There was an error while updating the project to the database"
      })
    );
}

async function deleteProject(req, res) {
  db.remove(req.project.id)
    .then(info => {
      res.status(200).json({ message: `removed ${info} project` });
    })
    .catch(error => {
      res.status(500).json({
        "error removing project": error.message
      });
    });
}

function getProjectActions(req, res) {
  db.getProjectActions(req.params.id)
    .then(action => {
      res.status(210).json(action);
    })
    .catch(error => {
      res.status(500).json({
        "error posting to project": error.message
      });
    });
}

module.exports = {
  newProject,
  getProject,
  updateProject,
  deleteProject,
  getProjectActions
};
