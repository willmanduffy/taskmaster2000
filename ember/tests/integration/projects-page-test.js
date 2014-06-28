import startApp from 'taskmaster/tests/helpers/start-app';

var App, server;

module('Integration - Project Page', {
  setup: function() {
    App = startApp();

    var projects = [
      {
        id: 1,
        name: 'Projects#index'
      },
      {
        id: 2,
        name: 'Authentication'
      }
    ];

    server = new Pretender(function() {
      this.get('/api/projects', function(request) {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({projects: projects})];
      });

      this.get('/api/projects/:id', function(request) {
        var project = projects.find(function(project) {
          if (project.id === parseInt(request.param.id, 10)) {
            return project;
          }
        });
      });
    });
  },
  teardown: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});

test('Should allow navigation to the projects page from the landing page', function() {
  visit('/').then(function() {
    click('a:contains("Projects")').then(function() {
      equal(find('h3').text(), 'Projects');
    });
  });
});

test('Should list all projects', function() {
  visit('/projects').then(function() {
    equal(find('a:contains("Projects#index")').length, 1);
    equal(find('a:contains("Authentication")').length, 1);
  });
});

test('Should be able to navigate to a project page', function() {
  visit('/projects').then(function() {
    click('a:contains("Authentication")').then(function() {
      equal(find('h4').text(), 'Authentication');
    });
  });
});

test('Should be able to visit a project page directly', function() {
  visit('/projects/2').then(function() {
    equal(find('h4').text(), 'Authentication');
  });
});
