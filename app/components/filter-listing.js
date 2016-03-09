import Ember from 'ember';

export default Ember.Component.extend({
  filter: null,
  actions: {
    autoComplete() {
      this.get('autoComplete')(this.get('filter'));
    }
  }
});

