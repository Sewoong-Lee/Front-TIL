import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect} from "react";

//클린업
function Hello () {
  // function byeFn(){
  //   console.log('bye :(');
  // }
  // function hiFn(){
  //   console.log('created :)'); //실행될때
  //   return byeFn; //사라질때 
  // }
  // useEffect ( hiFn, []);
  useEffect ( ()=>{ //이렇게 많이씀
    console.log('created :)');
    return ()=> console.log('bye :(');
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, serKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev+1);
  const KeywordChange = (event) => serKeyword(event.target.value);
  //console.log('계속 실행되는 콘솔로그');
  useEffect(()=> { //최초 랜더링시 한번만 실행하게한다.
    console.log('한번만 실행되는 콘솔로그');
  }, []);// 빈 배열은 랜더링시 한번만
  useEffect(()=> {
    if(keyword !== "" && keyword.length > 5){ //최초 실행과 길이가 적을때 검색 막음
      console.log('검색', keyword);
    }
  }, [keyword]); //배열에 변수를 주면 변수의 변경이 있을때만 실행된다.
  useEffect(()=> { 
    console.log('카운터가 변경시 콘솔로그');
  }, [counter]);
  // const RunOnlyOne = () => {
  //   console.log('한번만 실행되는 콘솔로그');
  // };
  // useEffect(RunOnlyOne, []);

  //클린업
  const [showing, setShowing] = useState(false);
  const CleanupClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={CleanupClick}>{showing ? "Hide" : "Show"}</button>

      <br/>
      <input value={keyword} onChange={KeywordChange} type="text" placeholder="Serch Here..."/>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>클릭</button>
      <br/>
      <Button text={"Continue"}/>
    </div>
  );
}

export default App;
