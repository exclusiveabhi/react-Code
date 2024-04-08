import styles from "./inputfield.module.css"
function InputField(){
    return(
        <input className={styles.inputfield} type="text" placeholder="Enter the value"></input>
    )
}
export default InputField;