import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/reduxStore";
import Content from "./Content";

type photoProjectDataType = {
  id: number
  url:string
  alt: string,
  info: string,
}

type ContentType = {
  photoProjectData: Array<photoProjectDataType>
  portionSize:number
  portionNumber: number
  buttonRight:any
  buttonLeft:any
}

class ContentContainer extends React.Component<ContentType> {
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

let mapStateToProps = (state:AppStateType) => ({
  photoProjectData: state.contentPage.photoProjectData,
  portionNumber: state.contentPage.portionNumber,
  portionSize: state.contentPage.portionSize,
  buttonLeft: state.contentPage.buttonLeft,
  buttonRight: state.contentPage.buttonRight
});

export default connect(mapStateToProps, {})(ContentContainer);
