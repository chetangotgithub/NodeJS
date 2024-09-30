const taskModel = require("../schema/task");

const getTaskById = async (id) => {
  if (!id) {
    return { error: "Invalid Id" };
  }

  const task = await taskModel.findById(id);
  return task;
};

module.exports = getTaskById;
