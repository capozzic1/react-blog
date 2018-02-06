import configureStore from 'redux-mock-store'; // ES6 modules
import { findSinglePost, sendEdit, changeRedirect, checkBoxChange } from '../client/redux/actions/postActions';

const middlewares = [];
const mockStore = configureStore(middlewares);
/* eslint-disable */

describe('actions', () => {
  let initialState,
    store,
    actions;

  let expectedPayload;

  beforeEach(() => {
    // Initialize mockstore with empty state
    initialState = {};
    store = mockStore(initialState);
    actions = store.getActions();
    expectedPayload = {
      type: null,
      payload: null
    };
  });

  it('should find a single post', () => {
    const postId = '5a77ba9c8703183b0ce39fe2';
    // Dispatch the action
    store.dispatch(findSinglePost(postId));

    // Test if your store dispatched the expected actions

    expectedPayload.type = 'FIND_SINGLE_POST';
    expectedPayload.payload = postId;

    expect(actions).toEqual([expectedPayload]);
  });

  it('should send the sendEdit action', () => {
    store.dispatch(sendEdit(true));

    const expectedPayload = {
      type: 'CHANGE_EDIT_STATUS',
      payload: true
    };

    expect(actions).toEqual([expectedPayload]);
  });

  it('should send the changeRedirect action', () => {
    store.dispatch(changeRedirect(true));

    expectedPayload.type = 'CHANGE_REDIRECT_STATUS';
    expectedPayload.payload = true;

    expect(actions).toEqual([expectedPayload]);
  });

  it('should send the checkBoxChange action', () => {
    store.dispatch(checkBoxChange('test'))

    expectedPayload.type = 'CURRENT_POST';
    expectedPayload.payload = 'test';

    expect(actions).toEqual([expectedPayload])
  })
});
