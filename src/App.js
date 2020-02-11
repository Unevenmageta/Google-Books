import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './../src/components/NavBar/Navbar'
import Search from './../src/components/Search/Search'
import Jumbotron from './../src/components/Jumbotron/Jumbotron'
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

