import {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Recipes from './components/Recipes';
import useContentful from './components/useContentful';

function App() {
  const [recipes, setRecipes] = useState([])
  const {getRecipes} = useContentful()

  useEffect(()=>{
    getRecipes().then(res=>console.log(res))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
