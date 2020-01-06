import React from "react";
import { withRouter } from "react-router-dom";
import AppBar from "material-ui/AppBar";

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <AppBar />
        {children}
      </div>
    );
  }
}

export default withRouter(Layout);
