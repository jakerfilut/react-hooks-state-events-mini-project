import React, {useState} from "react";
import { CATEGORIES } from "../data";
import { v4 as uuid } from "uuid";

function NewTaskForm({newTaskObj}) {

  const [category, setCategory] = useState("Code")
  const [text, setText] = useState("")


function formSubmit(event){
  event.preventDefault()
  newTaskObj({
    id: uuid(), // the `uuid` library can be used to generate a unique id
    text: text,
    category: category,
  })
  setText("")
  setCategory("code")
}


function addDetails(event){
  setText(event.target.value)
}

function choseCategory(event){
  setCategory(event.target.value)
}


const optionElements = CATEGORIES.map((category) => (
  <option>{category}</option>
))


  return (
    <form onSubmit={formSubmit}
    className="new-task-form">
      <label>
        Details
        <input onChange={addDetails} value={text}
        type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={choseCategory} value={category}
        name="category">
          {optionElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
