import { useState, useEffect } from "react";

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

  function buyMagicFlour() {
    if (cookieCount >= 50) {
      setCookieCount(cookieCount - 50);
      setMessage("Magic Flour purchased!");
    } else {
      setMessage("Not enough cookies for Magic Flour!");
    }
  }

  function buySpecialChocolate() {
    if (cookieCount >= 100) {
      setCookieCount(cookieCount - 100);
      setMessage("Special Chocolate purchased!");
    } else {
      setMessage("Not enough cookies for Special Chocolate!");
    }
  }

  return (
    <dev>
      <h1>Cookie Clicker Game</h1>
      <p>Cookies: {cookieCount}</p>
      <button onClick={handleClick}>Click for Cookies</button>
      <h2>Upgrades</h2>
      <button onClick={buyMagicFlour}>Buy Magic Flour (50 Cookies)</button>
      <button onClick={buySpecialChocolate}>
        Buy Special Chocolate (100 Cookies)
      </button>
      <p>{message}</p>
    </dev>
  );
}
