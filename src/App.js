import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import './App.css';
import Note from './Note/Note';

class App extends Component {
    state = {
        notes: [
            {title: "Post 1", body: "this is the body"},
            {title: "Post 2", body: "this is the body"}
        ]
    }

    removePost = (index) => {
        let stateArr = this.state.notes;
        stateArr.splice(index, 1);
        this.setState({notes: stateArr})
    }

    updatePost(newPost, index) {
        console.log("update comment");
        let stateArr = this.state.notes;
        stateArr[index] = newPost;
        this.setState({notes: stateArr})
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
                        update={this.updatePost}
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
