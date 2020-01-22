const React = require('react');
const NotebookList = require('./NotebookList');
const NoteList = require('./NoteList');
const Home = () => (
  <div className="container">

    <div className="blog-header">
      <h1 className="blog-title">Neverwrote</h1>
      <p className="lead blog-description">This is Neverwrote, oh my!</p>
    </div>
    <div className="row">
  <div className="col-xs-6"><NotebookList /></div>
  <div className="col-xs-6"><NoteList/></div>
</div>
  </div>
);

module.exports = Home;