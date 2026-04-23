import { useState, useEffect } from "react";
import posthog from 'posthog-js';
import './App.css';

function Buttons() {
  const [message, setMessage] = useState("");
  const [showExtraButtons, setShowExtraButtons] = useState(false);
  const appStatus = import.meta.env.VITE_APP_STATUS;

  useEffect(() => {
    posthog.onFeatureFlags(() => {
      if (posthog.isFeatureEnabled('show-urgent-filter')) {
        setShowExtraButtons(true);
      } else {
        setShowExtraButtons(false);
      }
    });
  }, []);

  const handleButtonClick = (buttonNumber, msg) => {
    setMessage(msg);
    posthog.capture('button_clicked', { 
      button_number: buttonNumber,
      feature_flag_active: showExtraButtons 
    });
  };

  return (
    <div className="container">
      <div className="app-badge">
        Mode: {appStatus}
      </div>

      <h1 className="title">Перевірка роботи кнопок</h1>

      <div className="button-group">
        <button className="button" onClick={() => handleButtonClick(1, "Натиснута перша кнопка")}>
          Кнопка 1
        </button>

        <button className="button" onClick={() => handleButtonClick(2, "Натиснута друга кнопка")}>
          Кнопка 2
        </button>

        {showExtraButtons && (
          <>
            <button className="button" onClick={() => handleButtonClick(3, "Натиснута третя кнопка")}>
              Кнопка 3
            </button>

            <button className="button" onClick={() => handleButtonClick(4, "Натиснута четверта кнопка")}>
              Кнопка 4
            </button>
          </>
        )}
      </div>

      <p className="message">{message}</p>
    </div>
  );
}

export default Buttons;