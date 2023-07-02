const classService = require('./classes.service');

module.exports.createClasses = async function (req, res) {
  const classes = req.body;
  const createdClass = await classService.createClass(classes);
  return res.status(200).json(createdClass);
};

module.exports.deleteClassById = async function (req, res) {
  const classId = req.params.id;
  const classes = await classService.deleteClassById(classId);
  return res.json(classes);
};

module.exports.getClasses = async function (req, res) {
  const classes = await classService.getClasses();
  return res.json(classes);
};
