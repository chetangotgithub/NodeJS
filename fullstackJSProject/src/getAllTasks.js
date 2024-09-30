const taskModel = require("../schema/task");

const getAllTasks = async (id) => {
  const task = await taskModel.find({});
  return task;
};

module.exports = getAllTasks;
