// import React, { Component } from "react";
// import SeasonDisplay from './SeasonDisplay';

// class App extends Component {
//   state = {
//     lat: null,
//     long: null,
//     errorMessage: ''
//   }

//   componentDidMount() {
//     window.navigator.geolocation.getCurrentPosition(
//       // (position) => console.log(position),
//       (position) =>
//         this.setState({
//           lat: position.coords.latitude,
//         }),
//       (err) => {
//         this.setState({ errorMessage: err.message });
//       }
//     );
//   }

//   render() {
//     return (
//       <SeasonDisplay lat={this.state.lat}/>
//     )
//   }
// }

// export default App;

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      newName: "",
    };
  }

  onNameChange = (e) => {
    this.setState({ newName: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { names, newName } = this.state;
    console.log("form was submitted!");
    this.setState({
      names: [
        ...names,
        {
          id: names.length + 1,
          newName,
          done: false,
        },
      ],
    });
    this.setState({ newName: "" });
  };

  removeName = (name) => {
    const { names } = this.state;
    console.log('remove clicked', name)
    this.setState({
      names: names.filter((otherNames) => otherNames !== name)
    })
  };

  // componentDidUpdate(prevState) {
  //   if (this.state.names !== prevState.names) {
  //     this.removeName()
  //   }
  // }

  render() {
    const { names, newName } = this.state;
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>Enter your name</label>
          <input value={newName} onChange={this.onNameChange} />
        </form>
        {newName.length ? (
          <div>
            <span role="img" aria-label="smile">
              😀{" "}
            </span>
            Hello {newName}
          </div>
        ) : (
          <span role="img" aria-label="smile">
            😀{" "}
          </span>
        )}
        <ul>
          {names.map((name, i) => (
            <li key={name.id}>
              {name.newName}
              <button onClick={() => this.removeName(name)}> X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
