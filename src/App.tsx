import React from 'react'
import Greeting from './components/Greetings'
import Counter from './components/Counter'

const App = () => {
  return (
    <div>
      <Greeting name="John"/>
      <Counter/>
    </div>
  )
}

export default App