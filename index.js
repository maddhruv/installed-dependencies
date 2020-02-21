const npm = require("npm");

module.exports = function(cb) {
  return new Promise((resolve, reject) => {
    npm.load(err1 => {
      if (err1) cb ? cb(null, err1) : reject(err1);
      npm.ls("", (err2, d) => {
        if (err2) cb ? cb(null, err2) : reject(err2);
        let obj = {};
        for (let [a, b] of Object.entries(d._shrinkwrap.dependencies)) {
          obj[a] = b.version;
        }
        cb ? cb(obj) : resolve(obj);
      });
    });
  });
};
