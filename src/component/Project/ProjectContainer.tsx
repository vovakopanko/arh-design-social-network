import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/reduxStore";
import Project from "./Project";

type ProjectContainerType = {
  projectData: Array<projectDataType>
}

type projectDataType = {
  id:number
  url:string
  alt:string
}

class ProjectContainer extends React.Component<ProjectContainerType> {
  render() {
    return <Project projectData={this.props.projectData} />;
  }
}

let mapStateToProps = (state:AppStateType) => {
  return {
    projectData: state.projectPage.projectData,
  };
};

export default connect(mapStateToProps, {})(ProjectContainer);
