import React, { useState } from 'react';
import oob from './oob';
import './App.css';

const OobWriter = () => {
  const [text, setText] = useState('');

  const handleChange = e => {
    let text = e.target.value;
    setText(text.replace(/[aeiou]/ig,'oob'))
  }

  return (
    <div className="oob-writer">
      <div style={{color: 'red'}}>
        {text}
      </div>
      <textarea onChange={handleChange} />
    </div>
  )
}

const OobDisplay = props => {
  return (
    <div className="oob-display">
      {props.text}
      test
    </div>
  )
}

const App = () => {
  return (
    <div className="oob-container">
    <section className="oob-header">
      <div className="oob-header-logo" />
      <div className="oob-header-image" />
    </section>
    <section className="oob-main">
      <OobWriter />
      <OobDisplay />
    </section>
    </div>
  )
}

export default App;