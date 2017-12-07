const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-composite:app', () => {
  beforeAll(() =>
    helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
      packagename: 'composite-observer-somename',
      description: 'Lorem ipsum dolor sit ammet',
      author: 'Mr Murry',
      copyright: 'Unic AG',
      repoUrl: 'https://github.com/unic/composite-observer-somename',
    }),
  );

  it('creates all files', () => {
    assert.file([
      'docs/development,md',
      'docs/publishing,md',
      'src/index.js',
      'src/index.spec.js',
      '.babelrc',
      '.editorconfig',
      '.gitignore',
      '.npmignore',
      '.nvmrc',
      'LICENSE',
      'package.json',
      'README.md',
      'webpack.config.js',
    ]);
  });
});
