import React, { useState } from "react";
import './App.css'

function ThreeButtons() {
  const [message, setMessage] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Приклад з трьома кнопками</h2>

      <button 
        onClick={() => setMessage("Натиснута перша кнопка")}
        style={{ margin: "10px", padding: "10px 20px" }}
      >
        Кнопка 1
      </button>

      <button 
        onClick={() => setMessage("Натиснута друга кнопка")}
        style={{ margin: "10px", padding: "10px 20px" }}
      >
        Кнопка 2
      </button>

      <button 
        onClick={() => setMessage("Натиснута третя кнопка")}
        style={{ margin: "10px", padding: "10px 20px" }}
      >
        Кнопка 3
      </button>

      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        {message}
      </p>
    </div>
  );
}

export default ThreeButtons;