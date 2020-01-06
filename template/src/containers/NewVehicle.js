import React from "react";
import NewVehicle from "../components/NewVehicle";
import withFirebase from "../hoc/withFirebase";

class NewVehicleContainer extends React.Component {
  constructor() {
    super();
    this.state = { inputVal: [] };
  }

  addVehicle = () => {
    this.props.db.collection("vehicles").add({
      name: this.state.inputVal
    });
  };

  onInputChange = e => {
    this.setState({
      inputVal: e.target.value
    });
  };

  render() {
    return (
      <NewVehicle
        addVehicle={this.addVehicle}
        inputVal={this.state.inputVal}
        onInputChange={this.onInputChange}
        resetInput={this.resetInput}
      />
    );
  }
}

export default withFirebase(NewVehicleContainer);
