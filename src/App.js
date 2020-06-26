import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import './App.css';
import Note from './Note/Note';

class App extends Component {
    state = {
        notes: [
            {id: '100', title: "Post 1", body: "this is the body"},
            {id: '101', title: "Post 2", body: "this is the body"},
            {id: '102', title: "Post 3", body: "this is the body"}
        ]
    }

    removePost = (index) => {
        let stateArr = this.state.notes;
        stateArr.splice(index, 1);
        this.setState({notes: stateArr})
    }

    updatePost(event, id) {
        const noteIndex = this.state.notes.findIndex(p => {
            return p.id === id;
        });
        const note = {
            ...this.state.notes[noteIndex]
        };
        note.body = event.target.value;
        const notes = [...this.state.notes];
        notes[noteIndex] = note;
        this.setState({notes: notes})
    }


  render() {
        let posts = null;

        posts = (<div>
            {
                this.state.notes.map((note, index) => {
                    return <Note
                        title={note.title}
                        body={note.body}
                        key={note.id}
                        index={index}
                        delete={this.removePost}
                        update={(event) => this.updatePost(event, note.id)}
                    />
                })
            }
        </div>)

    return (
        <div className="App">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-info">
                    <a className="navbar-brand" href="#">NotePad</a>
                </nav>
            </div>
            <div>
                {posts}
            </div>
        </div>
    );
  }
}

export default App;
