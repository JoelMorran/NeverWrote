const React = require('react');
const NoteEdit = require('./NoteEdit');
const NoteView = require('./NoteView');

class Note extends React.Component {
  constructor(props) {
    super(props);
  this.state = { editing: false };
  }

  render() {

    const openEdit = () => {
      this.setState({ editing: true });
    };

    const closeEdit = () => {
      this.setState({ editing: false });
    };

    const saveEdit = (editedNote) => {
      this.props.saveNote(editedNote, (err) => {
        if(!err) closeEdit();
      });
    };

    const deleteThisNote = () => {
    this.props.deleteNote(this.props.Note.id);
  };

    if(this.state.editing) {
      return (
        <NoteEdit
          note={this.props.Note}
          onSave={saveEdit}
          onCancel={closeEdit}
        />
      );
    }

    return (
      <NoteView
        Note={this.props.Note}
        fetchNotes={this.props.fetchNotes}
        showNotes={this.props.showNotes}
        onEdit={openEdit}
        onDelete={deleteThisNote}
        selectedNoteId={this.props.selectedNoteId}
      />
    );
  }
}

module.exports = Note;