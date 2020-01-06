import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../constants/routes";

const BottomNavigation = () => (
  <div>
    <ul>
      <li>
        <Link to={`${ROUTES.EXPLORE}/1234`}>Explore</Link>
      </li>
      <li>
        <Link to={ROUTES.VEHICLES}>Vehicles</Link>
      </li>
      <li>
        <Link to={ROUTES.INBOX}>Inbox</Link>
      </li>
      <li>
        <Link to={ROUTES.PROFILE}>Profile</Link>
      </li>
    </ul>
  </div>
);

export default BottomNavigation;
