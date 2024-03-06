import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

(async function () {
  if (process.env.NODE_ENV === "development") {
    const worker = require("./mocks/browser");

    await worker.default.start({
      onUnhandledRequest: "bypass",
    });
  }

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
})();
