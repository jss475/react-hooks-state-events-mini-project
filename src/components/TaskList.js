import React from "react";
import Task from './Task'

function TaskList({tasks, handleTaskClick}) {
  // debugger

  let tasksArray = tasks.map(task => {
    return <Task key = {task.text} text = {task.text} category = {task.category} handleTaskClick={handleTaskClick}/>
  })
  //find the tasks data into a component call of Task by making an array using map
  return (
    <div className="tasks">
      {tasksArray}
    </div>
  );
}

export default TaskList;
