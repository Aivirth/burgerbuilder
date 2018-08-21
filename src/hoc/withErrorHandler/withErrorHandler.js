import React from "react";

import Modal from "../../components/UI/Modal/Modal";

export default WrappedComponent => {
  return props => {
    return (
      <React.Fragment>
        <Modal>Something didn't work</Modal>
        <WrappedComponent {...props} />
      </React.Fragment>
    );
  };
};
