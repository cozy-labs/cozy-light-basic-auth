var auth =require('http-auth');

var config = null;
var config_path = null;


var basic = auth.basic({
  realm: "Cozy Light"
  }, function (username, password, callback) {
    callback(username === "me" && password === "Bullock");
  }
);


var setPassword = function() {
  console.log("Password set is Bullock");
}


module.exports.configureAppServer = function(app, config, routes, callback) {
  app.use(auth.connect(basic));
  callback();
};


module.exports.configure = function(options, config, program) {
  config = config;
  config_path = options.config_path;

  program
    .command('set-password')
    .description(
        'Set basic password for the current Cozy Light instance (username ' +
        'is always me)')
    .action(setPassword);
};
