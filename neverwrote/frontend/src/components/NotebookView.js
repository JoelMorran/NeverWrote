const React = require('react');
const moment = require('moment');
const Note = require('./Note');

const NotebookMeta = (props) => {
  return (
    <div className="blog-post-meta">
      <a role="button" title="Edit post"
        style={{ paddingRight: '8px' }}
        onClick={ props.onEdit }
      >
        <span className="fa fa-edit" />
      </a>

      <a role="button" title="Delete post"
      style={{ paddingRight: '8px' }}
      onClick={ props.onDelete }
      >
      <span className="fa fa-remove" />
      </a>
    </div>
  );
};

const NotebookView = (props) => {
  const clicked = (event) => {
    props.fetchNotes(props.Notebook.id);
  };

  return (
    <div className="blog-post">
      <a role="button" onClick={ clicked }>
        <h2 className="blog-post-title">{props.Notebook.title}</h2>
      </a>
      <NotebookMeta {...props} />
    </div>
  );
};

module.exports = NotebookView;
