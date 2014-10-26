node-xpc-connection
===================

[![Analytics](https://ga-beacon.appspot.com/UA-56089547-1/sandeepmistry/node-xpc-connection?pixel)](https://github.com/igrigorik/ga-beacon)

Connection binding for node.js

Supported data types
==================

 * int32/uint32
 * string
 * array
 * buffer
 * uuid
 * object

Example
=======

```
var XpcConnection = require('xpc-connection');

var xpcConnection = new XpcConnection('<Mach service name>');

xpcConnection.on('error', function(message) {
    ...
});

xpcConnection.on('event', function(event) {
    ...
});

xpcConnection.setup();

var mesage = {
    ... 
};

xpcConnection.sendMessage(mesage);

```
