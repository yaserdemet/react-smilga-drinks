import "./App.css";
import React from "react";
import AppRouter from "./router/AppRouter";
import ContextApi from "./context/ContextApi";

function App() {
  return (
    <div className="App">
      <ContextApi>
        <AppRouter />
      </ContextApi>
    </div>
  );
}

export default App;
