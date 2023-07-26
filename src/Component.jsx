import React, { useEffect, useState, useRef } from "react";

function Component() {
  const [counter, setCounter] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    ref.current = setInterval(() => {
      console.log(counter);
      setCounter(0);
    }, 100);

    return () => {
      clearInterval(ref.current);
    };
  }, [counter]);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      Child component {counter}
      <span>
        <button onClick={handleClick}>Click</button>
      </span>
    </div>
  );
}

export default Component;
