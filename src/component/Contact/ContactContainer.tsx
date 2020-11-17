import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/reduxStore";
import Contact from "./Contact";

type ContactContainerType = {
  officeLocation: string
  sendRequest: ()=>void
}

class ContactContainer extends React.Component<ContactContainerType> {
  sendRequest = () => {
    alert("Your request send, thenk's");
  };

  render() {
    return (
      <div>
        <Contact
          officeLocation={this.props.officeLocation}
          sendRequest={this.sendRequest}
        />
      </div>
    );
  }
}

let mapStateToProps = (state:AppStateType) => ({
  officeLocation: state.contactPage.officeLocation,
});
export default connect(mapStateToProps, {})(ContactContainer);
