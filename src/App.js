import { AddCart } from './AddCart';
import './App.css';
import { Provider } from 'react-redux';
import store from './Store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <AddCart/>
      </Provider>
    </div>
  );
}
export default App;
