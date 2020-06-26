import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import NewId from './utils/NewId';
import './App.css';
import Note from './Note/Note';

class App extends Component {
    state = {
        notes: []
    }

    removePost = (index) => {
        let stateArr = this.state.notes;
        stateArr.splice(index, 1);
        this.setState({notes: stateArr})
    }

    updateBody(event, id) {
        let bodyIndex = this.state.notes.findIndex(b => {
            return b.id === id;
        });
        const note = {
            ...this.state.notes[bodyIndex]
        };
        note.body = event.target.value;
        const notes = [...this.state.notes];
        notes[bodyIndex] = note;
        this.setState({notes: notes})
    }

    updateTitle(event, id) {
        const titleIndex = this.state.notes.findIndex( t => {
            return t.id === id;
        });
        const note = {
            ...this.state.notes[titleIndex]
        };
        note.title = event.target.value;
        const notes = [...this.state.notes];
        notes[titleIndex] = note;
        this.setState({notes: notes})
    }

    addPost = () => {
        let arr = this.state.notes;
        arr.push({id: "" + NewId(), title: "New Post", body: "New Text"});
        this.setState({notes: arr});
    }

  render() {
        let posts = null;

        posts = (<div>
            {
                this.state.notes.map((note, index) => {
                    return <Note
                        title={note.title}
                        body={note.body}
                        key={index}
                        index={index}
                        delete={this.removePost}
                        updateBody={(event) => this.updateBody(event, note.id)}
                        updateTitle={(event) => this.updateTitle(event, note.id)}
                    />
                })
            }
        </div>)

    return (
        <div className="App">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-info">
                    <a className="navbar-brand" href="#">NotePad</a>
                    <a onClick={this.addPost} className="navbar-brand" href="#">add+</a>
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
