import React, { useState, useContext } from 'react';
import './App.css';

const Oob = () => {
  const [text, setText] = useState('');

  const handleChange = e => {
    let text = e.target.value;
    setText(text.replace(/[aeiou]/ig,'oob'));
  }

  return (
    <>
      <OobWriter handleChange={handleChange} />
      <OobDisplay text={text} />
    </>
  )
}

const OobWriter = props => {
  return (
    <div className="oob-writer">
      {props.text}
      <textarea onChange={props.handleChange} />
    </div>
  )
}

const OobDisplay = props => {
  return (
    <div className="oob-display">
      {props.text}
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
      <Oob />
    </section>
    </div>
  )
}

export default App;