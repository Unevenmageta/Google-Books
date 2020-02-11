import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/Navbar'
import Search from './components/Search/Search'
import Jumbotron from './components/Jumbotron/Jumbotron'
class App extends Component {

  render() {
    
    return (
      <>
      <Navbar/>
      <Search/>
      </>
      
      );

    
    }
}

export default App;

