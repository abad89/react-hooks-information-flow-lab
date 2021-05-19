import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter"

function ShoppingList({ items, getDarkMode }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value)
    console.log("Dropdown Change");
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className={"App " + (getDarkMode() ? "dark" : "light")}>
      <Filter onCategoryChange={handleCategoryChange}/>
      <div className="ShoppingList">
        <ul className="Items">
          {itemsToDisplay.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShoppingList;
