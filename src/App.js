import {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import useContentful from './components/useContentful';

function App() {
  const [recipes, setRecipes] = useState([])
  const {getRecipes} = useContentful()

  console.log(process.env.REACT_APP_MY_ENVIRONMENT_VARIABLE)

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
