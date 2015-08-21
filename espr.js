//dev
//espruino

//  client = require("net").connect({host : "192.168.1.50", port: 1883},
var server = require("net").createServer(function(soc­ket) {
  socket.on('data', function(data) {
    parseData(data);
  });

  var ow = new OneWire(A1);
  var sensor = require("DS18B20").connect(ow);
  var readTempInterval = setInterval(function() {
    console.log("Publishing " + sensor.getTemp());
    socket.write(sensor.getTemp());
  }, 5000);

  socket.on('end', function()
  {
    clearInterval(readTempInterval);
    console.log('client disconnected');
  });

}).listen(9000);



function parseData(data) {
  //parse
  //read-write
  //command execute
  var idx = data.indexOf('D:', data.length - 11);
  tRGB[0] = data.substr(idx + 2, 3);
  tRGB[1] = data.substr(idx + 5, 3);
  tRGB[2] = data.substr(idx + 8, 3);

  console.log('r: ' + tRGB[0] + ' g: ' + tRGB[1] + ' b: ' + tRGB[2]);
  // initColor(); //send to controller
}
