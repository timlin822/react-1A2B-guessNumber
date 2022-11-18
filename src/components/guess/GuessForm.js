import './Guess.css';

const GuessForm=({inputNumbers,inputNumberHandler,checkNumbersHandler,clearNumbersHandler})=>{
    return (
		<div className="guess-form">
            <div className="input-group">
                <div className="input">{inputNumbers[0]}</div>
                <div className="input">{inputNumbers[1]}</div>
                <div className="input">{inputNumbers[2]}</div>
                <div className="input">{inputNumbers[3]}</div>
            </div>
            <div className="guess-board">
                <div className="btn" onClick={inputNumberHandler}>7</div>
                <div className="btn" onClick={inputNumberHandler}>8</div>
                <div className="btn" onClick={inputNumberHandler}>9</div>
                <div className="btn" onClick={inputNumberHandler}>4</div>
                <div className="btn" onClick={inputNumberHandler}>5</div>
                <div className="btn" onClick={inputNumberHandler}>6</div>
                <div className="btn" onClick={inputNumberHandler}>1</div>
                <div className="btn" onClick={inputNumberHandler}>2</div>
                <div className="btn" onClick={inputNumberHandler}>3</div>
                <div className="btn" onClick={inputNumberHandler}>0</div>
                <div className="btn" onClick={checkNumbersHandler}>確認</div>
                <div className="btn" onClick={clearNumbersHandler}>清除</div>
            </div>
        </div>
    );
}

export default GuessForm;