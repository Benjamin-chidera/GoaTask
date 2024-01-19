const router = require("express").Router();
const {
  getAllTask,
  getATask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controller/taskController");

router.route("/").get(getAllTask).post(createTask);
router.route("/:taskId").get(getATask).patch(updateTask).delete(deleteTask);

module.exports = router;
