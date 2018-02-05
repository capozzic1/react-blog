import * as actions from '../client/redux/actions/postActions';

describe('actions', () => {
  it('should find a single post', () => {
    const postId = '5a77ba9c8703183b0ce39fe2';
    const expectedAction = {
      type: 'FIND_SINGLE_POST',
      payload: postId,
    };

    expect(actions.findSinglePost(postId)).toEqual(expectedAction);
  });
});
