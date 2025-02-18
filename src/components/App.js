import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });




function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] =useState("All")


function addNewTask(newTask){
  setTasks([...tasks, newTask])
}

  function handleDelete(text){
    setTasks(tasks.filter((task)=> task.text !== text))
  }

  const tasksToDisplay = tasks.filter((task) => {
    if (category === "All") return true;
     return task.category === category
  })



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter listOfCategories={CATEGORIES}
      category={category}
      setCategory={setCategory}/>
      <NewTaskForm 
      newObjItem={addNewTask}
      allCategories={CATEGORIES}
      />
      <TaskList 
      tasksToDisplay={tasksToDisplay}
      handleDeleteButton={handleDelete}/>
    </div>
  );
}

export default App;





// import React, {useState} from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";

// import { CATEGORIES, TASKS } from "../data";
// function App() {

//   const [tasks, setTasks] = useState(TASKS)
//   const [category, setCategory] = useState("All")

//   function handleDeleteText(text){

//     setTasks(tasks.filter((task) => task.text !== text))
//   }

//   function handleAddTask(newTask){
//     setTasks([...tasks, newTask]);
//   }

//   const tasksToDisplay = tasks.filter((task) => {
//     if (category === "All") return true;
//     return task.category === category;
//   })


//   return (
//     <div className="App">
//       <h2>My tasks</h2>

//       <CategoryFilter 
//       listOfCategories={CATEGORIES}  
//       currentCategory={category}
//       settingCategory={setCategory}
//       />

//       <NewTaskForm 
//       listOfCategories={CATEGORIES}
//       newTaskObj={handleAddTask}
//       />

//       <TaskList
//       handleDelete={handleDeleteText}
//       tasksDisplay ={tasksToDisplay}
//       />

//     </div>
//   );
// }

// export default App;





// import React from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";

// import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

// function App() {
//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter />
//       <NewTaskForm />
//       <TaskList />
//     </div>
//   );
// }

// export default App;
