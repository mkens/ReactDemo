import React, { Component, Fragment } from "react";
import LogIn from "./LogIn";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";

class CheckLogIn extends Component {
  state = {
    custDetail: [
      {
        Name: "",
        Email: "",
        IsLoggedIn: "",
      },
    ],
  };

  setLoginDetail = (object) => {
      debugger;
  return  this.setState({ custDetail: object });
  };

  render() {
    if (this.state.isLogIn) {
      return (
        <Fragment>
          <Header></Header>
          <Sidebar></Sidebar>
          <Content></Content>
        </Fragment>
      );
    } else {
      return <LogIn setLoginDetailProps="setLoginDetail"></LogIn>;
    }
  }
}

export default CheckLogIn;
