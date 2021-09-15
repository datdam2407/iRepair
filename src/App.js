import "./App.css";

import Header from "./components/Header/headerPage";
// import Menu from "./components/Menu";

import { Row, Col } from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Admin from "./components/MainContent/MainContent";
// import Login2 from "./components/Login/Login";

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Row className="fixed">
          <Col>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/Admin" component={Admin} />
              {/* <Route path="/Admin" component={use} /> */}
            </Switch>
          </Col>
        </Row>
      </Router>
    </>
  );
}

export default App;