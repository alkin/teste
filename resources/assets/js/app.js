// Frontend Framework: vue, react, angular
const frontend = 'vue';

// CSS Framework: semantic, bootstrap
const css = 'semantic';

// Load CSS Framework
if (css == 'semantic') require('./semantic.js');
if (css == 'bootstrap') require('./bootstrap.js');

// Run App with desired framework
if (frontend == 'vue') require('./vue.js');
if (frontend == 'react') require('./react.js');
if (frontend == 'angular') require('./angular.js');