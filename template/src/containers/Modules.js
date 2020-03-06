import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Module from "../components/Module";

function Modules() {
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
    <Route
      exact
      path={["/modules", "/modules/user/:id", "/modules/new"]}
      render={props => <Module {...props} users={users} />}
    />
  );
}

export default Modules;
