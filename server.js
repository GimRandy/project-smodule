var express = require('express')
var fs = require('fs');
var path = require('path');
var https = require('https');
var app = express();
var sensor = require('./lib/sensor')
var router = require('./routes/router')
var config = require('./config')

var httpsOption = {
    key: fs.readFileSync(path.join(__dirname, config.path.ssl.key)),
    cert: fs.readFileSync(path.join(__dirname, config.path.ssl.cert))    
}

// app.use('/', router);

// sensor.load(
    // (success) => {
        var server = https.createServer(httpsOption, app).listen(config.location.port, () => {
            console.log('# mode: ' + app.get('env'));
            // console.log('# Location: ' + sensor.location.host + ':' + config.location.port);
            // console.log('# proxy port: ' + sensor.location.s_port);
        });
    // },
    // (fail) = (err) => {
        // console.log('[error] ' + err.resultStr);
    // }
// )