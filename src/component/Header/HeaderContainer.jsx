import React from "react";
import { connect } from "react-redux";
import Header from "./Header";

class HeaderContainer extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps, {})(HeaderContainer);
