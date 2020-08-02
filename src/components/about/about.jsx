import React from "react";
import axios from "axios";

export default class persons extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      this.setState({ persons: res.data });
    });
  }
  render() {
    return (
      <div>
        <h1 className="text-center">About</h1>
        {this.state.persons.map(persons => (
          <ul>
            <li>{persons.id}</li>
            <li>{persons.name}</li>
            <li>{persons.email}</li>

            <li>{persons.address.city}</li>
          </ul>
        ))}
      </div>
    );
  }
}
