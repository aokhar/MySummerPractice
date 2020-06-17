import React, { Component } from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css"
import {Route,Switch,BrowserRouter as Router,Link} from 'react-router-dom'
import AboutMe from "./Pages/AboutMe"
import Icon from "./Usage/Ico/Logo.png";
import MyMotivate from "./Pages/MyMotivate";
import Video from "./Pages/Video"

function App() {
  return (
      <>
      < Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  fixed="top" >
        <Container>
          <Navbar.Brand href="/">
              <img
               src={Icon}
               height="75"
               weight="75"
               className="d-inline-block align-top"
               alt="logo"
              />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="mr-auto" >
              <Nav.Link href="/aboutMe" > <font size="4"> Про мене</font></Nav.Link>
              <Nav.Link href="/video">  <font size="4">Відео</font></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

          < Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  fixed="bottom">
              <Container>
                  <Nav className="mr-auto" >
                      <Nav.Link href="https://dal15.klasna.com/" ><font size="4">Моя школа</font></Nav.Link>
                      <Nav.Link href="http://www.nmu.org.ua/ua/"><font size="4">Мій університет</font></Nav.Link>
                      <Nav.Link href="http://pzks.nmu.org.ua/ua/"><font size="4">Моя кафедра</font></Nav.Link>
                  </Nav>
              </Container>
          </Navbar>
<Router>
    <Switch>
        <Route exact path="/" exact component ={MyMotivate}/>
        <Route exact path="/video" exact component ={Video}/>
        <Route exact path="/aboutMe" exact component ={AboutMe}/>
    </Switch>
</Router>
          </>
  );
}

export default App;
