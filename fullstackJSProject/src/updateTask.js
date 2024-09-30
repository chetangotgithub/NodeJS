const taskModel = require("../schema/task");

const updateTask = async (id, { name, description, status }) => {
  const validTasks = ["new", "completed", "cancelled", "active"];
  if (!id) {
    return { error: "Id is Invalid / Empty" };
  } else if (!validTasks.includes(status)) {
    return { error: "Invalid status" };
  } else {
    const task = await taskModel.findById(id);
    if (!task) {
      return { error: "task not found" };
    }

    task.name = name ?? task.name;
    task.description = description ?? task.description;
    task.status = status ?? task.status;
    task.updatedAt = Date.now();
    console.log(task);

    try {
      const saved = await task.save();
      return saved;
    } catch (error) {
      return { error: "Error Occured", error };
    }
  }
};

module.exports = updateTask;
