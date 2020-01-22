const React = require('react');
const NotebookEdit = require('./NotebookEdit');

class NotebookNew extends React.Component {
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

    const createNotebook = (newNotebook) => {
      this.props.createNotebook(newNotebook, (err) => {
        if(!err) closeEdit();
      });
    };

    if(this.state.editing) {

      return (
        <NotebookEdit
          Notebook={this.props.Notebook}
          onSave={createNotebook}
          onCancel={closeEdit}
        />
      );
    }

    return (
      <button className="blog-load-more btn btn-primary btn-lg"
        onClick={ openEdit }
      >
        Write new Notebook
      </button>
    );
  }
}

module.exports = NotebookNew;