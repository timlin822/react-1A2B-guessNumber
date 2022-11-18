import './Guess.css';

const GuessList=({guessNumberSets})=>{
    return (
		<div className="guess-list">
            {guessNumberSets && guessNumberSets.map((guessNumberSet,index)=>(
                <div key={index} className="guess-set">{guessNumberSet.guessSet.map(number=><span key={number} className="ball">{number}</span>)} <span className="text">{guessNumberSet.a}A{guessNumberSet.b}B</span></div>
            ))}
        </div>
    );
}

export default GuessList;