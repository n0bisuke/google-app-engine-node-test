'use strict'

require('@google/cloud-debug');
const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({port: process.env.PORT || '8080'});
server.route({
  method: 'POST',
  path:'/',
  handler: (request, reply) => {
    reply().code(204);
    console.log(request.payload);
    console.log('-------\n');
  }
});

server.route({
    method: 'GET',
    path:'/',
    handler: function (request, reply) {
        console.log(request.payload);
        console.log('-------\n');
        return reply('hello worlddddd!!!');
    }
});

server.start(() => {
  console.log('Server running at:', server.info.uri);
});

// // Copyright 2015-2016, Google, Inc.
// //
// // Licensed under the Apache License, Version 2.0 (the "License");
// // you may not use this file except in compliance with the License.
// // You may obtain a copy of the License at
// //
// //   http://www.apache.org/licenses/LICENSE-2.0
// //
// // Unless required by applicable law or agreed to in writing, software
// // distributed under the License is distributed on an "AS IS" BASIS,
// // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// // See the License for the specific language governing permissions and
// // limitations under the License.
//
// // [START app]
// 'use strict';
//
// var express = require('express');
//
// var app = express();
//
// app.get('/', function(req, res) {
//   res.status(200).send('Hello, world!!!!');
// });
//
// // Start the server
// var server = app.listen(process.env.PORT || '8080', '0.0.0.0', function() {
//   console.log('App listening at http://%s:%s', server.address().address,
//     server.address().port);
//   console.log('Press Ctrl+C to quit.');
// });
// // [END app]
