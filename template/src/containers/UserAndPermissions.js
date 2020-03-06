import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import DemoFullWidthPaper from "../components/DemoFullWidthPaper";
import DemoFullWidthPaperSettings from "../components/DemoFullWidthPaperSettings";

function UserAndPermissions() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        const users = json.map((element, index) => {
          const user = element;
          user.logo = `https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-${index + 10}-512.png`
          return user;
        });
        setUsers(users);
      })
  }, [])

  return (
    <>
      <Route
        exact
        path={["/userandpermmision", "/userandpermmision/user/:id"]}
        render={props => <DemoFullWidthPaper {...props} users={users} />}
      />
      <Route
        exact
        path={["/userandpermmision/settings"]}
        render={props => (
          <DemoFullWidthPaperSettings {...props} users={users} />
        )}
      />
    </>
  );
}

export default UserAndPermissions;
