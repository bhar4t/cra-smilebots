import React from "react";
import Layout from "../layouts/Layout";

const NewVehicle = ({ addVehicle, inputVal, onInputChange, resetInput }) => (
  <Layout>
    <div>
      <h4>New Todo</h4>
      <input value={inputVal} onChange={onInputChange} />
      <button onClick={addVehicle}>Add</button>
    </div>
  </Layout>
);

export default NewVehicle;
