//
const db = require("../helpers/actionModel");

function newAction(req, res) {
  const { notes, description, project_id } = req.body;

  if ((!notes && !description && !description.length < 128, !project_id)) {
    res.status(400).json({
      message:
        "Please include a description with max 128 characters and/or notes"
    });
  } else {
    db.insert(req.body)
      .then(actions => {
        res.status(200).json(actions);
      })
      .catch(error => {
        console.log(error);
        res
          .status(500)
          .json({ error: "Please included notes description, and project ID" });
      });
  }
}

module.exports = { newAction };
