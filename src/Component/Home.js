import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import TaskCard from "./TaskCard";

const Home = () => {
  const [task, setTask] = useState();
  const [taskTime, setTaskTime] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [userTasks, setUserTasks] = useState([{}]);
  const [selectTask, setSelectedTask] = useState("");

  console.log(task)



  const handleSubmit = (e) => {
    e.preventDefault();
  };



  // Send completed task data to the backend 
  const handleCompleted = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedTask(value);
    } else {
      setSelectedTask("");
    }
  };



  // Function for adding tasks
  const handleAddTask = async () => {
    if (task && taskTime && taskTime) {
      const userTask = await axios.post("http://localhost:3001/tasks", {
        task: task,
        time: taskTime,
        date: taskDate,
      });
      userTask
        ? console.log("New Task has been added!")
        : console.log("Failed to add task.");
    } else {
      console.log("Please enter in a value!");
    }
  };


  // Getting all non-completed tasks
  useEffect(() => {
    axios
      .get("http://localhost:3001/tasks")
      .then((res) => setUserTasks(res.data))
      .catch((err) => console.log(err));
  }, [userTasks]);

  return (
    <div className="Home conainer">
      <main className="container">
        <section>
          <h4>
            MyTasks <span>List</span>
          </h4>
          <div className="formTaskContainer">
            <form onSubmit={handleSubmit}>
              <div className="taskAddSection">
                <input
                  onChange={(e) => setTask(e.target.value)}
                  value={task}
                  className="form-control  userTaskText"
                  placeholder="New Task"
                />
                {userTasks.length == 5 ? (
                  <button disabled className="addBtn">
                    +
                  </button>
                ) : (
                  <button onClick={handleAddTask} className=" addBtn">
                    +
                  </button>
                )}
              </div>

              <div className="timeDateContainer">
                <input
                  className="input-group"
                  onChange={(e) => setTaskDate(e.target.value)}
                  value={taskDate}
                  type="date"
                />
                <input
                  className="input-group"
                  onChange={(e) => setTaskTime(e.target.value)}
                  value={taskTime}
                  type="time"
                  step="60"
                />
              </div>
            </form>
          </div>
        </section>


        <div className="taskListContainer container">
          {userTasks.length > 0 ? (
            userTasks.map(item => {
              return (
                <TaskCard
                  task={item.task}
                  time={item.time}
                  handleCompleted={handleCompleted}
                  checkTask={item.task}
                  date={new Date().toDateString(item.date)}
                />
              );
            })
          ) : (
            <p className="pendingText">No Pending Tasks</p>
          )}
        </div>

        {userTasks.length >= 0 ? (
          <button
            onClick={() => {
              axios
                .put("http://localhost:3001/tasks/v1/pending", { task: selectTask })
                .then(() => console.log("successfully"))
                .catch((err) => console.log(err));
            }}
            className=" completeBtn"
          >
            Completed Task
          </button>
        ) : (
          <button disabled className=" completeBtn">
            Completed Task
          </button>
        )}
      </main>
    </div>
  );
};

export default Home;
