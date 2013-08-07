var cli = require('./intellijCli')
  , intellijUtil = require('./intellijUtil')
  , RESUME_TEST_RUNNING_MESSAGE = 'resume-test-running';

function runTests() {
  var runner = cli.requireKarmaModule('lib/runner.js');
  var serverPort = cli.getServerPort();
  runner.run(
    {
      port: serverPort,
      refresh: false
    },
    function() {}
  );
}

if (cli.isDebug()) {
  intellijUtil.processStdInput(function(line) {
    var resume = RESUME_TEST_RUNNING_MESSAGE === line;
    if (resume) {
      runTests();
    }
    return !resume;
  });
}
else {
  runTests();
}
