const React = require('react');
const ReactRedux = require('react-redux');
const _ = require('lodash');
const Note = require('./Note');
const NoteNew = require('./NoteNew');
const noteActionCreators = require('../reducers/notes');
const createActionDispatchers = require('../helpers/createActionDispatchers');

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const createNoteComponent = (currentNote) => {

     return (
        <Note
          selectedNoteId={this.props.notes.selectedNoteId}
          key={currentNote.id}
          Note={currentNote}
          showNotes={this.props.showNotes}
          fetchNotes={this.props.fetchNotes}
          saveNote={this.props.saveNote}
          deleteNote={this.props.deleteNote}/>
     );
    };

    return (
      <div className="row">
        <div className="blog-main">
          <NoteNew
            createNote={this.props.createNote}
          />
          {this.props.notes.visibleNotes.map(createNoteComponent)}
        </div>
      </div>
    );
  }
}

const NoteListContainer = ReactRedux.connect(
  (state) => ({
    notes: state.notes,
  }),
  createActionDispatchers(noteActionCreators)
)(NoteList);

module.exports = NoteListContainer;
