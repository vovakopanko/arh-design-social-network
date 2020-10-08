import React from "react";
import { connect } from "react-redux";
import Content from "./Content";
import style from "./Content.module.css";

class ContentContainer extends React.Component {
  render() {
    return (
      <Content
        photoProjectData={this.props.photoProjectData}
        portionSize={this.props.portionSize}
        portionNumber={this.props.portionNumber}
        buttonRight={this.props.buttonRight}
        buttonLeft={this.props.buttonLeft}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  photoProjectData: state.contentPage.photoProjectData,
  portionNumber: state.contentPage.portionNumber,
  portionSize: state.contentPage.portionSize,
  buttonLeft: state.contentPage.buttonLeft,
  buttonRight: state.contentPage.buttonRight,
});

export default connect(mapStateToProps, {})(ContentContainer);
