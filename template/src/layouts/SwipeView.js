import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from "@material-ui/icons/ArrowBack";
import MoreVert from "@material-ui/icons/MoreVert";
import SearchBar from "../components/layoutComponents/SearchBar";
import SubMenuList from "../components/layoutComponents/SubMenuList";

const styles = {
  container: isMobile => ({
    width: isMobile ? "100%" : 270,
    marginTop: isMobile ? 0 : 64
  }),
  customBar: {
    display: "flex",
    height: 56,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  }
};

function SwipeView(props) {
  const [searchedData, setSearchedData] = useState(null);
  const [swipeableIndex, setSwipeableIndex] = useState(0);
  const [selectedIndex, setIndex] = useState(-1);
  const [tabIndex, setTab] = useState(0);
  const handleSearch = (e, newValue) => setSearchedData(newValue);
  const customBarBack = e => {
    e.preventDefault();
    setSearchedData(null);
    setIndex(-1);
    setSwipeableIndex(0);
    props.history.goBack();
  };

  return (
    <div style={styles.container(props.isMobile)}>
      {props.tabs ? (
        <SwipeableViews
          index={swipeableIndex}
          onChangeIndex={setSwipeableIndex}
        >
          <div>
            {props.search && (
              <SearchBar
                handleSearch={handleSearch}
                searchedData={searchedData}
                {...props.search}
              />
            )}
            <SubMenuList
              {...props}
              setSwipeableIndex={() => setSwipeableIndex(1)}
              setIndex={setIndex}
              setTab={setTab}
              searchedData={searchedData}
            />
          </div>
          <div>
            <UseCustomBar
              {...props}
              selectedIndex={selectedIndex}
              tabIndex={tabIndex}
              customBarBack={customBarBack}
            />
            {props.children}
          </div>
        </SwipeableViews>
      ) : (
        props.children
      )}
      {props.tabs && props.fabClickHandler && swipeableIndex === 0 && (
        <Fab
          style={{ position: "fixed", bottom: 24, right: 24 }}
          color="primary"
          aria-label="add"
          size="large"
          onClick={e => {
            e.preventDefault();
            setSwipeableIndex(1);
            setIndex(-1);
            props.fabClickHandler();
          }}
        >
          <AddIcon />
        </Fab>
      )}
    </div>
  );
}

const UseCustomBar = props => {
  const value =
    props?.tabs?.[props?.tabIndex]?.data?.[props?.selectedIndex]?.[
      props?.tabs?.[props?.tabIndex]?.primaryField
    ];
  return (
    <div style={styles.customBar}>
      <IconButton onClick={props.customBarBack}>
        <ArrowBack />
      </IconButton>
      <span>{value}</span>
      <IconButton>
        <MoreVert />
      </IconButton>
    </div>
  );
};

export default withRouter(SwipeView);
