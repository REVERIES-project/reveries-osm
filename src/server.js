import sirv from 'sirv';
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
import compression from 'compression';
import { Store } from 'svelte/store.js';
import * as sapper from '../__sapper__/server.js';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

app // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			store: request => {
			  return new Store({
				badges: [{image:'badge1.png',caption:'Premier arbre identifié!'},{image:'badge2.png',caption:'Coquetier identifié!'}]
			  });
			}
		})
	)


	server.listen(PORT, err => {
		if (err) console.log('error', err);
	});

	io.on('connection', function (socket) {
		socket.emit('news', { hello: 'world' });
		socket.on('my other event', function (data) {
			console.log(data);
		});
	});
		