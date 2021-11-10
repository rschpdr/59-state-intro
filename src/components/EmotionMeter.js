import { useState } from "react";

function EmotionMeter() {
  // 1. Definir o state

  const [isHappy, setIsHappy] = useState(true);

  // 2. Escutar o evento de click

  function handleClick() {
    // 3. Atualizar a emoção

    setIsHappy(!isHappy);
  }

  return (
    <div>
      {isHappy ? (
        <i className="fas fa-3x fa-smile-beam"></i>
      ) : (
        <i className="fas fa-3x fa-frown"></i>
      )}

      <button onClick={handleClick}>Trocar emoção</button>
    </div>
  );
}

export default EmotionMeter;
