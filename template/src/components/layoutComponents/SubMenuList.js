import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import List from "@material-ui/core/List";
import ListItem from "./ListItem";
import "./styles.css";

const styles = {
  fab: { position: "absolute", bottom: 16, right: 16 },
  tab: (isMobile, length) => ({
    minWidth: isMobile ? `${100 / length}%` : 270 / length
  }),
  paper: { color: "blue", backgroundColor: "#f8f8f8" },
  container: (isMobile, search) => ({
    height: window.innerHeight - ((search ? 72 : 0) + (isMobile ? 56 : 64)),
    overflow: "auto"
  })
};

function TabPanel(props) {
  const { children, value, index } = props;
  if (value === index) return children;
  else return null;
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

export default function SubMenuList(props) {
  const [selectedIndex, setIndex] = useState(-1);
  const [tabIndex, setTab] = useState(0);
  useEffect(
    () => {
      const index = props?.tabs?.[tabIndex]?.data?.findIndex(
        e => e === props?.searchedData
      );
      if (index > -1) {
        setIndex(index);
        if (props.setOpen) props.setOpen(false);
        if (props.setIndex) props.setIndex(index);
        if (props.setSwipeableIndex) props.setSwipeableIndex(1);
        props.history.push(`${props?.tabs?.[tabIndex]?.route}/${index}`);
      }
    },
    [props.searchedData, tabIndex, props]
  );
  const handleTabsChange = (e, value) => {
    setTab(value);
    setIndex(-1);
    if (props.setTab) props.setTab(value);
    if (props.setIndex) props.setIndex(-1);
  };
  const listClickHandler = index => {
    setIndex(index);
    if (props.setOpen) props.setOpen(false);
    if (props.setIndex) props.setIndex(index);
    if (props.setSwipeableIndex) props.setSwipeableIndex(1);
    props.history.push(`${props?.tabs?.[tabIndex]?.route}/${index}`);
  };
  return (
    <div
      className="list"
      style={styles.container(props.isMobile, props.search)}
    >
      <Paper square style={styles.paper}>
        <Tabs
          value={tabIndex}
          indicatorColor="primary"
          color="white"
          onChange={handleTabsChange}
        >
          {props?.tabs?.map((tab, index) => (
            <Tooltip key={`${'Tooltip'}-${index}`} title={tab.tooltip} placement="top">
              <Tab
                key={`TAB-${tab}-${index}`}
                label={tab.label}
                {...a11yProps(index)}
                style={styles.tab(props.isMobile, props.tabs.length)}
              />
            </Tooltip>
          ))}
        </Tabs>
      </Paper>
      {props?.tabs?.map((tab, i) => (
        <TabPanel key={`${'TabPanel'}-${i}`} value={tabIndex} index={i}>
          <List key={`${'List'}-${i}`} disablePadding>
            {props?.tabs?.[i]?.data?.map((menu, index) => (
              <ListItem
                key={`ListItem-${i}-${index}`}
                selectedIndex={selectedIndex}
                index={index}
                listClickHandler={listClickHandler}
                primary={menu[tab.primaryField]}
                secondary={menu[tab.secondaryField]}
                avatar={menu[tab.avatarField]}
                color={
                  tab?.decorators?.colors?.[
                    tab?.decorators?.options.findIndex(
                      e => e === menu?.[tab?.decorators?.conditionField]
                    )
                  ]
                }
              />
            ))}
          </List>
        </TabPanel>
      ))}
    </div>
  );
}
