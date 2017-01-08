// Require Node modules in the browser thanks to Browserify: http://browserify.org
const bespoke = require('bespoke');

// Theme
const nebula = require('bespoke-theme-nebula');

// Plugins
const bullets = require('bespoke-bullets');
const cursor = require('bespoke-cursor');
const hash = require('bespoke-hash');
const keys = require('bespoke-keys');
const math = require('bespoke-math');
const notes = require('bespoke-notes/dom');
const scale = require('bespoke-scale');
// const title = require('bespoke-title');
const touch = require('bespoke-touch');

// Bespoke.js
bespoke.from('article', [
    // Options (all optional, with defaults as below)
  nebula(),
  bullets('.bullet'),
  cursor(),
  hash(),
  keys(),
  math(),
  notes(),
  scale(),
  touch()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');
