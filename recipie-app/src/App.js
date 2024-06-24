import "./App.css";
import { Route, Routes } from "react-router-dom";
import Design from "./components/Design";
import AddRecipe from "./components/AddRecipe";
import RecipeList from "./components/RecipeList";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="addrecipe-page" element={<AddRecipe />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="design" element={<Design />}></Route>
        <Route path="recipe-list" element={<RecipeList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
