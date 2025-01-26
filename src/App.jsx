import { useState, useEffect } from "react";
import Upgrades from "./components/Upgrades";
import "./App.css";

export default function App() {
  const [cookieCount, setCookieCount] = useState(0);
  const [autoCookieRate] = useState(1);
  const [cookiesPerClick] = useState(1);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCookieCount(cookieCount + autoCookieRate);
    }, 1000);
    return () => clearInterval(interval);
  }, [cookieCount, autoCookieRate]);

  function handleClick() {
    setCookieCount(cookieCount + cookiesPerClick);
  }

  return (
    <div className="game-container">
      <h1>Cookie Clicker Game</h1>
      <p>Cookies: {cookieCount}</p>
      <button className="main-button" onClick={handleClick}>
        Click for Cookies
      </button>
      <Upgrades
        cookieCount={cookieCount}
        setCookieCount={setCookieCount}
        setMessage={setMessage}
      />
      <p className="message">{message}</p>
    </div>
  );
}
