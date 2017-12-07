# <%= packagename %>

<%= description %>

## Installation

```shell
$ npm install @unic/<%= packagename %>
```

## Importing

```javascript
// ES6 Module
import <%= shortPackagenameCamel %> from '@unic/<%= packagename %>';

// CommomJS
const <%= shortPackagenameCamel %> = require('@unic/<%= packagename %>').default;
```

## Usage

A composite is a function or an object which can be used as is or to merged with another object. These composites are normally used in the factory/composition pattern.

Helpful Ressources:
* https://www.youtube.com/watch?v=ImwrezYhw4w
* https://www.youtube.com/watch?v=wfMtDGfHWpA

**Important**: In further examples and the API we'll just infer that you've already generated your new object with the composite applied to it and will not give any more examples on how to do that.

**Examples**
```js
// Applying the composite to a new object literal
const obj = Object.assign({}, <%= shortPackagenameCamel %>());

// Equivalent with lodash.merge
const obj = _.merge({}, <%= shortPackagenameCamel %>());

// Just use it as a
const obj = <%= shortPackagenameCamel %>();
```

## API

TODO: Provide information for this package

## License

Apache-2.0
