import React from "react";

/* Salvo la API della mia app meteo in una costante */
const api = {
  /* Key Generata */
  key: "afaf9f8d48cff6cafd32e23220bcfdbf",
  /* Da che sito la sto prendendo */
  base: "https://api.openweathermap.org/data/2.5/"
}

/* Verifico la mia API */
console.log(api);

function App() {
  return (
    <div className="app warm">
      <main>
        {/* Searchbox necessaria */}
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Cerca.."
          />
        </div>

      </main>
    </div>
  );
}

export default App;
