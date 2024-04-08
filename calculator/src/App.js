import styles from "./App.module.css"
import InputField from "./components/inputField";
import Btn from "./components/buttons";

function App() {
  return (
    <div className={styles.outerbox}>
      <InputField></InputField>
     <Btn></Btn>
    </div>
  );
}

export default App;
