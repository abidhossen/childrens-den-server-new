const Classes = require('./classes.model');

module.exports.createClass = async function (classes) {
  return Classes.create(classes);
};
module.exports.deleteClassById = async function (classId) {
  return Classes.findByIdAndDelete(classId);
};
module.exports.getClasses = async function () {
  return Classes.find({});
};
