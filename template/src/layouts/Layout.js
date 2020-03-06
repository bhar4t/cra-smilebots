import React, { useState, useRef, useEffect, useCallback } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import WebViewAppBar from "./WebViewAppBar";
import MobileViewAppBar from "./MobileViewAppBar";
import SubMenuLayout from "./SubMenuLayout";
import SwipeView from "./SwipeView";
import { withRouter } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

function Layout(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const [open, setOpen] = React.useState(true);
  const handler = useCallback(() => setWidth(window.innerWidth), [setWidth]);
  useEventListener("resize", handler);
  const isMobile = width <= 500;

  if (isMobile) {
    return (
      <ThemeProvider theme={theme}>
        <MobileViewAppBar {...props} isMobile={isMobile} />
        <SwipeView {...props} isMobile={isMobile}>
          {props.children}
        </SwipeView>
      </ThemeProvider>
    );
  } else {
    return (
      <div style={{ display: "flex" }}>
        <ThemeProvider theme={theme}>
          <WebViewAppBar {...props} open={open} setOpen={setOpen} />
          {props.tabs && <SubMenuLayout setOpen={setOpen} {...props} />}
          <div style={{ marginTop: 64, width: "100%" }}>{props.children}</div>
        </ThemeProvider>
      </div>
    );
  }
}

function useEventListener(eventName, handler, element = window) {
  const savedHandler = useRef();
  useEffect(
    () => {
      savedHandler.current = handler;
    },
    [handler]
  );

  useEffect(
    () => {
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;
      const eventListener = event => savedHandler.current(event);
      element.addEventListener(eventName, eventListener);
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element]
  );
}

export default withRouter(Layout);
