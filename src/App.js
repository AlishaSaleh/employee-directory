//import logo from './logo.svg';
import './App.css';
//import Jumbotron from './components/Jumbotron'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from './components/Container';
import { Col, Row } from 'react-bootstrap';
import TableContainer from './components/Table';

function App() {
  const jumboStyle = {
    color: "#FFFFFF",
    backgroundColor: "#6495ed",
    //textAlign: "center",
    fontFamily: "Arial"
  };
  return (
    <>
      <Jumbotron style={jumboStyle}>
        <h1>Employee Directory</h1>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <TableContainer />
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default App;
