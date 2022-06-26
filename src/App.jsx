import VariableCSS from './AppStyle.jsx';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='App'>
      <VariableCSS>
        <HomePage />
      </VariableCSS>
    </div>
  );
}

export default App;
