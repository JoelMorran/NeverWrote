const React = require('react');
const _ = require('lodash');

class NoteEdit2 extends React.Component {
  constructor(props) {
    super(props);
    const note = props.note || {};

    this.state = {
      notebookId: note.notebookId || '',
      title: note.title || '',
      content: note.content || ''

    };
  }

  render() {
    const revertAndStopEditing = (event) => {
      event.preventDefault();
      this.props.onCancel();
    };

    const submitAndStopEditing = (event) => {
      event.preventDefault();

      const editedNote = _.assign({}, this.props.note, {
      notebookId: this.state.notebookId,
        title: this.state.title,
        content: this.state.content

      });
      this.props.onSave(editedNote);
    };

    const onTitleChange = (event) => {
      this.setState({ title: event.target.value });
    };

     const onContentChange = (event) => {
      this.setState({ content: event.target.value });
    };

    const onNoteBookIdAdd = (event) => {
      this.setState({ notebookId: event.target.value });
    };

    return (
      <form className="blog-post">
        <div className="form-group">
          <input className="form-control input-lg" value={this.state.notebookId}
            placeholder="NotebookID" onChange={onNoteBookIdAdd}
          />
        </div>

        <div className="form-group">
          <input className="form-control input-lg" value={this.state.title}
            placeholder="Note title" onChange={onTitleChange}
          />
        </div>

        <div className="form-group">
          <textarea
            className="form-control"
            style={{ height: 300 }}
            value={this.state.content}
            placeholder="Note" onChange={onContentChange}
          />
        </div>

        <button className="btn btn-default pull-right"
          onClick={submitAndStopEditing}
        >
          Save
        </button>

        <button className="btn btn-default pull-right"
          style={{ marginRight: '12px' }}
          onClick={revertAndStopEditing}
        >
          Cancel
        </button>
      </form>
    );
  }
}

module.exports = NoteEdit2;