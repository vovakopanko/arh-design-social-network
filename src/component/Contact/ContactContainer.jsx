import React from "react";
import { connect } from "react-redux";
import Contact from "./Contact";

class ContactContainer extends React.Component {
  sendRequest = (props) => {
    alert("Your request send, thenk's");
  };
  
  render() {
    return (
      <div>
        <Contact officeLocation={this.props.officeLocation}
        sendRequest={this.props.sendRequest} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  officeLocation: state.contactPage.officeLocation,
});
export default connect(mapStateToProps, {})(ContactContainer);
