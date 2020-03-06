import React from "react";

const styles = {
  container: {
    whiteSpace: "nowrap",
    fontSize: 12,
    color: "lightblue",
    paddingRight: 45
  }
};

export default function StaticVersionDisplay() {
  return <span style={styles.container}>Version 1.1.2</span>;
}
