const React = require('react');
const moment = require('moment');
const Note = require('./Note');

const NoteMeta = (props) => {
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
let maybeContent;

const NoteView = (props) => {
  const clicked = (event) => {
      props.showNotes(props.Note.id);
  };

  //console.log('AIDEN', props.selectedNoteId, props.Note.id)
  if(props.selectedNoteId === props.Note.id)
    maybeContent = <h3 className="blog-post-content">{props.Note.content}</h3>;
  else
    maybeContent =<span></span>;
  //console.log(maybeContent, 'why', props.Note.id);

  return (
    <div className="blog-post">
      <a role="button" onClick={ clicked }>
        <h2 className="blog-post-title">{props.Note.title}</h2>
      </a>
      {maybeContent}
      <NoteMeta {...props} />
    </div>
  );

};
module.exports = NoteView;