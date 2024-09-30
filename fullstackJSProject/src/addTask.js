const taskModel = require("../schema/task");

const addTask = async (body) => {
  const newTask = await new taskModel({
    status: body.status ?? "new",
    name: body.name,
    description: body.description ?? "",
    createdAt: Date.now(),
  });

  const result = await newTask.save();
  console.log("Added Task :", result);
  return result;
};

module.exports = addTask;
