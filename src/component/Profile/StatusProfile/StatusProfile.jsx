import React from "react";

export class StatusProfile extends React.Component {
  state = {
    editMode: true,
    status: this.props.status,
  };
  activatedChangeText = () => {
    this.setState({ editMode: false });
  };
  deactivatedChangeText = () => {
    debugger;
    this.setState({ editMode: true });
    this.props.updateStatusThunkCreator(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.target.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <span onDoubleClick={this.activatedChangeText}>
              {this.props.status}
            </span>
          </div>
        ) : (
          <div>
            <input
              onBlur={this.deactivatedChangeText}
              autoFocus={true}
              type="text"
              value={this.state.status}
              onChange={this.onStatusChange}
            />
          </div>
        )}
      </div>
    );
  }
}
