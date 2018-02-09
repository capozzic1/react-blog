import configureStore from 'redux-mock-store'; // ES6 modules
import { findSinglePost, sendEdit, changeRedirect, checkBoxChange, fetchPosts } from '../client/redux/actions/postActions';

import thunk from 'redux-thunk';
import axios from 'axios';

const MockAdapter = require('axios-mock-adapter');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

/* eslint-disable */

describe('synchronous action creators', () => {
  let initialState,
    store,
    actions;

  let expected;

  beforeEach(() => {
    // Initialize mockstore with empty state
    initialState = {};
    store = mockStore(initialState);
    actions = store.getActions();
    expected = {
      type: null,
      payload: null
    };
  });

  it('should find a single post', () => {
    const postId = '5a77ba9c8703183b0ce39fe2';
    // Dispatch the action
    store.dispatch(findSinglePost(postId));

    // Test if your store dispatched the expected actions

    expected.type = 'FIND_SINGLE_POST';
    expected.payload = postId;

    expect(actions).toEqual([expected]);
  });

  it('should send the sendEdit action', () => {
    store.dispatch(sendEdit(true));

    const expected = {
      type: 'CHANGE_EDIT_STATUS',
      payload: true
    };

    expect(actions).toEqual([expected]);
  });

  it('should send the changeRedirect action', () => {
    store.dispatch(changeRedirect(true));

    expected.type = 'CHANGE_REDIRECT_STATUS';
    expected.payload = true;

    expect(actions).toEqual([expected]);
  });

  it('should send the checkBoxChange action', () => {
    store.dispatch(checkBoxChange('test'))

    expected.type = 'CURRENT_POST';
    expected.payload = 'test';

    expect(actions).toEqual([expected])
  })
});

describe('asynchronous action creators', () => {
  //To be continued
  it('should fetch posts', () => {
    let store = mockStore({})

    // This sets the mock adapter on the default instance
    var mock = new MockAdapter(axios);

    // Mock any GET request to /users
    // arguments for reply are (status, data, headers)
    mock.onGet('/posts').reply(200, {
      posts: [
        {
          _id: 1,
          name: 'Testing'
        }
      ]
    });

    //this doesn't equal FETCH_POSTS_FUFILLED, it ends up equaling just "FETCH_POSTS"
    return store.dispatch(fetchPosts()).then(() => {
      let actions = store.getActions();
      expect(actions[1].type).toEqual('FETCH_POSTS_FUFILLED');
    })
  })
});
