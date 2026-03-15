const express = require("express");
const { createTask, getTasks, getSingleTasks, updateTask, deletetask,} = require("../controller/taskController");

const router = express.Router();

router.post("/",createTask);

router.get("/",getTasks);

router.get("/:id",getSingleTasks);

router.patch("/:id",updateTask);

router.delete("/:id",deletetask)




module.exports = router;
