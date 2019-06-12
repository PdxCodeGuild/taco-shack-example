import React from "react";

const Container = (props) => (
  <div style={{maxWidth: props.maxWidth || "1024px", margin: "0 auto", width: "100%"}} {...props}>
    {props.children}
  </div>
)

export default Container;