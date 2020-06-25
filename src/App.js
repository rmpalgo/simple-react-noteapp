import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import './App.css';
import Note from './Note/Note';

class App extends Component {
    state = {
        notes: [
            {title: "Post 1", body: "this is the body"}
        ]
    }

  render() {

    return (
        <div className="App">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-info">
                    <a className="navbar-brand" href="#">NotePad</a>
                </nav>
            </div>
            <div>
                <Note title={this.state.notes[0].title} body={this.state.notes[0].body}/>
            </div>
        </div>
    );
  }
}

export default App;
