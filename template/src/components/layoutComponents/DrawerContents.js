import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import StarBorder from "@material-ui/icons/StarBorder";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ClientIcon from "@material-ui/icons/AddCircleOutline";
import PostAdd from "@material-ui/icons/PostAdd";
import Tooltip from "@material-ui/core/Tooltip";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import { GlobalHotKeys } from "react-hotkeys";
import withUser from "../../hoc/withUser";
import StaticVersionDisplay from "./StaticVersionDisplay";

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
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 0,
    right: 5,
    width: 240
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
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
  const [innerMenu, setInnerMenu] = React.useState(false);
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
    DASHBOARD: e => props.history.push("/dashboard"),
    MODULES: e => props.history.push("/modules"),
    USERANDPERMISSION: e => props.history.push("/userandpermmision")
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
      icon: path => <SupervisorAccount style={selectedStyle(path)} />,
      childRoutes: [
        {
          path: "/userandpermmision",
          title: "Users",
          icon: path => <StarBorder style={selectedStyle(path)} />
        },
        {
          path: "/userandpermmision/settings",
          title: "Settings",
          icon: path => <StarBorder style={selectedStyle(path)} />
        }
      ]
    }
  ];

  return (
    <div>
      <GlobalHotKeys keyMap={keyMap} handlers={handleShortcut} />
      <div className={classes.listMainDiv}>
        <List disablePadding className={classes.root}>
          {listItems.map((list, index) => {
            if (props?.user?.access?.[list.access]) {
              return (
                <>
                  <ListItem
                    button
                    selected={selectedIndex === index}
                    onClick={
                      typeof list.childRoutes === "undefined"
                        ? e => {
                            e.preventDefault();
                            handlePageTitle(list.title, index);
                            props.history.push(list.path);
                          }
                        : e => {
                            e.preventDefault();
                            e.stopPropagation();
                            setInnerMenu(!innerMenu);
                          }
                    }
                    style={selectedStyle(list.path)}
                  >
                    <ListItemIcon>
                      <Tooltip title={list.title} placement="right-start">
                        {list.icon(list.path)}
                      </Tooltip>
                    </ListItemIcon>
                    <ListItemText primary={list.title} />
                    {typeof list?.childRoutes !== "undefined" ? (
                      innerMenu ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )
                    ) : null}
                  </ListItem>
                  {typeof list?.childRoutes !== "undefined" && (
                    <Collapse in={innerMenu} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {list?.childRoutes?.map((e, i) => (
                          <ListItem
                            button
                            className={classes.nested}
                            onClick={evt => {
                              evt.preventDefault();
                              // handlePageTitle(e.title, i);
                              props.history.push(e.path);
                            }}
                          >
                            <ListItemIcon>{e?.icon(e?.path)}</ListItemIcon>
                            <ListItemText primary={e.title} />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </>
              );
            } else return null;
          })}
        </List>
      </div>

      <div className={classes.toolbar}>
        {props.open && <StaticVersionDisplay />}
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

export default withRouter(withUser(DrawerContent));
