import "./App.scss";
import "./styles/style.scss"
import Header from "./components/Header";
import Button from "./components/Button";
import Paper from "./images/icon-paper.svg";
import Rock from "./images/icon-rock.svg";
import Scissors from "./images/icon-scissors.svg";

function App() {
  return (
    <div className="App">
      <Header score ="12"></Header>
      <main>
        <div className="boton">
          <Button tipo="paper" imagen={Paper}></Button>
        </div>
        <div className="boton">
          <Button tipo="scissors" imagen={Scissors}></Button>
        </div>
        <div className="boton">
        <Button tipo="rock" imagen={Rock}></Button>
        </div>
      </main>
      <div className="contenedor-btn-rules">
        <button className="btn-rules">RULES</button>
      </div>
    </div>
  );
}

export default App;
