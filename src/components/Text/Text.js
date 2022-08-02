import React from "react";

const Text = ({ children, margin = 20 }) => {
  return <p style={{ margin: margin }}>{children}</p>;
};

export default Text;
