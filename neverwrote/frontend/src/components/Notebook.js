const React = require('react');
const NotebookEdit = require('./NotebookEdit');
const NotebookView = require('./NotebookView');

class Notebook extends React.Component {
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

    const saveEdit = (editedNotebook) => {
      this.props.saveNotebook(editedNotebook, (err) => {
        if(!err) closeEdit();
      });
    };

    const deleteThisNotebook = () => {
      //console.log(this.props.Notebook.id);
    this.props.deleteNotebook(this.props.Notebook.id);
  };

  if(this.state.editing) {

      return (
        <NotebookEdit
          notebook={this.props.Notebook}
          onSave={saveEdit}
          onCancel={closeEdit}
        />
      );
    }

    return (
      <NotebookView
        Notebook={this.props.Notebook}
        fetchNotes={this.props.fetchNotes}
        onEdit={openEdit}
        onDelete={deleteThisNotebook}
      />
    );
  }
}

module.exports = Notebook;
