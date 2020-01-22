const _ = require('lodash');
const api = require('../helpers/api');
const INSERT = 'reducers/notebooks/INSERT';
const REMOVE = 'reducers/notebooks/REMOVE';
const CHANGE = 'reducers/notebooks/CHANGE';

const initialState = {
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

  switch(action.type) {
    case INSERT: {
      const unsortedNotebooks = _.concat(state.visibleNotebooks, action.notebooks);
      const visibleNotebooks = _.orderBy(unsortedNotebooks, 'createdAt','desc');
      return _.assign({}, state, { visibleNotebooks} );
    }

    case REMOVE: {
      const visibleNotebooks = _.reject(state.visibleNotebooks, {id: action.notebookId});
      return _.assign({}, state, { visibleNotebooks });
    }

    case CHANGE: {
      const visibleNotebooks = _.clone(state.visibleNotebooks);
      const changedIndex = _.findIndex(state.visibleNotebooks, {id: action.notebook.id })
      visibleNotebooks[changedIndex] = action.notebook;
      return _.assign({}, state, { visibleNotebooks });
    }

    default: return state;
  }
}
reducer.insertNotebooks = (notebooks) => {
  return { type: INSERT, notebooks }
};

reducer.removeNotebook = (notebookId) => {
  return { type: REMOVE, notebookId };
};

reducer.deleteNotebook = (notebookId) => {
  //console.log('TODO')
  return (dispatch) => {
    api.delete('/notebooks/' + notebookId).then((notebooks) => {
      dispatch(reducer.removeNotebook(notebookId));
    }).catch(() => {
      alert('Failed to del notebook.');
    });
  };
};

reducer.saveNotebook = (editedNotebook, callback) => {
  return (dispatch) => {
   // console.log(editedNotebook.id, editedNotebook, 'hi')
    api.put('/notebooks/' + editedNotebook.id, editedNotebook).then((notebook) => {
      dispatch(reducer.changeNotebook(notebook));
      callback();
    }).catch((err) => {
     // console.error(err);
      alert('Failed to save Notebook.  Are all of the fields filled in correctly?');
    });
  };
};

reducer.createNotebook = (newNotebook, callback) => {
  return (dispatch) => {
    api.post('/notebooks', newNotebook).then((notebook) => {
      dispatch(reducer.insertNotebooks([notebook]));
      callback();
    }).catch(() => {
      alert('Failed to create Notebook. Are all of the fields filled in correctly?');
    });
  };
};

reducer.changeNotebook = (notebook) => {
  return { type: CHANGE, notebook };
};

module.exports = reducer;