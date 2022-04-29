import React from "react";

function CategoryFilter({categories,handleSelectedCat, selectedCat}) {
  let categoriesArray = categories.map(category => {
    return <button key = {category} className = {selectedCat === category ? 'selected' : null} onClick = {()=>handleSelectedCat({category: category})}>{category}</button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesArray}
    </div>
  );
}

export default CategoryFilter;
