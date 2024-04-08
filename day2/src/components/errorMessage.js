let ErrorMessage=()=>{
    let foodItems = ["Daal", "Milk", "Salad", "Rice", "Chilled Water"];
    return(
        <>
{foodItems.length === 0 ? <h4>Kuch nhi hai bhai</h4>: null}; 
        </>
    )
}
export default ErrorMessage;