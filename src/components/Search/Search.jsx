import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
    search: "",
  };

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    const filteredEmployees = this.state.employees.filter((employee) => {
      return employee.name.last.includes(value);
    });

    this.setState({
      [name]: value,
      filteredEmployees: filteredEmployees,
    });
  };

  render() {
    return (
      <div className="row d-flex justify-content-center">
        <div className="col-sm-12">
          <input
            value={this.state.search}
            name="search"
            onChange={this.handleInputChange}
            type="text"
            placeholder="search names"
          />
        </div>
      </div>
    );
  }
}

export default Search;
