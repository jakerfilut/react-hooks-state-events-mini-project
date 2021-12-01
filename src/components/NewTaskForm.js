import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({allCategories,newObjItem}) {

const [text, setText] = useState("")
const [category, setCategory] = useState("Code")

const renderOption = allCategories.map((cat) => (
  <option key={cat}>{cat}</option>
))

function formSubmit(event){
  event.preventDefault()
  newObjItem({
    id: uuid(), // the `uuid` library can be used to generate a unique id
    text: text,
    category: category,
  })
  setText("")
  setCategory("Code")
}

  return (
    <form onSubmit={formSubmit}className="new-task-form">
      <label>
        Details
        <input onChange={(e) => setText(e.target.value) } type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={(e) => setCategory(e.target.value) } name="category">
          {renderOption}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;


















// import React, {useState} from "react";
// import { CATEGORIES } from "../data";
// import { v4 as uuid } from "uuid";

// function NewTaskForm({newTaskObj}) {

//   const [category, setCategory] = useState("Code")
//   const [text, setText] = useState("")

// function formSubmit(event){
//   event.preventDefault()
//   newTaskObj({
//     id: uuid(), // the `uuid` library can be used to generate a unique id
//     text: text,
//     category: category,
//   })
//   setText("")
//   setCategory("code")
// }

// function addDetails(event){
//   setText(event.target.value)
// }

// function choseCategory(event){
//   setCategory(event.target.value)
// }


// const optionElements = CATEGORIES.map((category) => (
//   <option>{category}</option>
// ))

//   return (
//     <form onSubmit={formSubmit}
//     className="new-task-form">
//       <label>
//         Details
//         <input onChange={addDetails} value={text}
//         type="text" name="text" />
//       </label>
//       <label>
//         Category
//         <select onChange={choseCategory} value={category}
//         name="category">
//           {optionElements}
//         </select>
//       </label>
//       <input type="submit" value="Add task" />
//     </form>
//   );
// }

// export default NewTaskForm;







// import React from "react";

// function NewTaskForm() {
//   return (
//     <form className="new-task-form">
//       <label>
//         Details
//         <input type="text" name="text" />
//       </label>
//       <label>
//         Category
//         <select name="category">
//           {/* render <option> elements for each category here */}
//         </select>
//       </label>
//       <input type="submit" value="Add task" />
//     </form>
//   );
// }

// export default NewTaskForm;
