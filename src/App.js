import logo from "./logo.svg";
import "./App.css";
import Konyv from "./publikus/konyv/konyv.js"

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      Könyváruház
      <article>
      <Konyv />
      <Konyv />
      <Konyv />
      <Konyv />
      <Konyv />
      <Konyv />
      <Konyv />
      </article>
      <footer>MZSL</footer>
    </div>
  );
}

export default App;
