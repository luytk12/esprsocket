/* global client */
function onConnected() {
  console.log('creating client');
  client = require("net").connect({host : "192.168.1.50", port: 1883}, function() { //'connect' listener
    console.log('client connected');
    client.write(mtpConnect("Espruino"));

    var intr = setInterval(function() {
      console.log("Publishing");
      client.write(mtpPub("a/b", E.getTemperature().toFixed(4)));
    }, 2000);

    client.on('data', function(data) {
      console.log("[MQTT]"+data.split("").map(­function(c) { return c.charCodeAt(0); }));
    });
    client.on('end', function() {
      console.log('client disconnected');
      clearInterval(intr);
    });
  });
}
//
// net.connect
//
// (top)
// Call type:
//
// net.connect(options, callback)
// Description
//
// Create a socket connection
// Parameters
//
// options An object containing host,port fields
//
// callback A function(res) that will be called when a connection is made. You can then call res.on('data', function(data) { ... }) and res.on('close', function() { ... }) to deal with the response.
// Returns
//
// Returns a new net.Socket object
