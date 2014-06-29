import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, project) {
    controller.set('model', project);
  }
});
