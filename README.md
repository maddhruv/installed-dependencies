# installed-dependencies

Get installed dependencies in your `node_modules`

## Install

`npm i installed-dependencies`

or

`npm i -g installed-dependencies`

## Usage

### Module

#### The callbacks ☎ way

```js
const installedDependencies = require("installed-dependencies");

installedDependencies((dependencies, err) => {
  if (err) throw err;
  console.log(dependencies);
});
```

#### The promises 👏 way

```js
const installedDependencies = require("installed-dependencies");

installedDependencies()
  .then(dependencies => console.log(dependencies))
  .catch(err => console.error(err));
```

#### The async/await 💓 way

```js
const installedDependencies = require("installed-dependencies");

(async () => {
  try {
    console.log(await installedDependencies());
  } catch (err) {
    console.error(err);
  }
})();
```

### CLI

`npx installed-dependencies`
