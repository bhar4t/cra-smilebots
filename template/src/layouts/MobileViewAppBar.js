import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import DrawerContents from "../components/DrawerContents";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
}));

function ButtonAppBar(props) {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = open => e => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) return;
    setState(open);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Admin Starter
          </Typography>
          <Button
            onClick={e => {
              e.preventDefault();
              props.firebase.logOut(props);
            }}
            color="inherit"
          >
            Sign out
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer open={state} onClose={toggleDrawer(false)}>
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <DrawerContents {...props} />
        </div>
      </Drawer>
    </div>
  );
}

export default ButtonAppBar;
