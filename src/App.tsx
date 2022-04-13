import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

function App() {
  useEffect(() => {
    setInterval(() => {
      window.navigator.vibrate(1000);
    }, 19000);
  }, []);

  return (
    <div className="App">
      <h1>Presentation Vibrator</h1>
    </div>
  );
}

export default App;
