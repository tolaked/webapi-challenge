//
const db = require("../helpers/actionModel");

function newAction(req, res) {
  const postInfo = { ...req.body, project_id: req.params.id };

  db.insert(postInfo)
    .then(action => {
      res.status(210).json(action);
    })
    .catch(error => {
      res.status(500).json({
        "error posting to project": error.message
      });
    });
}

function getAction(req, res) {
  db.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res.status(500).json({
        "Error retrieving actions": error.message
      });
    });
}

module.exports = { newAction, getAction };
