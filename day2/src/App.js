              //map method or conversion array to list 
    import "bootstrap/dist/css/bootstrap.min.css"; //this to import bootstrap css that is install using npm
import "./App.css"; // yaha app css ki file import
import FoodItems from "./components/foodItems";
import ErrorMessage from "./components/errorMessage"
function app() {

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage></ErrorMessage> 
     <FoodItems></FoodItems>  
    </>
  ); //wrapper to wrap the section
}

export default app;

//map upper work as for loop ek ek item pick krega or la kr neeche {item } mai pass krega item=> arrow function hai ek.

// {foodItems.length <1 ? <h4>Kuch nhi hai bhai</h4>: null}; if else conditon in react .........? if ........: esle 