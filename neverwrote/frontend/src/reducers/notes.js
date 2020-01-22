const _ = require('lodash');
const api = require('../helpers/api');
const INSERT = 'reducers/notes/INSERT';
const HOME = 'reducers/notes/HOME';
const SHOWINSERT = 'reducers/notes/SHOWINSERT';
const REMOVE = 'reducers/notes/REMOVE';
const CHANGE = 'reducers/notes/CHANGE';

const initialState = {

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
  selectedNoteId: -1,
};

function reducer(state, action) {
  state = state || initialState;
  action = action || {};

  switch(action.type) {
    case INSERT: {
      const unsortedNotes = action.notes;
      const visibleNotes = _.orderBy(unsortedNotes, 'createdAt','desc');
      return _.assign({}, state, { visibleNotes} );
    }

     case REMOVE: {
      const visibleNotes = _.reject(state.visibleNotes, {id: action.noteId});
      return _.assign({}, state, { visibleNotes });
    }

     case CHANGE: {
      const visibleNotes = _.clone(state.visibleNotes);
      const changedIndex = _.findIndex(state.visibleNotes, {id: action.note.id })
      visibleNotes[changedIndex] = action.note;
      return _.assign({}, state, { visibleNotes });
    }

    case HOME: {
      const unsortedNotes = action.notes;
      const visibleNotes = [];
      return _.assign({}, state, {visibleNotes} );
    }

    case SHOWINSERT: {
      const unsortedNotes = action.notes;
      const selectedNoteId = action.noteId;
      //console.log('can you see me ', selectedNoteId);
      return _.assign({}, state, {selectedNoteId} );

    }

    default: return state;
  }
}

reducer.insertNotes = (notes) => {
  return { type: INSERT, notes }
};

reducer.showNotes = (noteId) => {
  return { type: SHOWINSERT, noteId }
};

reducer.fetchNotes = (notebookId) => {
  return (dispatch) => {
     let path = '/notebooks/'+ notebookId +'/notes';
    api.get(path).then((newNotes) => {
     // console.log(notebookId, newNotes)
      dispatch(reducer.insertNotes(newNotes));
    });
  };
}

reducer.Home = () => {
  //console.log('hi')
  return { type: HOME };
};

reducer.removeNote = (noteId) => {
  return { type: REMOVE, noteId };
};

reducer.deleteNote = (noteId) => {
 // console.log('TODO')
  return (dispatch) => {
    api.delete('/notes/' + noteId).then((notes) => {
      dispatch(reducer.removeNote(noteId));
    }).catch(() => {
      alert('Failed to del note.');
    });
  };
};

reducer.saveNote = (editedNote, callback) => {
  return (dispatch) => {
    api.put('/notes/' + editedNote.id, editedNote).then((note) => {
      dispatch(reducer.changeNote(note));
      callback();
    }).catch((err) => {
      //console.error(err);
      alert('Failed to save Note.  Are all of the fields filled in correctly?');
    });
  };
};

reducer.createNote = (newNote, callback) => {
  return (dispatch) => {
    api.post('/notes', newNote).then((note) => {
      dispatch(reducer.insertNotes([note]));
      callback();
    }).catch((err) => {
      //console.error(err);
      alert('Failed to create Note. Are all of the fields filled in correctly?');
    });
  };
};

reducer.changeNote = (note) => {
  return { type: CHANGE, note };
};

module.exports = reducer;