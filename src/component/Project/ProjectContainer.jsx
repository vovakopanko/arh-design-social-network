import React from "react";
import { connect } from "react-redux";
import Project from "./Project";

class ProjectContainer extends React.Component{
    render(){
        return(
            <Project projectPage={this.props.projectPage}/>
            )
    }
        
}

let mapStateToProps = (state) => {
    return{
        projectPage: state.projectPage.projectData,
    }
}

export default connect(mapStateToProps,{})(ProjectContainer);
