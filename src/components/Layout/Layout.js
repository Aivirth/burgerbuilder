import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

export default class extends Component {
  state = {
    showSideDrawer: false
  };
  SideDrawerClosedhandler = () => {
    this.setState({
      showSideDrawer: !this.state.showSideDrawer
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar openMenu={this.SideDrawerClosedhandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.SideDrawerClosedhandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}
