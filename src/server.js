import sirv from 'sirv';
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
import compression from 'compression';
import {
	Store
} from 'svelte/store.js';
import * as sapper from '../__sapper__/server.js';

const {
	PORT,
	NODE_ENV
} = process.env;
const dev = NODE_ENV === 'development';

let badges=[{
	image: 'badge1.png',
	caption: 'Premier arbre identifié!'
}, {
	image: 'badge2.png',
	caption: 'Platane identifié!'
}]
let missions = [{
	id:1,
	coordinate: {
		lng: 48.856614, 
		lat: 2.3522219,
	},
	description: {
		title: 'Trouver 10 fruitiers',
		html: '<h1>Trouver 10 fruitiers</h1>'
	},

		status:'done'
}, 
{
	id:2,
	coordinate: {
		lng: 47.856614, 
		lat: 2.522219,
	},
	description: {
		title: 'Trouver 10 chênes',
		html: '<h1>Trouver 10 chênes</h1>'
	},

		status:'active'

}, 
{
	id:4,
	coordinate: {
		lng: 47.856614, 
		lat: 2.522219,
	},
	description: {
		title: 'Trouver 100 frênes',
		html: '<h1>Trouver 10 chênes</h1>'
	},

		status:'active'

}, 
{
	id:3,
	coordinate: {
		lng: 48.856614, 
		lat: 2.3522219,
	},
	description: {
		title: 'Trouver 10 jeunes pousses',
		html: '<h1>Trouver 10 jeunes pousse</h1>'
	},
		status:'current'
	
}, 
]
app // You can also use Express
	.use(
		compression({
			threshold: 0
		}),
		sirv('static', {
			dev
		}),
		sapper.middleware({
			store: request => {
				return new Store({
					missions:missions,
					badges: badges,
				});
			}
		})
	)


server.listen(PORT, err => {
	if (err) console.log('error', err);
});

io.on('connection', function (socket) {
	socket.emit('news', {
		hello: 'world'
	});
	socket.on('my other event', function (data) {
		console.log(data);
	});
});