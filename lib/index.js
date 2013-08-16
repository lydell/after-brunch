// Generated by CoffeeScript 1.6.3
(function() {
  var AfterBrunch, exec, sysPath;

  sysPath = require('path');

  exec = require('child_process').exec;

  module.exports = AfterBrunch = (function() {
    AfterBrunch.prototype.brunchPlugin = true;

    function AfterBrunch(config) {
      var command, process, _i, _len, _ref,
        _this = this;
      this.config = config;
      _ref = this.config.plugins.afterBrunch;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        command = _ref[_i];
        process = command.split(" ")[0];
        exec("" + process + " --version", function(error, stdout, stderr) {
          if (error !== null) {
            console.log("exec error: " + error);
            return console.log("Check to see whether " + process + " is installed.");
          }
        });
      }
    }

    AfterBrunch.prototype.onCompile = function(generatedFiles) {
      var command, _i, _len, _ref, _results;
      _ref = this.config.plugins.afterBrunch;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        command = _ref[_i];
        _results.push(exec(command, function(error, stdout, stderr) {
          if (error !== null) {
            return console.log("exec error: " + error);
          }
        }));
      }
      return _results;
    };

    return AfterBrunch;

  })();

}).call(this);