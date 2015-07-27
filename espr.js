//dev
//espruino
server = require("net").createServer(function(soc­ket) {
  socket.on('data', function(data) {
       parseData(data);
  });
}).listen(9000);

function parseData(data) {
  var idx = data.indexOf('D:', data.length - 11);
  tRGB[0] = data.substr(idx + 2, 3);
  tRGB[1] = data.substr(idx + 5, 3);
  tRGB[2] = data.substr(idx + 8, 3);

  console.log('r: ' + tRGB[0] + ' g: ' + tRGB[1] + ' b: ' + tRGB[2]);
  initColor(); // This fades the color a bit, and sends the pattern through SPI to the LED controller.
}
