import React from 'react';
import {Link, Route, Switch, withRouter} from "react-router-dom";
import {Container, Navbar} from "react-bootstrap";
import Init from "./Pages/Init";
import Timer from "./Pages/Timer";
import SetTimer from "./Pages/SetTimer";


const App = () => (
  <>
    <Navbar bg="dark" variant="dark" >
      <Navbar.Brand as={Link} to="/">SKIL Timer</Navbar.Brand>
    </Navbar>
    <Container style={{flex: 1}}>
        <Switch>
            <Route path={"/:id/set"} component={SetTimer}/>
            <Route path={"/:id"} component={Timer}/>
            <Route component={Init}/>
        </Switch>
    </Container>
  </>
)
export default withRouter(App);
