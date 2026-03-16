import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

function App() {

  // API URL from .env
  const API = process.env.REACT_APP_API_URL;

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);

  // GET TASKS
  const getTasks = async () => {
    try {
      const res = await axios.get(API);
      setTasks(res.data);
    } catch (err) {
      console.error(err);
      alert("Cannot fetch tasks. Check backend server.");
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  // ADD TASK
  const addTask = async () => {
    if (!title) return alert("Enter Title");

    await axios.post(API, { title, description });
    setTitle("");
    setDescription("");
    getTasks();
  };

  // DELETE TASK
  const deleteTask = async (id) => {
    await axios.delete(`${API}/${id}`);
    getTasks();
  };

  // EDIT TASK
  const editTask = (task) => {
    setTitle(task.title);
    setDescription(task.description);
    setEditId(task._id);
  };

  // UPDATE TASK
  const updateTask = async () => {
    await axios.patch(`${API}/${editId}`, { title, description });
    setEditId(null);
    setTitle("");
    setDescription("");
    getTasks();
  };

  return (
    <div className="container py-4">

      <h2 className="text-center mb-4 text-primary fw-bold">
        🗂 Project Management Dashboard
      </h2>

      {/* FORM */}
      <div className="card shadow-lg p-4 mb-5 rounded-4 border-0">
        <input
          className="form-control mb-3 p-3 rounded-3"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="form-control mb-3 p-3 rounded-3"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          className={`btn ${editId ? "btn-warning" : "btn-primary"} w-100 py-2 fw-bold shadow-sm`}
          onClick={editId ? updateTask : addTask}
        >
          {editId ? "Update Task" : "Add Task"}
        </button>
      </div>

      {/* TASK LIST */}
      <div className="row g-4">
        {tasks.map((task) => (
          <div key={task._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card shadow-sm h-100 rounded-4 border-0">

              <div className="card-body d-flex flex-column">

                <h5 className="card-title text-primary fw-bold">
                  {task.title}
                </h5>

                <p className="card-text flex-grow-1 text-muted">
                  {task.description}
                </p>

                <span className="badge bg-success mb-3 align-self-start">
                  Active
                </span>

                <div className="d-flex justify-content-between mt-auto">

                  <button
                    className="btn btn-sm btn-outline-warning d-flex align-items-center gap-1"
                    onClick={() => editTask(task)}
                  >
                    <FaEdit /> Edit
                  </button>

                  <button
                    className="btn btn-sm btn-outline-danger d-flex align-items-center gap-1"
                    onClick={() => deleteTask(task._id)}
                  >
                    <FaTrash /> Delete
                  </button>

                </div>

              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
