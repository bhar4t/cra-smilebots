import React from "react";
import Typography from "@material-ui/core/Typography";

const ProjectName = props => (
  <Typography
    variant="h6"
    noWrap
    style={{ paddingLeft: props.isMobile ? 0 : 16 }}
  >
    {props.title || `Admin Starter`}
  </Typography>
);

export default ProjectName;
