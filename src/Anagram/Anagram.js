import React, { Component } from 'react';

import { compare } from '../utils/anagram';

import './anagram.css';

class Anagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnagram: null,
    };
  }

  compare = () => {
    this.setState({
      isAnagram: compare(this.firstString.value, this.secondString.value),
    });
  }

  render() {
    return (
        <div className="anagram">
            <div className="title">
                Anagram
            </div>
            <div>
              <input type="text" placeholder="First String" className="field" ref={input => this.firstString = input} />
            </div>
            <div>
              <input type="text" placeholder="Second String" className="field" ref={input => this.secondString = input} />
            </div>
            <button onClick={this.compare} className="check-btn">CHECK</button>
              <hr className="hr" size="2"/>
            <div>
              {this.state.isAnagram === true ? (
                <div className="result">
                  <img className="icon-yes" src="https://img.icons8.com/ios-glyphs/35/000000/ok.png" />
                  <span>It is an anagram!</span>
                </div>
              ) : null}
              {this.state.isAnagram === false ? (
                <div className="result">
                  <img className="icon-no" src="https://img.icons8.com/ios/30/000000/cancel-2-filled.png" />
                  <span>It isn't an anagram!</span>
                </div>
              ) : null}
            </div>
        </div>
    );
  }
}


export default Anagram;
