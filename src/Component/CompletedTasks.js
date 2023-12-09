import React, { Children, useEffect, useState } from "react";
import axios from "axios";
import TaskCard from "./TaskCard";
import api_url from './env'

const CompletedTasks = () => {
  const [completedTask, setCompletedTask] = useState([{}]);
  const [myTask, setMyTask] = useState("");
  const [check, setCheck] = useState();

  useEffect(() => {
    axios
      .get(`${api_url}/tasks/completed`)
      .then((res) => setCompletedTask(res.data))
      .catch((err) => console.log(err));
  }, [completedTask]);

  const handleRemove = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setMyTask(value);

      console.log(e);
    } else {
    }

    setCheck();
  };

  return (
    <div className="completedContainer container">
      <h2>Completed Tasks</h2>

      <div className="completedTaskContainer container">
        {completedTask.length > 0 ? (
          completedTask.map((item) => {
            return (
              <TaskCard
                task={item.task}
                time={item.date}
                date={item.date}
                checkTask={item._id}
                handleCompleted={handleRemove}
                handleChecked={check}
              />
            );
          })
        ) : (
          <p className="completedText">No Completed Task</p>
        )}
      </div>
      <button
        onClick={async (e) => {
          const removeTask = await axios
            .delete(`${api_url}/tasks/${myTask}`)
            .then(() => console.log("Successfully"))
            .catch((err) => console.log(err));
        }}
        className="btn btn-danger"
      >
        Remove Task
      </button>
    </div>
  );
};

export default CompletedTasks;
