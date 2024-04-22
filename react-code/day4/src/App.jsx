import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([]); //[] empty array using useState

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;   //Event ki value newFooditem mai ja rhi hai !
      event.target.value = ""; // Enter ke baad field ko empty krne ke liyee !
      let newItems = [...foodItems, newFoodItem];   // [...foodItems, newFoodItem]; ... ka mtlb foodItem ke sare element 
                                                   // or newfood ke NewItem mai daal do !
      setFoodItems(newItems);    //method hai yeh jo array ko update krta hai !
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
