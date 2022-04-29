import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {

  const [allTasks, setAllTasks] = useState(TASKS)
  const [selectedCat, setSelectedCat] = useState('All')
 
  function handleTaskClick(taskToDelete){
    let filteredTasks = allTasks.filter(task => task.text !== taskToDelete.task)
    //debugger
    setAllTasks(filteredTasks)
  }

  function handleSelectedCat(category){
    //this set changes color by changing classname. CSS does the color work 
    setSelectedCat(category.category)

  }
  let filteredTasks = allTasks.filter(task => task.category === selectedCat)
 
  //if statement for when category is all and when not
  if(selectedCat === 'All'){
    filteredTasks = allTasks
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} handleSelectedCat = {handleSelectedCat} selectedCat = {selectedCat}/>
      <NewTaskForm categories = {CATEGORIES}/>
      <TaskList tasks = {filteredTasks} handleTaskClick = {handleTaskClick}/>
    </div>
  );
}

export default App;
