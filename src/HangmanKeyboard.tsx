import "./css/HangmanKeyboard.css";
interface HangmanKeyboardProps {
  GuessedWord: string;
  IncorrectGuesses: number;
  isWon: boolean;
  SetGuessedWord: (NewWord: string) => void;
}
function HangmanKeyboard({
  GuessedWord,
  SetGuessedWord,
  IncorrectGuesses,
  isWon
}: HangmanKeyboardProps) {
  let alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let LettersGuessed = GuessedWord.split("");
  const UpdateGuessedWord = (alphabet: string) => {
    SetGuessedWord(GuessedWord + alphabet);
  };
  const isGameOver = IncorrectGuesses>5||isWon==true;
  return (
    <div className="keyboard">
      {alphabets.map((alphabet) => (
        <button
          key={alphabet}
          className={isGameOver===true?"key disabled":LettersGuessed.includes(alphabet) ? "key disabled" : "key"}
          onClick={() => {
            UpdateGuessedWord(alphabet);
          }}
        >
          {alphabet}
        </button>
      ))}
    </div>
  );
}
export default HangmanKeyboard;
