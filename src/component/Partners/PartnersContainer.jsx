import React from "react";
import { connect } from "react-redux";
import Partners from "./Partners";

class PartnersContainer extends React.Component {
  render() {
    return (
      <div>
        <Partners partnersLogo={this.props.partnersLogo} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  partnersLogo: state.partnersPage.partnersLogo,
});

export default connect(mapStateToProps, {})(PartnersContainer);
