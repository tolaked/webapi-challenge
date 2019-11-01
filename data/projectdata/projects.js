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
  const id = req.params.id;
  db.get(id)
    .then(project => {
      res.status(200).json({
        success: true,
        project
      });
    })
    .catch(err =>
      res.status(500).json({
        success: false,
        error: "There was an error while retrieving  the data from the database"
      })
    );
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
  try {
    const count = await db.remove(req.params.id);
    if (count > 0) {
      return res.status(204).send();
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

function getProjectActions(req, res) {
  const id = req.params.id;
  db.getProjectActions(id)
    .then(project => {
      res.status(200).json({
        success: true,
        project
      });
    })
    .catch(err =>
      res.status(500).json({
        success: false,
        error: "There was an error while retrieving  the data from the database"
      })
    );
}

module.exports = {
  newProject,
  getProject,
  updateProject,
  deleteProject,
  getProjectActions
};
