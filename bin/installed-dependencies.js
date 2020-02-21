#!/usr/bin/env node
const installedDependencies = require("..");

(async () => {
  try {
    console.log(await installedDependencies());
  } catch (err) {
    console.error(err);
  }
})();
