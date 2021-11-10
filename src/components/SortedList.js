import { useState } from "react";

function SortedList() {
  // 1. Criar o state
  const [cities, setCities] = useState([
    "São Paulo",
    "Rio de Janeiro",
    "Salvador",
    "Indaiatuba",
    "Irecê",
    "Americana",
    "Brasília",
    "Curitiba",
    "Niterói",
  ]);

  // 2. Escutar o evento de click nos botões
  function handleSortAlphabetic() {
    // 3. Ordenar a lista
    const arrClone = [...cities];

    arrClone.sort((a, b) => a.localeCompare(b));

    setCities(arrClone);
  }

  function handleSortInverseAlphabetic() {
    // 3. Ordenar a lista
    const arrClone = [...cities];

    arrClone.sort((a, b) => b.localeCompare(a));

    setCities(arrClone);
  }

  return (
    <div>
      <ul>
        {cities.map((currentCityStr) => (
          <li key={currentCityStr}>{currentCityStr}</li>
        ))}
      </ul>
      <button onClick={handleSortAlphabetic}>Ordenar A-Z</button>
      <button onClick={handleSortInverseAlphabetic}>Ordenar Z-A</button>
    </div>
  );
}

export default SortedList;
