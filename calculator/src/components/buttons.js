import styles from "./button.module.css"
function Btn(){
    let buttonName = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
    return(
        <div  className={styles.buttons}> 
     {buttonName.map(btnName=> <button className={styles.button}>{btnName}</button>)}
     
     </div>
    )
}
export default Btn;

//{buttonName.map(btnName=> btnName mai ek ek item dalta rehega !