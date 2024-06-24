import React, { useState } from "react";
import styles from "./../styles/Design.css";

const AddRecipe = () => {
  const [recipe, setRecipe] = useState([]);
  const [description, setDescription] = useState([]);
  const [Indgridents, setIngridents] = useState([]);
  const [steps, setSteps] = useState();
  console.log(recipe, "recipe");

  function handleChange(event) {
    setRecipe(event.target.value);
  }
  return (
    <div id="main page">
      <div id="header">
        <h1>Add Recipe Page</h1>
      </div>
      <div id="main-content">
        <label>Recipe Name</label>
        <input name="Recipe" onChange={handleChange} type="text" />
        <br />
        <label>Description</label>
        <input type="text" />
        <br />
        <div>
          <label>Indgridents</label>
          <input type="text" />
          <label>Preperation Steps</label>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
