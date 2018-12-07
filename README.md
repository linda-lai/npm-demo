# npm-demo
Notes and practice installing and creating node packages with npm.

```
mkdir [folder_name]         // create new directory for project
cd [folder_name]            // change directory into new folder
npm init                    // to create new package.json file
npm init --yes              // to use default
npm install [mongoose]      // installs node packet, creates node_modules folder
npm install                 // to install all dependencies
```

To use node packages within .js files:
```js
const _ = require('underscore');

// When "_" required in:
// Fist, assumes it is a core module
// Then, a file or folder
// Otherwise, assumes module exists in node_module folder to resolve itself

const result = _.contains([1, 2, 3], 2)
console.log(result)

// returns true when index.js file is run in Terminal
```

Node packets installed will be added as values to `"dependencies"` key automatically in package.json file.

The `node_modules/` folder will also contain any further dependent node modules required to run node packets listed in `'dependencies'`.

If any package uses a different version, it will be stored locally within that node package.

```json
{
  "name": "npm-demo",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "keywords": [],
  "description": "",
  "dependencies": {
    "mongoose": "^5.3.15",
    "underscore": "^1.9.1"
  }
}
```

To exclude the `node_modules/` folder from GitHub:
```
.gitignore
node_modules/
```

For dependencies listed in the package.json file, the `^` or `~` signifies to npm to download which version of mongoose to use.
```js
    // Match by version, patch or exact
  "dependencies": {
    // or 5.x.x
    "mongoose": "^5.3.15",
    // or 5.3.x
    "mongoose": "~5.3.15",
    // or only 5.3.15
    "mongoose": "5.3.15"
  }
```

To view all node_module dependencies:
```
npm list
```

To view node_module dependencies only for main application:
```
npm list --depth=0
```

To view properties of a specific package:
```
npm view mongoose
npm view mongoose dependencies
npm view versions
```

To view outdated packages and update to minor/patch versions:
```
npm outdated
npm update
```

To run a node package as a development (not production dependency):
```
npm i jshint --save-dev
```

To uninstall a node package from the `node_modules/` folder and listing in package.json dependencies:
```
npm uninstall moongoose
npm un moongoose
```

To install global package (*caution*):
``
sudo npm install -g npm
``

To create a new node package and publish on registry:
```
mkdir [folder_name]               // create new directory for project
cd [folder_name]                  // change directory into new folder
npm init --yes                    // initialise a new package.json
touch index.js                    // to create a new index.js file to initialise/export function
```

Create an main.js file to act as the entry point to export a function:

```js
module.exports.add = function(a, b) {return a + b};
```

In Terminal, create a new account or login to npm:
```
npm adduser                     // to create new npm account
npm login                       // username, password and email
npm publish                     // choose a unique package name
```
Voila! It is listed in the npm registry.

To install the new node, create a new project folder:
```
mkdir [folder_name]             // create new directory for project
cd [folder_name]                // change directory into new folder
npm init --yes                  // initialise a new package.json
npm i publish-node-package      // to install the custom npm
```

In that new project `index.js`, require it in:
```js
const exampleNpm = require('publish-node-package');
```