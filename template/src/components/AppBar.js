import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/Toolbar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import Tooltip from "@material-ui/core/Tooltip";
import withFirebase from "../hoc/withFirebase";

const drawerWidth = 270;

const useStyles = makeStyles(theme => ({
  divBigAvatar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 10
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 0,
    right: 5
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  logout: {
    color: "antiquewhite",
    position: "absolute",
    right: 100
  },
  avatar: { background: "transparent", border: "1px solid white" },
  typo: { position: "absolute", right: 10 }
}));

function CustomAppBar(props) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Avatar
          variant="rounded"
          alt="AS"
          className={classes.logoAvatar}
          onClick={
            !props.open ? props.handleDrawerOpen : props.handleDrawerClose
          }
          style={classes.avatar}
        >
          AS
        </Avatar>
        <Typography variant="h6" noWrap style={{ padding: 15 }}>
          Admin Starter
        </Typography>
        <Tooltip title="Click to Sign out" placement="bottom">
          <LogoutIcon
            onClick={e => {
              e.preventDefault();
              props.firebase.logOut(props);
            }}
            style={classes.logout}
          />
        </Tooltip>
        <Typography fontSize={10} noWrap style={classes.typo}>
          SIGN OUT
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default withFirebase(CustomAppBar);
