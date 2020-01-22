(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * This is the entry point for the JavaScript application which runs in the
 * web browser. We call `window.main` when the page loads, and use that
 * opportunity to create the Redux store and mount the root React component.
 */

var React = require('react');
var ReactDOM = require('react-dom');

var createStore = require('./helpers/createStore');
var Root = React.createFactory(require('./components/Root'));

// Initialisation function which we will call on page load
window.main = function (initialState) {
  // Create root React component with Redux store
  var store = createStore(initialState);
  var rootComponent = Root({ store: store });

  // Mount React root component in DOM
  var mountPoint = document.getElementById('root');
  ReactDOM.render(rootComponent, mountPoint);
};

},{"./components/Root":15,"./helpers/createStore":19,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReduxDevtools = require('redux-devtools');
var DockMonitor = require('redux-devtools-dock-monitor').default;
var LogMonitor = require('redux-devtools-log-monitor').default;

var _DevTools = ReduxDevtools.createDevTools(React.createElement(
  DockMonitor,
  { toggleVisibilityKey: 'h', changePositionKey: 'q', defaultIsVisible: false },
  React.createElement(LogMonitor, null)
));

var DevTools = function (_React$Component) {
  _inherits(DevTools, _React$Component);

  function DevTools(props) {
    _classCallCheck(this, DevTools);

    var _this = _possibleConstructorReturn(this, (DevTools.__proto__ || Object.getPrototypeOf(DevTools)).call(this, props));

    _this.state = { isMounted: false };
    return _this;
  }

  _createClass(DevTools, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ isMounted: true });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.isMounted && React.createElement(_DevTools, null)
      );
    }
  }], [{
    key: 'instrument',
    value: function instrument() {
      return _DevTools.instrument(arguments);
    }
  }]);

  return DevTools;
}(React.Component);

;

/**
 * Redux development tools (useful for debugging).
 */
module.exports = DevTools;

},{"react":"react","redux-devtools":"redux-devtools","redux-devtools-dock-monitor":"redux-devtools-dock-monitor","redux-devtools-log-monitor":"redux-devtools-log-monitor"}],3:[function(require,module,exports){
'use strict';

var React = require('react');
var NotebookList = require('./NotebookList');
var NoteList = require('./NoteList');
var Home = function Home() {
  return React.createElement(
    'div',
    { className: 'container' },
    React.createElement(
      'div',
      { className: 'blog-header' },
      React.createElement(
        'h1',
        { className: 'blog-title' },
        'Neverwrote'
      ),
      React.createElement(
        'p',
        { className: 'lead blog-description' },
        'This is Neverwrote, oh my!'
      )
    ),
    React.createElement(
      'div',
      { className: 'row' },
      React.createElement(
        'div',
        { className: 'col-xs-6' },
        React.createElement(NotebookList, null)
      ),
      React.createElement(
        'div',
        { className: 'col-xs-6' },
        React.createElement(NoteList, null)
      )
    )
  );
};

module.exports = Home;

},{"./NoteList":7,"./NotebookList":12,"react":"react"}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var NoteEdit = require('./NoteEdit');
var NoteView = require('./NoteView');

var Note = function (_React$Component) {
  _inherits(Note, _React$Component);

  function Note(props) {
    _classCallCheck(this, Note);

    var _this = _possibleConstructorReturn(this, (Note.__proto__ || Object.getPrototypeOf(Note)).call(this, props));

    _this.state = { editing: false };
    return _this;
  }

  _createClass(Note, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var openEdit = function openEdit() {
        _this2.setState({ editing: true });
      };

      var closeEdit = function closeEdit() {
        _this2.setState({ editing: false });
      };

      var saveEdit = function saveEdit(editedNote) {
        _this2.props.saveNote(editedNote, function (err) {
          if (!err) closeEdit();
        });
      };

      var deleteThisNote = function deleteThisNote() {
        _this2.props.deleteNote(_this2.props.Note.id);
      };

      if (this.state.editing) {
        return React.createElement(NoteEdit, {
          note: this.props.Note,
          onSave: saveEdit,
          onCancel: closeEdit
        });
      }

      return React.createElement(NoteView, {
        Note: this.props.Note,
        fetchNotes: this.props.fetchNotes,
        showNotes: this.props.showNotes,
        onEdit: openEdit,
        onDelete: deleteThisNote,
        selectedNoteId: this.props.selectedNoteId
      });
    }
  }]);

  return Note;
}(React.Component);

module.exports = Note;

},{"./NoteEdit":5,"./NoteView":9,"react":"react"}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var _ = require('lodash');

var NoteEdit = function (_React$Component) {
  _inherits(NoteEdit, _React$Component);

  function NoteEdit(props) {
    _classCallCheck(this, NoteEdit);

    var _this = _possibleConstructorReturn(this, (NoteEdit.__proto__ || Object.getPrototypeOf(NoteEdit)).call(this, props));

    var note = props.note || {};

    _this.state = {
      title: note.title || '',
      content: note.content || ''

    };
    return _this;
  }

  _createClass(NoteEdit, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var revertAndStopEditing = function revertAndStopEditing(event) {
        event.preventDefault();
        _this2.props.onCancel();
      };

      var submitAndStopEditing = function submitAndStopEditing(event) {
        event.preventDefault();

        var editedNote = _.assign({}, _this2.props.note, {
          title: _this2.state.title,
          content: _this2.state.content

        });
        _this2.props.onSave(editedNote);
      };

      var onTitleChange = function onTitleChange(event) {
        _this2.setState({ title: event.target.value });
      };

      var onContentChange = function onContentChange(event) {
        _this2.setState({ content: event.target.value });
      };

      return React.createElement(
        'form',
        { className: 'blog-post' },
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement('input', { className: 'form-control input-lg', value: this.state.title,
            placeholder: 'Note title', onChange: onTitleChange
          })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement('textarea', {
            className: 'form-control',
            style: { height: 300 },
            value: this.state.content,
            placeholder: 'Note', onChange: onContentChange
          })
        ),
        React.createElement(
          'button',
          { className: 'btn btn-default pull-right',
            onClick: submitAndStopEditing
          },
          'Save'
        ),
        React.createElement(
          'button',
          { className: 'btn btn-default pull-right',
            style: { marginRight: '12px' },
            onClick: revertAndStopEditing
          },
          'Cancel'
        )
      );
    }
  }]);

  return NoteEdit;
}(React.Component);

module.exports = NoteEdit;

},{"lodash":"lodash","react":"react"}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var _ = require('lodash');

var NoteEdit2 = function (_React$Component) {
  _inherits(NoteEdit2, _React$Component);

  function NoteEdit2(props) {
    _classCallCheck(this, NoteEdit2);

    var _this = _possibleConstructorReturn(this, (NoteEdit2.__proto__ || Object.getPrototypeOf(NoteEdit2)).call(this, props));

    var note = props.note || {};

    _this.state = {
      notebookId: note.notebookId || '',
      title: note.title || '',
      content: note.content || ''

    };
    return _this;
  }

  _createClass(NoteEdit2, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var revertAndStopEditing = function revertAndStopEditing(event) {
        event.preventDefault();
        _this2.props.onCancel();
      };

      var submitAndStopEditing = function submitAndStopEditing(event) {
        event.preventDefault();

        var editedNote = _.assign({}, _this2.props.note, {
          notebookId: _this2.state.notebookId,
          title: _this2.state.title,
          content: _this2.state.content

        });
        _this2.props.onSave(editedNote);
      };

      var onTitleChange = function onTitleChange(event) {
        _this2.setState({ title: event.target.value });
      };

      var onContentChange = function onContentChange(event) {
        _this2.setState({ content: event.target.value });
      };

      var onNoteBookIdAdd = function onNoteBookIdAdd(event) {
        _this2.setState({ notebookId: event.target.value });
      };

      return React.createElement(
        'form',
        { className: 'blog-post' },
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement('input', { className: 'form-control input-lg', value: this.state.notebookId,
            placeholder: 'NotebookID', onChange: onNoteBookIdAdd
          })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement('input', { className: 'form-control input-lg', value: this.state.title,
            placeholder: 'Note title', onChange: onTitleChange
          })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement('textarea', {
            className: 'form-control',
            style: { height: 300 },
            value: this.state.content,
            placeholder: 'Note', onChange: onContentChange
          })
        ),
        React.createElement(
          'button',
          { className: 'btn btn-default pull-right',
            onClick: submitAndStopEditing
          },
          'Save'
        ),
        React.createElement(
          'button',
          { className: 'btn btn-default pull-right',
            style: { marginRight: '12px' },
            onClick: revertAndStopEditing
          },
          'Cancel'
        )
      );
    }
  }]);

  return NoteEdit2;
}(React.Component);

module.exports = NoteEdit2;

},{"lodash":"lodash","react":"react"}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactRedux = require('react-redux');
var _ = require('lodash');
var Note = require('./Note');
var NoteNew = require('./NoteNew');
var noteActionCreators = require('../reducers/notes');
var createActionDispatchers = require('../helpers/createActionDispatchers');

var NoteList = function (_React$Component) {
  _inherits(NoteList, _React$Component);

  function NoteList(props) {
    _classCallCheck(this, NoteList);

    return _possibleConstructorReturn(this, (NoteList.__proto__ || Object.getPrototypeOf(NoteList)).call(this, props));
  }

  _createClass(NoteList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var createNoteComponent = function createNoteComponent(currentNote) {

        return React.createElement(Note, {
          selectedNoteId: _this2.props.notes.selectedNoteId,
          key: currentNote.id,
          Note: currentNote,
          showNotes: _this2.props.showNotes,
          fetchNotes: _this2.props.fetchNotes,
          saveNote: _this2.props.saveNote,
          deleteNote: _this2.props.deleteNote });
      };

      return React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'div',
          { className: 'blog-main' },
          React.createElement(NoteNew, {
            createNote: this.props.createNote
          }),
          this.props.notes.visibleNotes.map(createNoteComponent)
        )
      );
    }
  }]);

  return NoteList;
}(React.Component);

var NoteListContainer = ReactRedux.connect(function (state) {
  return {
    notes: state.notes
  };
}, createActionDispatchers(noteActionCreators))(NoteList);

module.exports = NoteListContainer;

},{"../helpers/createActionDispatchers":18,"../reducers/notes":22,"./Note":4,"./NoteNew":8,"lodash":"lodash","react":"react","react-redux":"react-redux"}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var NoteEdit2 = require('./NoteEdit2');

var NoteNew = function (_React$Component) {
  _inherits(NoteNew, _React$Component);

  function NoteNew(props) {
    _classCallCheck(this, NoteNew);

    var _this = _possibleConstructorReturn(this, (NoteNew.__proto__ || Object.getPrototypeOf(NoteNew)).call(this, props));

    _this.state = { editing: false };
    return _this;
  }

  _createClass(NoteNew, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var openEdit = function openEdit() {
        _this2.setState({ editing: true });
      };

      var closeEdit = function closeEdit() {
        _this2.setState({ editing: false });
      };

      var createNote = function createNote(newNote) {
        _this2.props.createNote(newNote, function (err) {
          if (!err) closeEdit();
        });
      };

      if (this.state.editing) {

        return React.createElement(NoteEdit2, {
          Note: this.props.Note,
          onSave: createNote,
          onCancel: closeEdit
        });
      }

      return React.createElement(
        'button',
        { className: 'blog-load-more btn btn-primary btn-lg',
          onClick: openEdit
        },
        'Write new Note'
      );
    }
  }]);

  return NoteNew;
}(React.Component);

module.exports = NoteNew;

},{"./NoteEdit2":6,"react":"react"}],9:[function(require,module,exports){
'use strict';

var React = require('react');
var moment = require('moment');
var Note = require('./Note');

var NoteMeta = function NoteMeta(props) {
  return React.createElement(
    'div',
    { className: 'blog-post-meta' },
    React.createElement(
      'a',
      { role: 'button', title: 'Edit post',
        style: { paddingRight: '8px' },
        onClick: props.onEdit
      },
      React.createElement('span', { className: 'fa fa-edit' })
    ),
    React.createElement(
      'a',
      { role: 'button', title: 'Delete post',
        style: { paddingRight: '8px' },
        onClick: props.onDelete
      },
      React.createElement('span', { className: 'fa fa-remove' })
    )
  );
};
var maybeContent = void 0;

var NoteView = function NoteView(props) {
  var clicked = function clicked(event) {
    props.showNotes(props.Note.id);
  };

  //console.log('AIDEN', props.selectedNoteId, props.Note.id)
  if (props.selectedNoteId === props.Note.id) maybeContent = React.createElement(
    'h3',
    { className: 'blog-post-content' },
    props.Note.content
  );else maybeContent = React.createElement('span', null);
  //console.log(maybeContent, 'why', props.Note.id);

  return React.createElement(
    'div',
    { className: 'blog-post' },
    React.createElement(
      'a',
      { role: 'button', onClick: clicked },
      React.createElement(
        'h2',
        { className: 'blog-post-title' },
        props.Note.title
      )
    ),
    maybeContent,
    React.createElement(NoteMeta, props)
  );
};
module.exports = NoteView;

},{"./Note":4,"moment":"moment","react":"react"}],10:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var NotebookEdit = require('./NotebookEdit');
var NotebookView = require('./NotebookView');

var Notebook = function (_React$Component) {
  _inherits(Notebook, _React$Component);

  function Notebook(props) {
    _classCallCheck(this, Notebook);

    var _this = _possibleConstructorReturn(this, (Notebook.__proto__ || Object.getPrototypeOf(Notebook)).call(this, props));

    _this.state = { editing: false };
    return _this;
  }

  _createClass(Notebook, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var openEdit = function openEdit() {
        _this2.setState({ editing: true });
      };

      var closeEdit = function closeEdit() {
        _this2.setState({ editing: false });
      };

      var saveEdit = function saveEdit(editedNotebook) {
        _this2.props.saveNotebook(editedNotebook, function (err) {
          if (!err) closeEdit();
        });
      };

      var deleteThisNotebook = function deleteThisNotebook() {
        //console.log(this.props.Notebook.id);
        _this2.props.deleteNotebook(_this2.props.Notebook.id);
      };

      if (this.state.editing) {

        return React.createElement(NotebookEdit, {
          notebook: this.props.Notebook,
          onSave: saveEdit,
          onCancel: closeEdit
        });
      }

      return React.createElement(NotebookView, {
        Notebook: this.props.Notebook,
        fetchNotes: this.props.fetchNotes,
        onEdit: openEdit,
        onDelete: deleteThisNotebook
      });
    }
  }]);

  return Notebook;
}(React.Component);

module.exports = Notebook;

},{"./NotebookEdit":11,"./NotebookView":14,"react":"react"}],11:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var _ = require('lodash');

var NotebookEdit = function (_React$Component) {
  _inherits(NotebookEdit, _React$Component);

  function NotebookEdit(props) {
    _classCallCheck(this, NotebookEdit);

    var _this = _possibleConstructorReturn(this, (NotebookEdit.__proto__ || Object.getPrototypeOf(NotebookEdit)).call(this, props));

    var notebook = props.notebook || {};
    _this.state = {
      title: notebook.title || ''

    };
    return _this;
  }

  _createClass(NotebookEdit, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var revertAndStopEditing = function revertAndStopEditing(event) {
        event.preventDefault();
        _this2.props.onCancel();
      };

      var submitAndStopEditing = function submitAndStopEditing(event) {
        event.preventDefault();

        var editedNotebook = _.assign({}, _this2.props.notebook, {
          title: _this2.state.title
        });
        _this2.props.onSave(editedNotebook);
      };

      var onTitleChange = function onTitleChange(event) {
        _this2.setState({ title: event.target.value });
      };

      return React.createElement(
        'form',
        { className: 'blog-post' },
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement('input', { className: 'form-control input-lg', value: this.state.title,
            placeholder: 'Notebook title', onChange: onTitleChange
          })
        ),
        React.createElement(
          'button',
          { className: 'btn btn-default pull-right',
            onClick: submitAndStopEditing
          },
          'Save'
        ),
        React.createElement(
          'button',
          { className: 'btn btn-default pull-right',
            style: { marginRight: '12px' },
            onClick: revertAndStopEditing
          },
          'Cancel'
        )
      );
    }
  }]);

  return NotebookEdit;
}(React.Component);

module.exports = NotebookEdit;

},{"lodash":"lodash","react":"react"}],12:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactRedux = require('react-redux');
var _ = require('lodash');
var Notebook = require('./Notebook');
var NotebookNew = require('./NotebookNew');
var notebookActionCreators = require('../reducers/notebooks');
var noteActionCreators = require('../reducers/notes');
var createActionDispatchers = require('../helpers/createActionDispatchers');

var NotebookList = function (_React$Component) {
  _inherits(NotebookList, _React$Component);

  function NotebookList(props) {
    _classCallCheck(this, NotebookList);

    var _this = _possibleConstructorReturn(this, (NotebookList.__proto__ || Object.getPrototypeOf(NotebookList)).call(this, props));

    _this.state = { loading: false };
    return _this;
  }

  _createClass(NotebookList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var NotebookButtonClick = function NotebookButtonClick() {
        _this2.props.Home();
      };

      var createNotebookComponent = function createNotebookComponent(currentNotebook) {

        return React.createElement(Notebook, {
          key: currentNotebook.id,
          Notebook: currentNotebook,
          fetchNotes: _this2.props.fetchNotes,
          saveNotebook: _this2.props.saveNotebook,
          deleteNotebook: _this2.props.deleteNotebook });
      };

      return React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'div',
          { className: 'blog-main' },
          React.createElement(NotebookNew, {
            createNotebook: this.props.createNotebook
          }),
          this.props.notebooks.visibleNotebooks.map(createNotebookComponent),
          React.createElement(
            'button',
            { className: 'blog-load-more btn btn-default btn-lg',
              onClick: NotebookButtonClick
            },
            'Home'
          )
        )
      );
    }
  }]);

  return NotebookList;
}(React.Component);

var NotebookListContainer = ReactRedux.connect(function (state) {
  return {
    notebooks: state.notebooks
  };
}, createActionDispatchers(notebookActionCreators, noteActionCreators))(NotebookList);

module.exports = NotebookListContainer;

},{"../helpers/createActionDispatchers":18,"../reducers/notebooks":21,"../reducers/notes":22,"./Notebook":10,"./NotebookNew":13,"lodash":"lodash","react":"react","react-redux":"react-redux"}],13:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var NotebookEdit = require('./NotebookEdit');

var NotebookNew = function (_React$Component) {
  _inherits(NotebookNew, _React$Component);

  function NotebookNew(props) {
    _classCallCheck(this, NotebookNew);

    var _this = _possibleConstructorReturn(this, (NotebookNew.__proto__ || Object.getPrototypeOf(NotebookNew)).call(this, props));

    _this.state = { editing: false };
    return _this;
  }

  _createClass(NotebookNew, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var openEdit = function openEdit() {
        _this2.setState({ editing: true });
      };

      var closeEdit = function closeEdit() {
        _this2.setState({ editing: false });
      };

      var createNotebook = function createNotebook(newNotebook) {
        _this2.props.createNotebook(newNotebook, function (err) {
          if (!err) closeEdit();
        });
      };

      if (this.state.editing) {

        return React.createElement(NotebookEdit, {
          Notebook: this.props.Notebook,
          onSave: createNotebook,
          onCancel: closeEdit
        });
      }

      return React.createElement(
        'button',
        { className: 'blog-load-more btn btn-primary btn-lg',
          onClick: openEdit
        },
        'Write new Notebook'
      );
    }
  }]);

  return NotebookNew;
}(React.Component);

module.exports = NotebookNew;

},{"./NotebookEdit":11,"react":"react"}],14:[function(require,module,exports){
'use strict';

var React = require('react');
var moment = require('moment');
var Note = require('./Note');

var NotebookMeta = function NotebookMeta(props) {
  return React.createElement(
    'div',
    { className: 'blog-post-meta' },
    React.createElement(
      'a',
      { role: 'button', title: 'Edit post',
        style: { paddingRight: '8px' },
        onClick: props.onEdit
      },
      React.createElement('span', { className: 'fa fa-edit' })
    ),
    React.createElement(
      'a',
      { role: 'button', title: 'Delete post',
        style: { paddingRight: '8px' },
        onClick: props.onDelete
      },
      React.createElement('span', { className: 'fa fa-remove' })
    )
  );
};

var NotebookView = function NotebookView(props) {
  var clicked = function clicked(event) {
    props.fetchNotes(props.Notebook.id);
  };

  return React.createElement(
    'div',
    { className: 'blog-post' },
    React.createElement(
      'a',
      { role: 'button', onClick: clicked },
      React.createElement(
        'h2',
        { className: 'blog-post-title' },
        props.Notebook.title
      )
    ),
    React.createElement(NotebookMeta, props)
  );
};

module.exports = NotebookView;

},{"./Note":4,"moment":"moment","react":"react"}],15:[function(require,module,exports){
'use strict';

/**
 * The root React component from which all other components on the page are
 * descended. It is this component which is directly mounted on the DOM.
 */

var React = require('react');
var ReactRedux = require('react-redux');

var Provider = ReactRedux.Provider;
var Home = require('./Home');

// Enable development tools when in development mode
var DevTools = 'span';
if ("development" === 'development') {
  DevTools = require('./DevTools');
}

// Define the Root component
var Root = function Root(props) {
  return (
    /* The Provider gives descendants the ability to connect to the Redux store */
    React.createElement(
      Provider,
      { store: props.store },
      React.createElement(
        'div',
        null,
        React.createElement(Home, null),
        React.createElement(DevTools, null)
      )
    )
  );
};

module.exports = Root;

},{"./DevTools":2,"./Home":3,"react":"react","react-redux":"react-redux"}],16:[function(require,module,exports){
'use strict';

/**
 * This helper file provides a set of functions for performing HTTP requests.
 * It will work on both the backend and the frontend.
 */

var Promise = require('pinkie-promise');

var ajax = {};

if (true) {
  ajax.request = function (opts) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.addEventListener('error', function () {
        reject(new Error('Request failed'));
      });
      xhr.addEventListener('load', function () {
        if (xhr.status !== 200) {
          reject(new Error('Received status ' + xhr.status));
        } else {
          resolve(opts.json ? JSON.parse(xhr.responseText) : xhr.responseText);
        }
      });
      xhr.open(opts.method, opts.url);
      if (opts.json) {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(opts.data !== undefined ? JSON.stringify(opts.data) : opts.data);
      } else {
        xhr.send(opts.data);
      }
    });
  };
} else {
  var request = require('request');

  ajax.request = function (opts) {
    return new Promise(function (resolve, reject) {
      request({
        url: opts.url,
        method: opts.method,
        body: opts.data,
        json: opts.json
      }, function (error, response, body) {
        if (error) {
          reject(error);
        } else if (response.statusCode !== 200) {
          reject(new Error('Received status ' + response.statusCode));
        } else {
          resolve(body);
        }
      });
    });
  };
}

module.exports = ajax;

},{"pinkie-promise":"pinkie-promise","request":"request"}],17:[function(require,module,exports){
'use strict';

/**
 * This helper file provides a set of functions for communicating with the
 * backend API. It will work on both the backend and the frontend.
 */

var ajax = require('./ajax');

var api = {};

if (true) {
  api.baseUrl = '/api';
} else {
  api.baseUrl = 'http://api:3000';
}

api.get = function (path) {
  return ajax.request({
    method: 'GET',
    url: this.baseUrl + path,
    json: true
  });
};

api.post = function (path, data) {
  return ajax.request({
    method: 'POST',
    url: this.baseUrl + path,
    json: true,
    data: data
  });
};

api.put = function (path, data) {
  return ajax.request({
    method: 'PUT',
    url: this.baseUrl + path,
    json: true,
    data: data
  });
};

api.delete = function (path) {
  return ajax.request({
    method: 'DELETE',
    url: this.baseUrl + path,
    json: true
  });
};

module.exports = api;

},{"./ajax":16}],18:[function(require,module,exports){
'use strict';

/**
 * Returns a function that, when given a dispatch function, returns an
 * object containing a bunch of action dispatchers.
 */
var createActionDispatchers = function createActionDispatchers() {
  for (var _len = arguments.length, actionCreatorGroups = Array(_len), _key = 0; _key < _len; _key++) {
    actionCreatorGroups[_key] = arguments[_key];
  }

  return function (dispatch) {
    return (
      // Iterate over actionCreatorsArray, which is an array of arrays of action
      // creators
      actionCreatorGroups.reduce(function (actionDispatchers, actionCreators) {
        // Add an action dispatcher for each action creator in actionCreators
        Object.keys(actionCreators).filter(function (name) {
          return typeof actionCreators[name] === 'function';
        }).forEach(function (name) {
          actionDispatchers[name] = function () {
            for (var _len2 = arguments.length, actionCreatorArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              actionCreatorArgs[_key2] = arguments[_key2];
            }

            return dispatch(actionCreators[name].apply(this, actionCreatorArgs));
          };
        });
        return actionDispatchers;
      }, {})
    );
  };
};

module.exports = createActionDispatchers;

},{}],19:[function(require,module,exports){
'use strict';

/**
 * This helper file provides a function for creating the Redux store. In
 * development mode it will also connect up the Redux development tools for
 * debugging purposes.
 */

var Redux = require('redux');
var reduxThunk = require('redux-thunk').default;
var combinedReducers = require('../reducers');

var finalCreateStore = void 0;

if ("development" === 'production') {
  finalCreateStore = Redux.compose(
  // Enables middleware
  Redux.applyMiddleware(reduxThunk))(Redux.createStore);
} else {
  var DevTools = require('../components/DevTools');

  finalCreateStore = Redux.compose(
  // Enables middleware
  Redux.applyMiddleware(reduxThunk),
  // Enables DevTools
  DevTools.instrument())(Redux.createStore);
}

module.exports = function (initialState) {
  return finalCreateStore(combinedReducers, initialState);
};

},{"../components/DevTools":2,"../reducers":20,"redux":"redux","redux-thunk":"redux-thunk"}],20:[function(require,module,exports){
'use strict';

var Redux = require('redux');
var notebooks = require('./notebooks');
var notes = require('./notes');

module.exports = Redux.combineReducers({
  notebooks: notebooks,
  notes: notes
});

},{"./notebooks":21,"./notes":22,"redux":"redux"}],21:[function(require,module,exports){
'use strict';

var _ = require('lodash');
var api = require('../helpers/api');
var INSERT = 'reducers/notebooks/INSERT';
var REMOVE = 'reducers/notebooks/REMOVE';
var CHANGE = 'reducers/notebooks/CHANGE';

var initialState = {
  visibleNotebooks: [
    /*{ id: 5,
      title: "From Redux Store: Companies that make computers",
      createdAt: "2016-09-11T23:26:36.000Z",
      updatedAt: "2016-09-11T23:26:36.000Z"
    },
    {id: 4,
     title: "From Redux Store: Dell",
     createdAt: "2016-09-11T23:18:08.000Z",
     updatedAt: "2016-09-11T23:18:08.000Z"
    },
    { id: 3,
      title: "From Redux Store: Lego Nexo Knights",
      createdAt: "2016-09-11T07:47:30.000Z",
      updatedAt: "2016-09-11T07:47:30.000Z"
    },
    { id: 2,
      title: "From Redux Store: React",
      createdAt: "2016-09-11T07:46:55.000Z",
      updatedAt: "2016-09-11T07:46:55.000Z"
    },
    { id: 1,insertNotebooks
      title: "From Redux Store: Deep Learning",
      createdAt: "2016-09-11T07:46:28.000Z",
      updatedAt: "2016-09-11T07:46:28.000Z"
    }*/

  ]
};

function reducer(state, action) {
  state = state || initialState;
  action = action || {};

  switch (action.type) {
    case INSERT:
      {
        var unsortedNotebooks = _.concat(state.visibleNotebooks, action.notebooks);
        var visibleNotebooks = _.orderBy(unsortedNotebooks, 'createdAt', 'desc');
        return _.assign({}, state, { visibleNotebooks: visibleNotebooks });
      }

    case REMOVE:
      {
        var _visibleNotebooks = _.reject(state.visibleNotebooks, { id: action.notebookId });
        return _.assign({}, state, { visibleNotebooks: _visibleNotebooks });
      }

    case CHANGE:
      {
        var _visibleNotebooks2 = _.clone(state.visibleNotebooks);
        var changedIndex = _.findIndex(state.visibleNotebooks, { id: action.notebook.id });
        _visibleNotebooks2[changedIndex] = action.notebook;
        return _.assign({}, state, { visibleNotebooks: _visibleNotebooks2 });
      }

    default:
      return state;
  }
}
reducer.insertNotebooks = function (notebooks) {
  return { type: INSERT, notebooks: notebooks };
};

reducer.removeNotebook = function (notebookId) {
  return { type: REMOVE, notebookId: notebookId };
};

reducer.deleteNotebook = function (notebookId) {
  //console.log('TODO')
  return function (dispatch) {
    api.delete('/notebooks/' + notebookId).then(function (notebooks) {
      dispatch(reducer.removeNotebook(notebookId));
    }).catch(function () {
      alert('Failed to del notebook.');
    });
  };
};

reducer.saveNotebook = function (editedNotebook, callback) {
  return function (dispatch) {
    // console.log(editedNotebook.id, editedNotebook, 'hi')
    api.put('/notebooks/' + editedNotebook.id, editedNotebook).then(function (notebook) {
      dispatch(reducer.changeNotebook(notebook));
      callback();
    }).catch(function (err) {
      // console.error(err);
      alert('Failed to save Notebook.  Are all of the fields filled in correctly?');
    });
  };
};

reducer.createNotebook = function (newNotebook, callback) {
  return function (dispatch) {
    api.post('/notebooks', newNotebook).then(function (notebook) {
      dispatch(reducer.insertNotebooks([notebook]));
      callback();
    }).catch(function () {
      alert('Failed to create Notebook. Are all of the fields filled in correctly?');
    });
  };
};

reducer.changeNotebook = function (notebook) {
  return { type: CHANGE, notebook: notebook };
};

module.exports = reducer;

},{"../helpers/api":17,"lodash":"lodash"}],22:[function(require,module,exports){
'use strict';

var _ = require('lodash');
var api = require('../helpers/api');
var INSERT = 'reducers/notes/INSERT';
var HOME = 'reducers/notes/HOME';
var SHOWINSERT = 'reducers/notes/SHOWINSERT';
var REMOVE = 'reducers/notes/REMOVE';
var CHANGE = 'reducers/notes/CHANGE';

var initialState = {

  visibleNotes: [
    /*  { NotebookId: 1,
        title: "twetsss1",
        content:"test1",
        createdAt: "2016-09-11T23:26:36.000Z",
       updatedAt: "2016-09-11T23:26:36.000Z",
        id: 1,
      },
      {NotebookId: 1,
       title: "testsss2",
       content:"test2",
       createdAt: "2016-09-11T23:18:08.000Z",
       updatedAt: "2016-09-11T23:18:08.000Z",
       id: 2
      }*/

  ],
  selectedNoteId: -1
};

function reducer(state, action) {
  state = state || initialState;
  action = action || {};

  switch (action.type) {
    case INSERT:
      {
        var unsortedNotes = action.notes;
        var visibleNotes = _.orderBy(unsortedNotes, 'createdAt', 'desc');
        return _.assign({}, state, { visibleNotes: visibleNotes });
      }

    case REMOVE:
      {
        var _visibleNotes = _.reject(state.visibleNotes, { id: action.noteId });
        return _.assign({}, state, { visibleNotes: _visibleNotes });
      }

    case CHANGE:
      {
        var _visibleNotes2 = _.clone(state.visibleNotes);
        var changedIndex = _.findIndex(state.visibleNotes, { id: action.note.id });
        _visibleNotes2[changedIndex] = action.note;
        return _.assign({}, state, { visibleNotes: _visibleNotes2 });
      }

    case HOME:
      {
        var _unsortedNotes = action.notes;
        var _visibleNotes3 = [];
        return _.assign({}, state, { visibleNotes: _visibleNotes3 });
      }

    case SHOWINSERT:
      {
        var _unsortedNotes2 = action.notes;
        var selectedNoteId = action.noteId;
        //console.log('can you see me ', selectedNoteId);
        return _.assign({}, state, { selectedNoteId: selectedNoteId });
      }

    default:
      return state;
  }
}

reducer.insertNotes = function (notes) {
  return { type: INSERT, notes: notes };
};

reducer.showNotes = function (noteId) {
  return { type: SHOWINSERT, noteId: noteId };
};

reducer.fetchNotes = function (notebookId) {
  return function (dispatch) {
    var path = '/notebooks/' + notebookId + '/notes';
    api.get(path).then(function (newNotes) {
      // console.log(notebookId, newNotes)
      dispatch(reducer.insertNotes(newNotes));
    });
  };
};

reducer.Home = function () {
  //console.log('hi')
  return { type: HOME };
};

reducer.removeNote = function (noteId) {
  return { type: REMOVE, noteId: noteId };
};

reducer.deleteNote = function (noteId) {
  // console.log('TODO')
  return function (dispatch) {
    api.delete('/notes/' + noteId).then(function (notes) {
      dispatch(reducer.removeNote(noteId));
    }).catch(function () {
      alert('Failed to del note.');
    });
  };
};

reducer.saveNote = function (editedNote, callback) {
  return function (dispatch) {
    api.put('/notes/' + editedNote.id, editedNote).then(function (note) {
      dispatch(reducer.changeNote(note));
      callback();
    }).catch(function (err) {
      //console.error(err);
      alert('Failed to save Note.  Are all of the fields filled in correctly?');
    });
  };
};

reducer.createNote = function (newNote, callback) {
  return function (dispatch) {
    api.post('/notes', newNote).then(function (note) {
      dispatch(reducer.insertNotes([note]));
      callback();
    }).catch(function (err) {
      //console.error(err);
      alert('Failed to create Note. Are all of the fields filled in correctly?');
    });
  };
};

reducer.changeNote = function (note) {
  return { type: CHANGE, note: note };
};

module.exports = reducer;

},{"../helpers/api":17,"lodash":"lodash"}]},{},[1])

//# sourceMappingURL=/assets/js/app.js.map
