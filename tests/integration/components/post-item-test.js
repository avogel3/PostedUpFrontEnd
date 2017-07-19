import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

let post = Ember.Object.create({ title: 'Test Post', content: '<p>This is a test post.</p>', image: 'http://via.placeholder.com/350x150', hasImage: true, posted_date: "9/9/1999 06:05 PM" });

moduleForComponent('post-item', 'Integration | Component | post item', {
  integration: true
});

test('it renders a post', function(assert) {
  this.set('postItem', post);
  this.render(hbs`
    {{post-item post=postItem}}
  `);

  assert.equal(this.$('.post-title').text().trim(), 'Test Post');
  assert.equal(this.$('.post-image').length, 1);
  assert.equal(this.$('.post-date').text().trim(), "9/9/1999 06:05 PM");
});
