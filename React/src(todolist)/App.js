import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]); 
  const onChange = (event) =>  setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    };
    //console.log(toDo);
    setToDos((currentArray) => [toDo, ...currentArray]); //기존 todos의 값을 가져와서 todo와 합침
    setToDo(""); //todo 초기화
  };
  console.log("toDos:", toDos);
  return (
    <div>
      <h1>My ToDo ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} 
          type="text" 
          placeholder="Write your to do..." 
        />
        <button>Add ToDo</button>
      </form>
      <hr />
      <ul>
        {/* toDos의 각 아이템들을 li에 넣어줌 */}
        {toDos.map((item, index)=>(<li key={index}>{item}</li>))}
      </ul>
    </div>
  );
}

export default App;
