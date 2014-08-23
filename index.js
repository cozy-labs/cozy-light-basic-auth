
config = null;
config_path = null;

var setPassword = function() {

}

module.exports.configureAppServer = function(app, config, routes, callback) {
  callback();
};

module.exports.configure = function(options, config, program) {
  config = config;
  config_path = options.config_path;

  program
    .command('set-password')
    .description('Set web password to access to current Cozy Light instance')
    .action(setPassword);
};
