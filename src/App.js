//import logo from './logo.svg';
import './App.css';
//import Jumbotron from './components/Jumbotron'
import Jumbotron from 'react-bootstrap/Jumbotron'
import SearchForm from './components/SearchForm';

function App() {
  const jumboStyle = {
    color: "#FFFFFF",
    backgroundColor: "#6495ed",
    textAlign: "center",
    fontFamily: "Arial"
  };
  return (
    <>
      <Jumbotron style={jumboStyle}>
        <h1>Employee Directory</h1>
        <SearchForm />
      </Jumbotron>
    </>
  );
}

export default App;
