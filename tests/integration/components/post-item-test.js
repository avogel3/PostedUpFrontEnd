import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

let post = Ember.Object.create({ title: 'Test Post', content: '<p>This is a test post.</p>' });

moduleForComponent('post-item', 'Integration | Component | post item', {
  integration: true
});

test('it renders', function(assert) {
  this.set('postItem', post);
  this.render(hbs`
    {{post-item post=postItem}}
  `);

  assert.equal(this.$('.panel-heading').text().trim(), 'Test Post');
});
