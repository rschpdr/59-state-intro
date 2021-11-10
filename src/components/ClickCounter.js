import { useState } from "react";

function ClickCounter() {
  // 1. Criar a variável contadora
  let [clickCount, setClickCount] = useState(0);

  // 2. Escutar o evento de clique no botão "+""

  function handleIncrement() {
    setClickCount(clickCount + 1);
    console.log(clickCount);
  }

  function handleDecrement() {
    if (clickCount > 0) {
      setClickCount(clickCount - 1);
    }
  }

  return (
    <div className="counter">
      <button onClick={handleDecrement}>-</button>

      <span>{clickCount}</span>

      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default ClickCounter;
