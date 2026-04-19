import { useState } from "react";
import './App.css'

function Buttons() {
  const [message, setMessage] = useState("");
  const appStatus = import.meta.env.VITE_APP_STATUS;

  return (
    <div className="container">
      <div className="app-badge">
        Mode: {appStatus}
      </div>

      <h1 className="title">Перевірка роботи кнопок</h1>

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