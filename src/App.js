import logo from "./logo.svg";
import "./App.css";
import Result from "./components/result/Result";
import Increment from "./components/increment/Increment";
import Decrement from "./components/decrement/Decrement";
import Reset from "./components/reset/Reset";

function App() {
  return (
    <div className="App">
      <div className="counter">
        <h2 className="counter__title">Counter</h2>
        <Result />
        <div className="counter__info">
          <Increment />
          <Decrement />
        </div>
        <Reset />
      </div>
    </div>
  );
}

export default App;
