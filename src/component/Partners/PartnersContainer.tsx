import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/reduxStore";
import Partners from "./Partners";

type partnersLogoType = {
  src: string
  alt: string
  id: number
}

type PartnersContainerType = {
  partnersLogo: Array<partnersLogoType>
}

class PartnersContainer extends React.Component<PartnersContainerType> {
  render() {
    return (
      <div>
        <Partners partnersLogo={this.props.partnersLogo} />
      </div>
    );
  }
}

let mapStateToProps = (state:AppStateType) => ({
  partnersLogo: state.partnersPage.partnersLogo,
});

export default connect(mapStateToProps, {})(PartnersContainer);
