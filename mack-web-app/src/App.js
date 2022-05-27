import './App.css';
import Board from './components/Board';
import Redux, { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

const store = createStore(reducer);

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hardcore Chess</h1>
        <h4>Click any piece once to select it for moving.</h4>
        <h4>
          Click anywhere on the board to move your current active piece, making a capture if possible.
        </h4>
        <h4>Be warned: the board will let you make any move, legal or no!</h4>
        <Board />
      </div>
    </Provider>
  );
}

export default App;
