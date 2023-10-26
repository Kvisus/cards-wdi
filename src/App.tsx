import Card from "./components/Card";
import "./App.css";
import { card1, card2 } from "./data";
import { useState } from "react";

function App() {
  const [cardA, setCardA] = useState<string[]>(card1);
  const [cardB, setCardB] = useState<string[]>(card2);

  function swapper(card: string[], anotherCard: string[]) {
    const result = card.map((item, idx) => {
      // если чётное
      if (idx % 2 === 0) {
        return item;
      } else {
        // если нечётное
        return anotherCard[idx];
      }
    });
    return result;
  }
  function handleSwap() {
    const newCardA = swapper(cardB, cardA);
    const newCardB = swapper(cardA, cardB);
    setCardA(newCardA);
    setCardB(newCardB);
  }
  return (
    <div className="main">
      <div className="wrapper">
        <Card card={cardA} title={"Card A"} />
        <Card card={cardB} title={"Card B"} />
      </div>
      <div className="buttonContainer">
        <button onClick={handleSwap}>Swap</button>
      </div>
    </div>
  );
}
export default App;
