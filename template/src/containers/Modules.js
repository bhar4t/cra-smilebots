import React from "react";
import { Route } from "react-router-dom";
import Module from "../components/Module";

function Modules(props) {
  const users = [
    { name: "Rakesh", email: "rakesh@smilebots.com" },
    { name: "Bharat Sahu", email: "bharat@gmail.com" },
    { name: "Shahid", email: "shahid@smilebots.com" }
  ];
  return (
    <Route
      exact
      path={["/modules", "/modules/user/:id", "/modules/new"]}
      render={props => <Module {...props} users={users} />}
    />
  );
}

export default Modules;
