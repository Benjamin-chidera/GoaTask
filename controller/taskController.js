const Task = require("../model/task");

const getAllTask = async (req, res) => {
  // getAll
  try {
    const task = await Task.find();
    res.status(200).json({ success: true, NumOfTask: task.length, task });
  } catch (error) {
    res.status(404).json({ success: false });
  }
};

const getATask = async (req, res) => {
  const { taskId } = req.params;

  try {
    const task = await Task.findById({ _id: taskId });

    res.status(200).json({ success: true, task });
  } catch (error) {
    res.status(404).json({ success: false, message: "No task found" });
  }
};

const createTask = async (req, res) => {
  const { title } = req.body;

  try {
    if (!title) {
      res.status(404).json({ message: "please fill all inputs" });
    }
    const task = await Task.create(req.body);
    res.status(201).json({ success: true, task });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not added" });
  }
};

const updateTask = async (req, res) => {
  const { taskId } = req.params;

  try {
    const task = await Task.findByIdAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ success: true, task });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not updated" });
  }
};

const deleteTask = async (req, res) => {
  const { taskId } = req.params;
  try {
    const task = await Task.findByIdAndDelete({ _id: taskId });
    res.status(200).json({ success: true, task });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not updated" });
  }
};

module.exports = { getAllTask, getATask, createTask, updateTask, deleteTask };
