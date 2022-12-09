import Weather from "./Weather.js";

import "./Weather.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="amarillo" />
      </div>
    </div>
  );
}

export default App;
