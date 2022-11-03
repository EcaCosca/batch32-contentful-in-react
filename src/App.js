import logo from './logo.svg';
import './App.css';
import Recipes from './components/Recipes';

function App() {
  console.log(process.env.CONTENTFUL)

  return (
    <div className="App">
      <header className="App-header">
        <Recipes />
      </header>
    </div>
  );
}

export default App;
