import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import {Col, Container, Navbar, Row} from "react-bootstrap";
import Init from "./Pages/Init";
import Timer from "./Pages/Timer";


const App = () => (
  <>
    <Navbar bg="light" >
      <Navbar.Brand as={Link} to="/">SKIL Timer</Navbar.Brand>
    </Navbar>
    <Container>
        <Switch>
            <Route path={"/:id"} component={Timer}/>
            <Route component={Init}/>
        </Switch>
    </Container>
  </>
)
export default App;
