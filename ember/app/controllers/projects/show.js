import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    createTask: function() {
      var name, project_id, task;

      name = this.get('newName').trim();
      project_id = this.get('id');

      if (!name) {
        return;
      }

      task = this.store.createRecord('task', {
        name: name
      });

      this.store.find('project', project_id).then(function(project) {
        task.set('project', project);
        task.save();
      });

      this.set('newName', '');
    }
  }
});
