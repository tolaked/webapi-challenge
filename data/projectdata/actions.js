//
const db = require("../helpers/actionModel");

function newAction(req, res) {
  const { projectid, name, description } = req.body;
  console.log(req.body);

  db.insert(req.body)
    .then(action => {
      res.status(210).json(action);
    })
    .catch(error => {
      res.status(500).json({
        "error posting to project": error.message
      });
    });
}

function getActions(req, res) {
  db.get()
    .then(actions => {
      console.log(actions);
      res.status(200).json(actions);
    })
    .catch(error => {
      res.status(500).json({
        "Error retrieving actions": error.message
      });
    });
}

function deleteAction(req, res) {
  db.remove(req.action.id)
    .then(num => {
      res.status(200).json({ message: `removed ${num} action` });
    })
    .catch(error => {
      res.status(500).json({
        "error removing action": error.message
      });
    });
}

function patchAction(req, res) {
  db.update(req.action.id, req.body)
    .then(editedProject => {
      res.status(200).json(editedProject);
    })
    .catch(error => {
      res.status(500).json({
        "error editing action": error.message
      });
    });
}

module.exports = { newAction, getActions, deleteAction, patchAction };
