import React from "react";
import { Route } from "react-router-dom";
import DemoFullWidthPaper from "../components/DemoFullWidthPaper";

function UserAndPermissions(props) {
  const users = [
    { name: "Rakesh", email: "rakesh@smilebots.com" },
    { name: "Bharat Sahu", email: "bharat@gmail.com" },
    { name: "Shahid", email: "shahid@smilebots.com" }
  ];
  return (
    <Route
      exact
      path={["/userandpermmision", "/userandpermmision/user/:id"]}
      render={props => <DemoFullWidthPaper {...props} users={users} />}
    />
  );
}

export default UserAndPermissions;
