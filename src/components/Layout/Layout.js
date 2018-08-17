import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

export default class extends Component {
  state = {
    showSideDrawer: true
  };
  SideDrawerClosedhandler = () => {
    this.setState({
      showSideDrawer: false
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.SideDrawerClosedhandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}
