import React from "react";

function CategoryFilter({listOfCategories, category, setCategory}) {

  const renderButtons = listOfCategories.map((cat) => {
  const className = (category === cat ? "selected" : null)
  return <button className={className}
  onClick={() => setCategory(cat)}
  key={Math.random()}
  >{cat}</button>})
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderButtons}
    </div>
  );
}

export default CategoryFilter;

















// import React from "react";

// function CategoryFilter({listOfCategories, currentCategory, settingCategory}) {

// const categoryButtons = listOfCategories.map((category) => {
// const className = (category === currentCategory ? "selected" : null)
// return(
// <button onClick={() => settingCategory(category)}
// key={category}
// className={className}
//   >{category}</button>
// )})

//   return (
//     <div className="categories">
//       <h5>Category filters</h5>
//       {categoryButtons}
//     </div>
//   );
// }

// export default CategoryFilter;





// import React from "react";

// function CategoryFilter({listOfCategories}) {
//   return (
//     <div className="categories">
//       <h5>Category filters</h5>
//       {/* render <button> elements for each category here */}
//     </div>
//   );
// }

// export default CategoryFilter;
