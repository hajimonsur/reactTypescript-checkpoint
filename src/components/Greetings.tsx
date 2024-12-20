import React from 'react';

// Step 1: Define a Type for the Props
type GreetingProps = {
  name: string; // Ensure `name` is a string
};

// Step 2: Add Type Annotations to the Component Props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // Step 3: Use the prop with TypeScript enforcement
  return <div>Hello, {name}!</div>;
};

export default Greeting;

// Explanation:
// - `React.FC` is used to define a functional component.
// - The `GreetingProps` type ensures the `name` prop is always a string.
