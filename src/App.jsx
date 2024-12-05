import React, { useEffect, useState, useRef } from "react";

function Clicker() {
  const [count, setCount] = useState(0);
  const clickButtonRef = useRef(null);

  const handleClick = () => {
    setCount((prevCont) => prevCont + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const startAutoClick = () => {
    setInterval(() => {
      if (clickButtonRef.current) {
        clickButtonRef.current.click();
      }
    }, 10000);
  };

  useEffect(() => {
    startAutoClick();
  }, []);

  return (
    <div className="div">
      <h1>Clicker App</h1>
      <p className="count">You clicked {count} times</p>
      <button className="ClickMeBtn" ref={clickButtonRef} onClick={handleClick}>
        Click Me!
      </button>
      <button className="ResetBtn" onClick={resetCount}>
        Reset
      </button>
    </div>
  );
}

export default Clicker;
