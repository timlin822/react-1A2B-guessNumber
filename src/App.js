import {useState,useEffect} from 'react';
import {ToastContainer} from 'react-toastify';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GuessForm from 'components/guess/GuessForm';
import GuessList from 'components/guess/GuessList';

import Error from 'components/error/Error';

import './App.css';

function App() {
  const [error,setError]=useState("");
  const [success,setSuccess]=useState("");
  const [correctNumbers,setCorrectNumbers]=useState([]);
  const [inputNumbers,setInputNumbers]=useState([]);
  const [guessNumberSets,setGuessNumberSets]=useState([]);

  const randomNumbers=()=>{
    let randomNumbers=[];
    for(let i=0;i<4;i++){
      const random=Math.floor(Math.random()*10); // 0~9的數字
      if(randomNumbers.indexOf(random)===-1) randomNumbers.push(random);
      else i--;
    }
    setCorrectNumbers(randomNumbers);
  };

  const resetHandler=()=>{
    setError("");
    setSuccess("");
    randomNumbers();
    setInputNumbers([]);
    setGuessNumberSets([]);
  };

  useEffect(()=>{
    setError("");
    setSuccess("");

    randomNumbers();
  },[]);
  useEffect(()=>{
    if(success==="成功完成"){
      const timeoutId=setTimeout(()=>{
        resetHandler();
      },5000);
      
      return ()=>{
        clearTimeout(timeoutId);
      }
    }
  },[success]);

  const inputNumberHandler=(e)=>{
    setError("");
    setSuccess("");

    if(inputNumbers.indexOf(Number(e.target.innerText))!==-1){
      return setError("數字不可重複");
    }
    if(inputNumbers.length<4){
      setInputNumbers([...inputNumbers,Number(e.target.innerText)]);
    }
  };

  const checkNumbersHandler=()=>{
    if(inputNumbers.length<4){
      return setError("沒有4個數字");
    }

    let a=0,b=0;
    for(let i=0;i<4;i++){
      for(let j=0;j<4;j++){
        if(inputNumbers[i]===correctNumbers[j] && i===j) a++;
        else if(inputNumbers[i]===correctNumbers[j] && i!==j) b++;
      }
    }

    setGuessNumberSets([
      ...guessNumberSets,
      {
        guessSet: inputNumbers,
        a,
        b
      }
    ]);
    setInputNumbers([]);
    
    if(a===4){
      setSuccess("成功完成");      
      toast.success("恭喜成功完成",{position: toast.POSITION.TOP_CENTER,autoClose: 4000});
    }
  };

  const clearNumbersHandler=()=>{
    setInputNumbers([]);
  };
  
  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <div className="group-flex">
          <button className="btn-start" onClick={resetHandler}>遊戲開始</button>
          <p className="guess-times">次數: {guessNumberSets.length}</p>
        </div>
        {error && <Error error={error} setError={setError} />}
        <div className="guess-flex">
          <GuessForm inputNumbers={inputNumbers} inputNumberHandler={inputNumberHandler} checkNumbersHandler={checkNumbersHandler} clearNumbersHandler={clearNumbersHandler} />
          <GuessList guessNumberSets={guessNumberSets} />
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default App;