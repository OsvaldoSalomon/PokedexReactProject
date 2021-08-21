import {Component} from "react";
import './App.css';
import Pokecard from "./components/Pokecard";

class App extends Component{
  render() {
    return (
        <div className="App">
            <Pokecard/>
        </div>
    );
  }

}

export default App;
