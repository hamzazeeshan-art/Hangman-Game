import "./css/HangmanDiagram.css";
interface HangmanDiagramProps
{
  IncorrectGuesses: number;
}


const Head = <div className="head"></div>
const ArmLeft = <div className="arm-left"></div>
const ArmRight = <div className="arm-right"></div>
const LegLeft = <div className="leg-left"></div>
const LegRight = <div className="leg-right"></div>
const Body = <div className = "body"></div>
function HangmanDiagram({IncorrectGuesses}:HangmanDiagramProps) {
  let BodyParts = [Head, Body, ArmLeft, ArmRight, LegLeft, LegRight];

  return (
    <div className="hangman-diagram">
      <div className="horizontal-bar"></div>
      <div className="rope"></div>
      {BodyParts.splice(0,IncorrectGuesses).map((part,index) => <div key={index}>{part}</div>)}
    </div>
  );
}
export default HangmanDiagram;
