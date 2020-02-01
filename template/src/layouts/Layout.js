import React, { useState, useRef, useEffect, useCallback } from "react";
import { withRouter } from "react-router-dom";
import withUser from "../hoc/withUser";
import withFirebase from "../hoc/withFirebase";
import WebViewAppBar from "./WebViewAppBar";
import MobileViewAppBar from "./MobileViewAppBar";
import SubMenuLayout from "./SubMenuLayout";
import SwipeView from "./SwipeView";

function Layout(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const [open, setOpen] = React.useState(true);
  const handler = useCallback(() => setWidth(window.innerWidth), [setWidth]);
  useEventListener("resize", handler);
  const isMobile = width <= 500;

  if (isMobile) {
    return (
      <div>
        <MobileViewAppBar {...props} isMobile={isMobile} />
        <SwipeView {...props} isMobile={isMobile}>
          {props.children}
        </SwipeView>
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex" }}>
        <WebViewAppBar {...props} open={open} setOpen={setOpen} />
        {props.tabs && <SubMenuLayout setOpen={setOpen} {...props} />}
        <div style={{ marginTop: 64, width: "100%" }}>{props.children}</div>
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

export default withUser(withFirebase(withRouter(Layout)));
