import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends React.Component {
  constructor(){
    super();
    // Setting initial state
    this.state = {
      fishes: {},
      order: {}
    }
  }
  addFish(fish) {
    // Update state
    const fishes = {...this.state.fishes}
    // Add into our new fishes
    
    // Set State
  }
  render() {
    return (
        <div className="catch-of-the-day">
            <div className="menu">
             <Header tagline="Bryan is testing props"/>
            </div>
            <Order />
            <Inventory />
        </div>
    );
  }
}

export default App;
