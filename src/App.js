import React, { Component } from "react";
import MemCard from "./components/MemCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import mems from "./mem.json";
import ScoreDetail from "./components/ScoreDetail";

var _ = require('lodash');

class App extends Component {
  // Setting this.state.mems to the mems json array
  state = {
    mems,
    score: 0,
    top_score: 0,
    try_again: ""
  };

  selectMem = id => {
    console.log(id);
    console.log(this.state.mems);
    console.log(this.state.mems.find(mem => mem.id === id).selected);
    if (this.state.mems.find(mem => mem.id === id).selected === true) {
      let newMems = this.state.mems.map((mem) => {
        return {
          id: mem.id,
          name: mem.name,
          image: mem.image,
          selected: false
        }
      });
      this.setState({ mems: _.shuffle(newMems), score: 0, try_again: "Better Luck Next Time!" })
    } else {
      let newMems = this.state.mems.map((mem) => {
        if (mem.id === id) {
          return {
            id: mem.id,
            name: mem.name,
            image: mem.image,
            selected: true
          }
        } else {
          return mem;
        }
      });
      (this.state.score < this.state.top_score) ? this.setState({ mems: _.shuffle(newMems), score: this.state.score + 1, try_again: "Well Done. Select Again!" }) : this.setState({ mems: _.shuffle(newMems), score: this.state.score + 1, top_score: this.state.top_score + 1, try_again: "The Force is Strong With You! New High Score!" })
    }
  }

  // Map over this.state.mems and render a memCard component for each mem object
  render() {
    return (
      <Wrapper>
        <Title>Test Your Memory</Title>
        <ScoreDetail
          score={this.state.score}
          top_score={this.state.top_score}
          try_again={this.state.try_again}
        />
        <br></br>
        {this.state.mems.map(mem => (
          <MemCard
            selectMem={this.selectMem}
            id={mem.id}
            key={mem.id}
            name={mem.name}
            image={mem.image}
            selected={mem.selected}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
