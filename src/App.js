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
  /* Arrow-function per la mia date */
  const dateBuilder = (d) => {
    /* Mesi */
    const mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio",
      "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
    /* Giorni */
    const days = ["Lunedi", "Martedi", "Mercoledi", "Giovedi", "Venerdi", "Sabato", "Domenica"]
    /* Ora faccio il modo che un giorno venga pescato correttamente dai vari metodi */
    let giorno = days[d.getDay()];
    let data = d.getDate();
    let mese = mesi[d.getMonth()];
    let anno = d.getFullYear();
    let ora = d.getHours();
    let minute = d.getMinutes();
    /* Ora tramite return pesco tutti i dati */
    return `${giorno} ${data} ${mese} ${anno} ${ora} : ${minute}`
  }

  return (
    <div className="app">
      <main>
        {/* Searchbox necessaria */}
        <div className="search-box">
          {/* Input della searchbox */}
          <input
            type="text"
            className="search-bar"
            placeholder="Cerca.."
          />
        </div>
        {/* Box della location */}
        <div className="location-box">
          {/* Locazione */}
          <div className="location">San Paolo d'Argon, BG</div>
          {/* Data 
          dateBuilder => la mia costante, l'array di variabili di array sopra return
          new Date() => istanza
          */}
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        {/* Box per il tempo */}
        <div className="weather-box">
          {/* Temperatura va qua */}
          <div className="temperature">15°c</div>
          {/* Che tempo fa invece (soleggiato, piovoso ecc) qua */}
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
