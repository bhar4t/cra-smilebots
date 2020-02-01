import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ClientIcon from "@material-ui/icons/AddCircleOutline";
import PostAdd from "@material-ui/icons/PostAdd";
import Tooltip from "@material-ui/core/Tooltip";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import { GlobalHotKeys } from "react-hotkeys";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
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
  }
}));

const keyMap = {
  DASHBOARD: { name: "Expand square area", sequence: "1" },
  MODULES: { name: "Expand square area", sequence: "2" },
  USERANDPERMISSION: { name: "Expand square area", sequence: "3" }
};

function DrawerContent(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.open);
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const handlePageTitle = (title, index) => setSelectedIndex(index);
  const handleDrawerOpen = () => {
    setOpen(true);
    if (props.setOpen) props.setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
    if (props.setOpen) props.setOpen(false);
  };
  const handleShortcut = {
    DASHBOARD: event => props.history.push("/dashboard"),
    MODULES: event => props.history.push("/modules"),
    USERANDPERMISSION: event => props.history.push("/userandpermmision")
  };
  const selectedStyle = path => ({
    color: props.match.path === path ? "blue" : ""
  });
  const listItems = [
    {
      path: "/dashboard",
      title: "Dashboard",
      access: "masters",
      icon: path => <PostAdd style={selectedStyle(path)} />
    },
    {
      path: "/modules",
      title: "Modules",
      access: "branches",
      icon: path => <ClientIcon style={selectedStyle(path)} />
    },
    {
      path: "/userandpermmision",
      title: "Users & Permissions",
      access: "usersAndPermissions",
      icon: path => <SupervisorAccount style={selectedStyle(path)} />
    }
  ];

  return (
    <div>
      <GlobalHotKeys keyMap={keyMap} handlers={handleShortcut} />
      <div className={classes.listMainDiv}>
        <List disablePadding>
          <div className={classes.divBigAvatar}>
            <Tooltip
              title={
                <p style={{ textAlign: "center" }}>
                  {props?.user?.displayName}
                  <br />
                  {props?.user?.email}
                </p>
              }
              placement="right-start"
            >
              <Avatar
                alt={props?.user?.displayName}
                src={props?.user?.photoURL}
                className={classes.profile}
              />
            </Tooltip>
            <Typography variant="h6" noWrap>
              {props.open && props?.user?.displayName}
            </Typography>
          </div>
          <Divider variant="middle" />
          {listItems.map((list, index) => {
            if (props?.user?.access?.[list.access]) {
              return (
                <ListItem
                  button
                  selected={selectedIndex === index}
                  onClick={e => {
                    e.preventDefault();
                    handlePageTitle(list.title, index);
                    props.history.push(list.path);
                  }}
                  style={selectedStyle(list.path)}
                >
                  <ListItemIcon>
                    <Tooltip title={list.title} placement="right-start">
                      {list.icon(list.path)}
                    </Tooltip>
                  </ListItemIcon>
                  <ListItemText primary={list.title} />
                </ListItem>
              );
            } else return null;
          })}
        </List>
      </div>
      <div className={classes.toolbar}>
        <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
          <Tooltip
            title={!props.open ? "Click to Expand" : "Click to Collapse"}
            placement="right-start"
          >
            {!props.open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </Tooltip>
        </IconButton>
      </div>
    </div>
  );
}

export default withRouter(DrawerContent);
