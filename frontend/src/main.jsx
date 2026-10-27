import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Streamlit, withStreamlitConnection } from "streamlit-component-lib";

function HelloReact({ args }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    Streamlit.setFrameHeight();
  });

  const click = () => {
    const next = count + 1;
    setCount(next);
    Streamlit.setComponentValue(next); // send value back to Python
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: 16, border: "2px solid #29b5e8", borderRadius: 12 }}>
      <h2 style={{ margin: 0 }}>Hello World - React</h2>
      <p>Hi {args.name}! This UI is rendered by React inside Streamlit.</p>
      <button onClick={click} style={{ padding: "8px 16px", fontSize: 16 }}>
        Clicked {count} times
      </button>
    </div>
  );
}

const Connected = withStreamlitConnection(HelloReact);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Connected />
  </React.StrictMode>
);
