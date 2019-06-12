import React from "react";

const Show = (props) => {
  return (
    <React.Fragment>
      {(props.if) && (
        props.children
      )}
    </React.Fragment>
  );
};

export default Show;