import styles from "./App.module.css";
import { useEffect, useState } from "react";
import CleanUp from "./CleanUp";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const iRunOnlyOnce = () => {
    console.log("한 번 실행함");
  }
  const clickCounterButton = () => {
    console.log(`Click Counter Button ${counter}`);
  }
  const changeSearchBarValue = () => {
    console.log(`Search For ${keyword}`);
  }
  
  useEffect(iRunOnlyOnce, []);
  useEffect(clickCounterButton, [counter]);
  useEffect(changeSearchBarValue, [keyword]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click</button>
      <hr/>
      <CleanUp/>
    </div>
  );
}

export default App;
