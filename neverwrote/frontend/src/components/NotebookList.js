const React = require('react');
const ReactRedux = require('react-redux');
const _ = require('lodash');
const Notebook = require('./Notebook');
const NotebookNew = require('./NotebookNew');
const notebookActionCreators = require('../reducers/notebooks');
const noteActionCreators = require('../reducers/notes');
const createActionDispatchers = require('../helpers/createActionDispatchers');


class NotebookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  render() {

    const NotebookButtonClick = () => {
      this.props.Home();
    };

    const createNotebookComponent = (currentNotebook) => {

     return (
        <Notebook
          key={currentNotebook.id}
          Notebook={currentNotebook}
          fetchNotes={this.props.fetchNotes}
          saveNotebook={this.props.saveNotebook}
          deleteNotebook={this.props.deleteNotebook}/>
     );
    };

    return (
      <div className="row">
        <div className="blog-main">

          <NotebookNew
            createNotebook={this.props.createNotebook}
          />

          {this.props.notebooks.visibleNotebooks.map(createNotebookComponent)}

          <button className="blog-load-more btn btn-default btn-lg"
            onClick={NotebookButtonClick}
          >
            Home
          </button>
        </div>
      </div>
    );
  }
}

const NotebookListContainer = ReactRedux.connect(
  (state) => ({
    notebooks: state.notebooks,
  }),
  createActionDispatchers(notebookActionCreators, noteActionCreators)
)(NotebookList);

module.exports = NotebookListContainer;
