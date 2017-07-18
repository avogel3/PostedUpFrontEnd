import { test } from 'qunit';
import moduleForAcceptance from 'posted-up-ui/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list posts');

test('should show posts as the home page', function(assert){
  visit('/');
  andThen(() => {
    assert.equal(currentURL(), '/posts', 'should redirect automatically');
  });
});

test('should show a paginated list of posts', function(assert){
  visit('/');
  andThen(() => {
    assert.equal(find('.post').length, 10, 'should see 10 posts');
  });
});
