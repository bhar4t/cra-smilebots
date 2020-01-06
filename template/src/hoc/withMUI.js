import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { orange800 } from "material-ui/styles/colors";
import { orange300 } from "material-ui/styles/colors";

// A theme with custom primary and secondary color.
// It's optional.
const theme = getMuiTheme({
  palette: {
    primary: orange800,
    secondary: orange300
  }
});

function withMUI(Component) {
  function WithMUI(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithMUI;
}

export default withMUI;
