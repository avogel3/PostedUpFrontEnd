import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
  posted_date: DS.attr('string'),
  image: DS.attr('string'),

  hasImage: function() {
    return !this.get('image');
  }
});
