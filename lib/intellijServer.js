function buildPluginList(configPlugins) {
  var plugins = [require.resolve('./intellijReporter.js')];
  if (configPlugins != null) {
    plugins.push.apply(plugins, configPlugins);
  }
  return plugins;
}

function buildReporterList(configReporters) {
  var reporters = configReporters.filter(function (reporter) {
    return 'coverage' === reporter;
  });
  reporters.push('intellij');
  return reporters;
}

var ideCfg = require('./ideConfig.js');
var constants = ideCfg.requireKarmaModule('lib/constants.js');
var server = ideCfg.requireKarmaModule('lib/server.js');
var cfg = ideCfg.requireKarmaModule('lib/config.js');

var config = cfg.parseConfig(ideCfg.getConfigFile(), {});

var extendedPlugins = buildPluginList(config.plugins);
var reporters = buildReporterList(config.reporters);

var cliOptions = {
  autoWatch: false,
  colors: false,
  configFile: ideCfg.getConfigFile(),
  reporters: reporters,
  singleRun: false,
  // specify runner port to have runner port info dumped to standard output
  runnerPort: constants.DEFAULT_RUNNER_PORT + 1,
  plugins: extendedPlugins
};

process.stdout.write('##intellij-event[config:' + JSON.stringify(config) + ']\n');
server.start(cliOptions);
