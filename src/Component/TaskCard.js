import React from "react";

const TaskCard = ({
  task,
  time,
  date,
  handleCompleted,
  checkTask,
  handleChecked,
}) => {
  return (
    <ul id="task" className="task  shadow-lg">
      <li className="itemContainer">
        <div className="taskBox">
          <p className="tasksText">{task}</p>
          <div className="timeContainer">
            <p className="taskDT">Time: {time}</p>
            <p className="taskDT">Date: {date}</p>
          </div>
        </div>
        <input
          onChange={handleCompleted}
          value={checkTask}
          type="checkbox"
          checked={handleChecked}
        />
      </li>
    </ul>
  );
};

export default TaskCard;
