import React, { Component } from 'react'; 

// Step 1: Define Types for Props and State
interface CounterProps {} // No props in this case, but we still define it
interface CounterState {
  count: number; // State has a `count` field of type number
}

// Step 2: Use Type Annotations for Class Component
class Counter extends Component<CounterProps, CounterState> {
  // Step 3: Initialize State with Correct Type
  state: CounterState = {
    count: 0, // Initial state value
  };

  // Step 4: Define Methods with Proper Typing
  increment = (): void => {
    this.setState({ count: this.state.count + 1 }); // TypeScript enforces correct state updates
  };

  render() {
    // Step 5: Use State in JSX with TypeScript Enforcement
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;

// Explanation:
// - `CounterProps` ensures any future props can be validated.
// - `CounterState` ensures the state always matches the expected structure.
// - The `increment` method is explicitly typed to prevent runtime errors.
