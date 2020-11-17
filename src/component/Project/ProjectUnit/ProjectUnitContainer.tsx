import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { AppStateType } from "../../../redux/reduxStore";
import ProjectUnit from "./ProjectUnit";

type projectUnitDataType = {
  id: number;
  src: string;
  alt: string;
};

type ProjectUnitContainerType = {
  match:any
  projectUnitData:Array<projectUnitDataType>
}

class ProjectUnitContainer extends React.Component<ProjectUnitContainerType> {
  componentDidMount() {
    let unitId = this.props.match.params.unitId;
    if (!unitId) {
      unitId = null;
    }
  }

  render() {
    return (
      <div>
        <ProjectUnit projectUnitData={this.props.projectUnitData} />
      </div>
    );
  }
}

let mapStateToProps = (state:AppStateType) => ({
  projectUnitData: state.projectPage.projectUnitData,
});

export default compose(
  connect(mapStateToProps, {}),
  withRouter
)(ProjectUnitContainer);
