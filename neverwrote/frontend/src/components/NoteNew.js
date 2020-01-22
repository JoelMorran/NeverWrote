const React = require('react');
const NoteEdit2 = require('./NoteEdit2');

class NoteNew extends React.Component {
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

    const createNote = (newNote) => {
      this.props.createNote(newNote, (err) => {
        if(!err) closeEdit();
      });
    };

    if(this.state.editing) {

      return (
        <NoteEdit2
          Note={this.props.Note}
          onSave={createNote}
          onCancel={closeEdit}
        />
      );
    }

    return (
      <button className="blog-load-more btn btn-primary btn-lg"
        onClick={ openEdit }
      >
        Write new Note
      </button>
    );
  }
}

module.exports = NoteNew;