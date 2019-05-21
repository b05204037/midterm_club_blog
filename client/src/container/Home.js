import React from "react";
import Topbar from "../components/Topbar";
import Menu from "../components/Menu";
import MainPic from "../components/MainPic";
import Main from "../components/MainBlock/Main";
import Teacher from "../components/MainBlock/Teacher";
import Footer from "../components/Footer";
import Calendar from "./Calendar";
import Act from "../components/MainBlock/Act";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Topbar />
          <Menu />
          <MainPic />
          <Switch>
            <Route exact path="/home" component={Main} />
            <Route exact path="/teacher" component={Teacher} />
            <Route exact path="/activity" component={Act} />
            <Redirect from="/" to="/home" />
          </Switch>
          <Calendar />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default Home;
