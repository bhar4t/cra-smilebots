import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import Tooltip from "@material-ui/core/Tooltip";
import DrawerContents from "../components/DrawerContents";
import ProjectName from "../components/ProjectName";
const drawerWidth = 270;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
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
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 0,
    right: 5
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  profile: {
    width: 50,
    height: 50
  },
  listMainDiv: {
    marginTop: 64
  },
  divBigAvatar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 10
  },
  selected: {
    backgroundColor: "#eb4000"
  },
  active: {
    backgroundColor: "red"
  }
}));

export default function WebViewAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Avatar
            variant="rounded"
            alt="Project Name"
            className={classes.logoAvatar}
            onClick={e => props.setOpen(!props.open)}
            style={{ background: "transparent", border: "1px solid white" }}
          >
            AS
          </Avatar>
          <ProjectName {...props} />
          <Tooltip title="Click to Sign out" placement="bottom">
            <LogoutIcon
              onClick={e => {
                e.preventDefault();
                props.firebase.logOut(props);
              }}
              style={{
                color: "antiquewhite",
                position: "absolute",
                right: 100
              }}
            />
          </Tooltip>
          <Typography
            fontSize={10}
            noWrap
            style={{ position: "absolute", right: 10 }}
          >
            SIGN OUT
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: props.open,
          [classes.drawerClose]: !props.open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: props.open,
            [classes.drawerClose]: !props.open
          })
        }}
        open={props.open}
      >
        <div style={{ height: 64 }} />
        <DrawerContents {...props} />
      </Drawer>
    </div>
  );
}
