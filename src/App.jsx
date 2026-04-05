import React, { useState } from "react";
import './App.css'

function Buttons() {
  const [message, setMessage] = useState("");

  return (
    <div className="container">
  <h2 className="title">Приклад з чотирма кнопками</h2>

  <button className="button" onClick={() => setMessage("Натиснута перша кнопка")}>
    Кнопка 1
  </button>

  <button className="button" onClick={() => setMessage("Натиснута друга кнопка")}>
    Кнопка 2
  </button>

  <button className="button" onClick={() => setMessage("Натиснута третя кнопка")}>
    Кнопка 3
  </button>

  <button className="button" onClick={() => setMessage("Натиснута четверта кнопка")}>
    Кнопка 4
  </button>

  <p className="message">{message}</p>
</div>
  );
}

export default Buttons;