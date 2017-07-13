var XpcConnection = require('./index');

var bluedService = new XpcConnection('com.apple.blued');

bluedService.on('error', function(message) {
  console.log('error: ' + JSON.stringify(message, undefined, 2));
});


bluedService.on('event', function(event) {
  console.log('event: ' + JSON.stringify(event, undefined, 2));
});

bluedService.setup();

bluedService.sendMessage({
  kCBMsgId: 1,
  kCBMsgArgs: {
    kCBMsgArgAlert: 1,
    kCBMsgArgName: 'node'
  }
});


setTimeout(function() {
  bluedService.stop();
  console.log('handle closed');
}, 3000);

setTimeout(function() {
  console.log('done');
}, 4000);
