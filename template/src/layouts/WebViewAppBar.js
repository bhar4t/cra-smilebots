import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import DrawerContents from "../components/layoutComponents/DrawerContents";
import ProjectName from "../components/layoutComponents/ProjectName";
import RightIcon from "../components/layoutComponents/RightIcon";

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
  rightIcon: {
    position: "absolute",
    right: 24
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
            // style={{ background: "transparent", border: "1px solid white" }}
          >
            AS
          </Avatar>
          <ProjectName {...props} />

          <div className={classes.rightIcon}>
            <RightIcon {...props} />
          </div>
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
