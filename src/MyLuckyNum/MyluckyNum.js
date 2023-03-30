import React, { useState } from "react";
import style from "./MyluckyNum.module.css"

let randomNum = Math.floor(Math.random() *20) +1;

export default function MyluckyNum() {
  const [userGuess, setUserGuess] = useState("");
  const [userCount, setUserCount] = useState(0);
  const [userAllGuessVal, setUserAllGuessVal] = useState([]);
  const [randomnumber, setRandomNumber] = useState(randomNum);
  const [disabled, setDisabled] = useState(false);
  const [msg, setMsg] = useState("")

  const handleValueChange = (e) => {
    setUserGuess(e.target.value);
  };

  const submitHandler = () => {

    if(Number(randomnumber) === Number(userGuess)){
       setMsg ("Congratulations!!!");
       setDisabled(true)
     }else if(userCount === 4){
      setMsg("GAME OVER!!!");
      setDisabled(true)
     }else{
      setMsg("Wrong Guess")

      if(randomNum < userGuess){
        alert("selected Value is HIGH")
      }
      if(randomNum > userGuess){
        alert("selected Value is LOW")
      }
     }

    setUserCount(userCount + 1);
    setUserAllGuessVal([...userAllGuessVal,userGuess]);
  };

  const restartAgain =() =>{
     setDisabled(false)
     setMsg("")
     setUserAllGuessVal([])
     setRandomNumber(Math.floor(Math.random() * 20) + 1)
     setUserGuess("")

  };
  return (
    <div className={style.container} >
      <h1>Number guessing game</h1>
      <br />
      <input disabled={disabled} value={userGuess} type="text" onChange={handleValueChange} />
      <br />
      <button disabled ={disabled} onClick={submitHandler}>Submit</button>
      {disabled &&
      <button onClick={restartAgain}>Start again</button>
 }

      <div className={style.info}>
        <h3> msg: {msg}</h3>
        <p>Total round play by user: {userCount}</p>
        <p>Random number: {randomnumber}</p>
        <p>Your guesses:
        {userAllGuessVal?.map((item,index) =>{
          return (
            <span key={index}>
                 <span> {userGuess} ,{}</span>
            </span>
          );
        })}
        </p>
      </div>
    </div>
  );
}
