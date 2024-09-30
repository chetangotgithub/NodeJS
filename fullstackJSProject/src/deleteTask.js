const taskModel = require("../schema/task");

const deleteTask = async (id) => {
  const result = await taskModel.findByIdAndDelete(id);
  return result;
};

module.exports = deleteTask;
