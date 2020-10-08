import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import ProjectUnit from "./ProjectUnit";

class ProjectUnitContainer extends React.Component {
  componentDidMount() {
    let unitId = this.props.match.params.unitId;
    if (!unitId) {
      unitId = null;
    }
    //Get current Id , render other project
    //getProjectInformation(unitId) - получить response с изображениями и информацией
  }

  render() {
    return (
      <div>
        <ProjectUnit projectUnitData={this.props.projectUnitData} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  projectUnitData: state.projectPage.projectUnitData
});

export default compose(
  connect(mapStateToProps, {}),
  withRouter
)(ProjectUnitContainer);
