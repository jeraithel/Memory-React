import React, { Component } from "react";
import MemCard from "./components/MemCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import mems from "./mem.json";

class App extends Component {
  // Setting this.state.mems to the mems json array
  state = {
    mems
  };

  selectMem = id => {
    // Filter this.state.mems for mems with an id not equal to the id being removed
    const mems = this.state.mems.filter(mem => mem.id !== id);
    // Set this.state.mems equal to the new mems array
    this.setState({ mems });
  };

  // Map over this.state.mems and render a memCard component for each mem object
  render() {
    return (
      <Wrapper>
        <Title>Test Your Memory</Title>
        {this.state.mems.map(mem => (
          <MemCard
            selectMem={this.selectMem}
            id={mem.id}
            key={mem.id}
            name={mem.name}
            image={mem.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
