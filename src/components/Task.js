import React from "react";

function Task({text, category, handleDeleteButton}) {

function deleteButton(){
  handleDeleteButton(text)
}

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={deleteButton} className="delete">X</button>
    </div>
  );
}

export default Task;




























// import React from "react";

// function Task({text, category, handleDelete}) {

// function deleteText(){
//   // console.log(text)
//   handleDelete(text)
// }


//   return (
//     <div className="task">
//       <div className="label">{category}</div>
//       <div className="text">{text}</div>
//       <button onClick={deleteText} className="delete">X</button>
//     </div>
//   );
// }

// export default Task;







// import React from "react";

// function Task() {
//   return (
//     <div className="task">
//       <div className="label">CATEGORY HERE</div>
//       <div className="text">TEXT HERE</div>
//       <button className="delete">X</button>
//     </div>
//   );
// }

// export default Task;