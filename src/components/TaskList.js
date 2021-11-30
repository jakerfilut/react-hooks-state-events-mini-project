import React from "react";
import Task from "./Task"

function TaskList({handleDelete, tasksDisplay}) {
const mapTasks = tasksDisplay.map((task) => (
  <Task key={task.text}
  text={task.text}
  category={task.category}
  handleDelete={handleDelete}/>
))
  return (
    <div className="tasks">
      {mapTasks}
    </div>
  );
}

export default TaskList;



// import React from "react";

// function TaskList() {
//   return (
//     <div className="tasks">
//       {/* display a list of tasks using Task component */}
//     </div>
//   );
// }

// export default TaskList;