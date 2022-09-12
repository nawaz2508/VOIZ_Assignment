import Select from "react-select";
import "./App.css";
import React, { Component } from "react";
import options from "./components/option.js";


const styles = {
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: "papayawhip",
    };
  },
};


class App extends Component {
  render() {
    return (
      <Select
        styles={styles}
        closeMenuOnSelect={false}
        isMulti
        options={options}
        defaultValue={options[0]}
      />
    );
  }
}

export default App;
