var intellijUtil = require('./intellijUtil');

function FileListUpdater(config) {
  var paths = [];
  config.files.forEach(function (file) {
    var pattern = file.pattern;
    if (intellijUtil.isString(pattern)) {
      paths.push(pattern);
    }
  });
  intellijUtil.sendIntellijEvent('config-file-patterns', paths);
}

exports.FileListUpdater = FileListUpdater;
