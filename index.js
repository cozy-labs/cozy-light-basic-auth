var auth =require('http-auth');

var config = null;
var config_path = null;


var basic = auth.basic({
  realm: "Cozy Light", function (username, password, callback) {
    callback(username === "Tina" && password === "Bullock");
  }
});


var setPassword = function(password) {
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
    .command('set-password <password>')
    .description(
        'Set web password to access to the current Cozy Light instance')
    .action(setPassword);
};
