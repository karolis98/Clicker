import React, { useEffect, useState, useRef } from "react";

function Clicker() {
  const [count, setCount] = useState(0);
  const [wallet, setWallet] = useState(0);
  const [increment, setIncrement] = useState(1);
  const clickButtonRef = useRef(null);
  const intervalRef = useRef(null);

  const handleClick = () => {
    setCount((prevCount) => prevCount + increment);
    setWallet((prevWallet) => prevWallet + increment);
  };

  const resetCount = () => {
    setCount(0);
  };

  const upgradeClick = () => {
    setIncrement((prevIncrement) => prevIncrement * 1.0002);
  };

  const startAutoClick = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        if (clickButtonRef.current) {
          clickButtonRef.current.click();
        }
      }, 10000);
    }
  };

  useEffect(() => {
    startAutoClick();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="div">
      <p>
        Wallet balance: <strong>{wallet.toFixed(2)}</strong>click
      </p>
      <h1>Clicker App</h1>
      <p className="count">
        You clicked <strong>{count.toFixed(2)}</strong> times
      </p>
      <p className="increment">
        Current increment: <strong>{increment.toFixed(4)}</strong>
      </p>
      <button className="ClickMeBtn" ref={clickButtonRef} onClick={handleClick}>
        Click Me!
      </button>
      <button className="ResetBtn" onClick={resetCount}>
        Reset
      </button>
      <button className="ClickMeBtn" onClick={upgradeClick}>
        Upgrade
      </button>
    </div>
  );
}

export default Clicker;
