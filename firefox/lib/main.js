var tabs = require("sdk/tabs");
var self = require("sdk/self");

tabs.on('ready', function(tab) {
  worker = tab.attach({
  contentScriptFile: [self.data.url("source.js")]
  });
});

