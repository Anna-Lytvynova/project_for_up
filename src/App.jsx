import { useState, useEffect } from "react";
import posthog from "posthog-js";
import * as Sentry from "@sentry/react";
import "./App.css";

function Buttons() {
  const [message, setMessage] = useState("");
  const [showExtraButtons, setShowExtraButtons] = useState(false);
  const [user, setUser] = useState(null);
  const appStatus = import.meta.env.VITE_APP_STATUS;

  useEffect(() => {
    posthog.onFeatureFlags(() => {
      if (posthog.isFeatureEnabled("show-urgent-filter")) {
        setShowExtraButtons(true);
      } else {
        setShowExtraButtons(false);
      }
    });
  }, []);

  const handleLogin = () => {
    const userData = {
      id: "67890",
      email: "anna.l@university.edu",
      segment: "premium_user"
    };
    
    setUser(userData);
    Sentry.setUser(userData);
    setMessage("Користувача ідентифіковано для Sentry.");
  };

  const handleLogout = () => {
    setUser(null);
    Sentry.setUser(null);
    setMessage("Контекст користувача очищено.");
  };

  const handleButtonClick = (buttonNumber, msg) => {
    Sentry.addBreadcrumb({
      category: "ui",
      message: `Натиснуто кнопку #${buttonNumber}: ${msg}`,
      level: "info",
    });

    setMessage(msg);
  
    posthog.capture("button_clicked", {
      button_number: buttonNumber,
      feature_flag_active: showExtraButtons,
    });
  };

  const throwTestError = () => {
    setMessage("Викликаю помилку з контекстом...");
    throw new Error("Sentry User Context Test: Помилка авторизованого користувача!");
  };

  return (
    <div className="container">
      <div className="app-badge">Mode: {appStatus}</div>

      <h1 className="title">Перевірка роботи кнопок</h1>

      <div className="auth-section" style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        {!user ? (
          <button className="button" style={{ background: "#10b981" }} onClick={handleLogin}>
            Set User Context
          </button>
        ) : (
          <button className="button" style={{ background: "#6b7280" }} onClick={handleLogout}>
            Clear Context
          </button>
        )}
      </div>

      <div className="button-group">
        <button
          className="button"
          onClick={() => handleButtonClick(1, "Натиснута перша кнопка")}
        >
          Кнопка 1
        </button>

        <button
          className="button"
          onClick={() => handleButtonClick(2, "Натиснута друга кнопка")}
        >
          Кнопка 2
        </button>

        <button
          className="button"
          onClick={() => handleButtonClick(3, "Натиснута третя кнопка")}
        >
          Кнопка 3
        </button>

        <button
          className="button"
          onClick={() => handleButtonClick(4, "Натиснута четверта кнопка")}
        >
          Кнопка 4
        </button>

        {showExtraButtons && (
          <>
            <button
              className="button"
              onClick={() => handleButtonClick(5, "Натиснута п'ята кнопка")}
            >
              Кнопка 5
            </button>
          </>
        )}

        <button
          className="button"
          style={{ 
            backgroundColor: "#e11d48", 
            marginTop: "20px",
            border: "2px solid #fb7185" 
          }}
          onClick={throwTestError}
        >
          Break with Context
        </button>
      </div>

      <p className="message">{message}</p>
      
      {user && (
        <p style={{ fontSize: "11px", opacity: 0.7 }}>
          Active Sentry User: {user.email}
        </p>
      )}
    </div>
  );
}

export default Buttons;