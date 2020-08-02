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
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            {this.state.persons.map(persons => (
              <tr>
                <td>{persons.id}</td>
                <td>{persons.name}</td>
                <td>{persons.email}</td>

                <td>{persons.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
      </div>
    );
  }
}
