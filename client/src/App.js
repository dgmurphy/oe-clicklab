import React, { Component } from 'react';
import { Button, TextArea } from "@blueprintjs/core";
import autobind from 'react-autobind';


class App extends Component {

  constructor(props) {

    super(props)
    autobind(this);

    this.state = { }

  }


  componentDidMount() {
  
  }

  // beaker icon by Delwar Hossain from Noun Project
  render() {
    return (
      <div className="app">

        <div className="header">
          <img src="./images/beaker.png" alt="beaker"/>
          <span id="heading">OEClickLab</span>
          <span id="subtitle">Prototypes, widgets, odds &amp; ends. </span>
        </div>

        <div className="content">

          <div className="entry">
            <a href="./gkg-hist" target="_blank"><h2>GKG Histograms</h2></a>
            <p>Deep dive into two weeks of GKG data.</p>
          </div>

          <div className="entry">
            <h2>SpaCy Digest of Mock IIR</h2>
            <p>Kicking the tires on the spaCy Python lib.</p>
          </div>

        </div>

      </div>
    )
  }
}

export default App;
