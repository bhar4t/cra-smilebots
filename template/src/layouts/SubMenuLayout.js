import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import SearchBar from "../components/SearchBar";
import SubMenuList from "../components/SubMenuList";

const styles = {
  container: isMobile => ({
    height: isMobile ? 0 : window.innerHeight - 64,
    width: isMobile ? "100%" : 270,
    marginTop: isMobile ? 0 : 64,
    position: "relative"
  }),
  fab: { position: "absolute", bottom: 16, right: 16 }
};

function SubMenuLayout(props) {
  const [searchedData, setSearchedData] = useState(null);
  const handleSearch = (e, newValue) => {
    setSearchedData(newValue);
  };

  return (
    <div style={styles.container(props.isMobile)}>
      {props.search && (
        <SearchBar
          handleSearch={handleSearch}
          searchedData={searchedData}
          {...props.search}
        />
      )}
      <SubMenuList {...props} searchedData={searchedData} />
      {props.tabs && props.fabClickHandler && (
        <Fab
          style={styles.fab}
          color="primary"
          aria-label="add"
          size="medium"
          onClick={e => {
            e.preventDefault();
            if (props.setOpen) props.setOpen(false);
            props.fabClickHandler();
          }}
        >
          <AddIcon />
        </Fab>
      )}
    </div>
  );
}

export default withRouter(SubMenuLayout);
