import MiComponente from './components/CallbackMemo';
import './App.css';
import EjemploUseBoolean from './components/EjemploUseBoolean';

function App() {
  const names = ["Julián", "Princesa"];
  return (
    <div className="App">
      <EjemploUseBoolean />
      {/*<MiComponente names={names} />*/}
    </div>
  );
}

export default App;
