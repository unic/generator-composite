const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the priceless ${chalk.red('generator-composite')} generator!`),
    );

    const prompts = [
      {
        type: 'input',
        name: 'packagename',
        message: 'Packagename (make sure your package is prefixed with "composite-")',
        default: this.appname, // Defaults to current folder name
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description',
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author',
        store: true,
      },
      {
        type: 'input',
        name: 'copyright',
        message: 'Copyright',
        default: 'Unic AG',
        store: true,
      },
      {
        type: 'input',
        name: 'repoUrl',
        message: 'Repository URL',
        default: answers => `https://github.com/unic/${answers.packagename}`,
      },
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;

      // Remove given prefix and rewrite hyphens to camelCase
      this.props.shortPackagename = props.packagename.replace('composite-', '');
      this.props.shortPackagenameCamel = this.props.shortPackagename.replace(
        /-([a-z])/g,
        g => g[1].toUpperCase(),
      );
    });
  }

  writing() {
    this.fs.copyTpl(this.templatePath('**/*'), this.destinationRoot(), this.props);

    // Copy all dotfiles
    this.fs.copy(this.templatePath('.*'), this.destinationRoot());
  }

  install() {
    this.npmInstall();
  }
};
