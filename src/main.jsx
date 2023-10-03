import React from "react";
import ReactDOM from "react-dom/client";
import Desktop from "./Desktop.jsx";
import Mobile from "./Mobile.jsx"
import { BrowserRouter } from "react-router-dom";

const isMobile = /(iPhone|iPad|Android|Windows Phone)/i.test(
  navigator.userAgent
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/*isMobile?<Mobile></Mobile> : <Desktop></Desktop>*/}
      <Mobile></Mobile>
    </BrowserRouter>
  </React.StrictMode>,
);
