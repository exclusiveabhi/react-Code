import Item from "./item"
let FoodItems =()=>{
    let foodItems = ["Daal", "Milk", "Salad", "Rice", "Chilled Water"];
   
    return(<>

<ul className="list-group">
        {foodItems.map((item) => (
          <Item key={item} foodItems={item}></Item>
        ))}
      </ul>

</>

    );
}

export default FoodItems;

// <Item foodItems={item}></Item> foodItems ko argument bna kr props mai send kiya ....item components ko

// props send data parent components to child components !