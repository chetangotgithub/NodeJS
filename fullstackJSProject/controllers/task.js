const updateTask = require("../src/updateTask");
const getTaskById = require("../src/getTaskById");
const getAllTasks = require("../src/getAllTasks");
const addTask = require("../src/addTask");
const deleteTask = require("../src/deleteTask");
const toDto = (task) => {
  const { id, name, description, status, createdAt, updatedAt } = task;

  return {
    id,
    name,
    description,
    status,
    createdAt,
    updatedAt,
  };
};

const addTaskAPI = async (req, res) => {
  const task = req.body;
  const result = await addTask(task);

  if (result.hasOwnProperty("error")) {
    res.status(400).json({ success: false, message: result });
  }
  res.status(200).json({ sucess: true, message: result });
};

const updateTaksAPI = async (req, res) => {
  const result = await updateTask(req.params.id, req.body);
  if (result.hasOwnProperty("error")) {
    res.status(400).json({ sucess: false, message: result.error });
  }

  res.status(200).json({ success: true, message: toDto(result) });
};

const getTaskByIdAPI = async (req, res) => {
  const result = await getTaskById(req.params.id);
  if (result.hasOwnProperty("error")) {
    res.status(400).json({ sucess: false, message: result.error });
  }

  res.status(200).json({ success: true, message: toDto(result) });
};

const getTaksAPI = async (req, res) => {
  const result = await getAllTasks();
  if (result.hasOwnProperty("error")) {
    res.status(400).json({ sucess: false, message: result.error });
  }

  res.status(200).json({ success: true, message: result });
};

const deleteTaksAPI = async (req, res) => {
  const result = await deleteTask(req.params.id);
  if (result.hasOwnProperty("error")) {
    res.status(400).json({ sucess: false, message: result.error });
  }

  res.status(200).json({ success: true, message: result });
};
module.exports = {
  updateTaksAPI,
  getTaskByIdAPI,
  getTaksAPI,
  addTaskAPI,
  deleteTaksAPI,
};
