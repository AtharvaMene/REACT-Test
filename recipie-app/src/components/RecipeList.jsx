import React, { useState } from "react";
import styles from "./../styles/RecipeList.css";
import axios from "axios";

// async function RecipeList() {
//   const [recipes, setRecipe] = useState([]);
    
//   function getRecipe(){
   
//     const options = {
//     method: 'GET',
//     url: 'https://chinese-food-db.p.rapidapi.com/',
//     headers: {
//       'x-rapidapi-key': '20b81cf63bmsh47f8913184d1080p11480cjsnab7b26ac0926',
//       'x-rapidapi-host': 'chinese-food-db.p.rapidapi.com'
//     }
//   };
  
//   try {
//       const response = await axios.request(options);
//       setRecipe(response.data);
//   } catch (error) {
//       console.error(error);
//   }

// useEffect(() => {
//     getRecipe();
//   }, []);

//  }


  return (
    <div>
        <div>
            <div>
                {recipes.map((report)=>(
                    <h1>{report.[0].title}</h1>
                ))}
            </div>
        </div>
    </div>
  );
};

export default RecipeList;
