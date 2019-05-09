import React, { Component } from 'react';

import './anagram.css';

class Anagram extends Component {
    Compare = () => {
        var firstString = document.getElementById("FS").value.toLowerCase().split("").sort().join("");
        var secondString = document.getElementById("SS").value.toLowerCase().split("").sort().join("");
        if (firstString === secondString){
            document.getElementById('result-yes').classList.remove('result');
            document.getElementById('result-no').classList.add('result');
        } else {
            document.getElementById('result-no').classList.remove('result');
            document.getElementById('result-yes').classList.add('result');
        }; 
    }
  render() {  
    return (
        <div className="anagram">
            <div className="title">
                Anagram
            </div>
            <input type="text" placeholder="First String" id="FS" className="field" />
                <br />
            <input type="text" placeholder="Second String" id="SS" className="field" />
            <div>
                <button onClick={() => this.Compare()} className="check-btn">CHECK</button>
            </div>
                <hr className="hr" size="2"/>
            <div id="result-yes" className="result">
                <img className="icon-yes" src="https://img.icons8.com/ios-glyphs/35/000000/ok.png" />
                <p className="text-yes">
                    It is an anagram!
                </p>
            </div>
                <br />
            <div id="result-no" className="result">
                <img className="icon-no" src="https://img.icons8.com/ios/30/000000/cancel-2-filled.png" />
                <p className="text-no">
                    It isn't an anagram!
                </p>
            </div>
        </div>
    );
  }
}


export default Anagram;