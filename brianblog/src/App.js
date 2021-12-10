import { Container, Row } from "reactstrap";
/*import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";*/
import { Col } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Formulario from "./Components/Formulario";
import Publicacion from "./Components/Publicaciones";

function App() {
  return (
    <div className="App">
      <center>
        <h2> Welcome To Brian's Posts</h2>
        <button className="btn btn-info">Cerrar Sesion</button>
      </center>

      <Container>
        <Row>
          <Col xs="6">
            <Formulario />
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col xs="12">
            <Publicacion />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
