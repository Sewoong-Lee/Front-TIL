import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect} from "react";

function App() {
  const [loding, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);
  const [me, setMe] = useState(0);
  const [have, setHave] = useState(0);
  const [selectCoin, setselectCoin] = useState(0);
  const onChange = (event) => {
    setMe(event.target.value);
  }
  //console.log(me);
  const changeSelect = (event) => {
    //console.log(event.target.value);
    setselectCoin(event.target.value);
    setHave(Math.round(me / selectCoin)+" 코인 구매 가능");
  }
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);//코인의 정보를 받은걸 코인스에 넣어줌
        setLoding(false);//로딩값 변경
      }); 
  }, [])
  return (
    <div>
      <h1>The Coin!!!! {loding ? "" : `(${coins.length})`}</h1>
      {loding ? <strong>Loding....</strong> : 
        <select onChange={changeSelect}>
          {coins.map((coin)=>(
            <option value={coin.quotes.USD.price} key={coin.id}>{coin.id}{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      }
      <input onChange={onChange} value={me} type="number" />
      {me === 0 ? null : `${have}`}
    </div>
  );
}

export default App;
