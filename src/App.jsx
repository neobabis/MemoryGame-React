import 'normalize.css';
import './global.scss';
import './App.scss';
import CardGame from './CardGame';

function App() {

  return (
    <div className="App">
      <div className="container center">
        <h1 className="h1">REACT: Memory Game</h1>
        <CardGame />
        <small className="mb-20"><a href="http://www.freepik.com">Images by vectorpocket, vectorpouch, jcomp, upklyak, brgfx / Freepik</a></small>
      </div>
    </div >
  );
}

export default App;
