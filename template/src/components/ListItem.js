import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";

function ListItemElement({
  primary,
  secondary,
  listClickHandler,
  index,
  selectedIndex
}) {
  return (
    <div>
      <ListItem
        alignItems="flex-start"
        style={{
          backgroundColor: selectedIndex === index ? "white" : ""
        }}
        onClick={e => {
          e.preventDefault();
          listClickHandler(index);
        }}
      >
        <ListItemAvatar>
          <Avatar alt={primary}>{primary?.substring(0, 1)}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={primary} secondary={secondary} />
      </ListItem>
      <Divider />
    </div>
  );
}

export default ListItemElement;
