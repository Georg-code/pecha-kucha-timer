import React from "react";

function App() {
  const start = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="App" onSubmit={(e) => start(e)}>
      <form>
        <input
          name="untilStart"
          type="number"
          placeholder="Zeit bis zum Start"
        ></input>
        <input name="intervall" type="number" placeholder="Intervall"></input>
        <button type="submit">Starten</button>
      </form>
    </div>
  );
}

export default App;
