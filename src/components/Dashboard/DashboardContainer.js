import React, { Component } from 'react';
import Dashboard from './Dashboard';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import styles from './Note.css';
import { getNotes } from '../../services/notesApi';

class DashboardContainer extends Component {

  state = {
    note: null,
  };

  componentDidMount() {
    getNotes()
      .then(notes => {
        this.setState({ notes });
      });
  }


  render() {
    const { notes } = this.state;

    return (
      <div>
        <section>
          <h2>Add A Note:</h2>
          <NoteForm onComplete={this.handleAdd}/>
        </section>

        {notes &&
          <section>
            <h3>Your Notes:</h3>
            <NoteList
              notes={notes}
            />
          </section>
        }
      </div>
    );
  }
}
