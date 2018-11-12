import * as sapper from '../__sapper__/client.js';
import OSMStore from './osm_store.js';

sapper.start({
			target: document.querySelector('#sapper'),
			store: data => {
				// `data` is whatever was in the server-side store
				let store = new OSMStore({
						badges: [{
							image: 'badge1.png',
							caption: 'Premier arbre identifié!'
						}, {
							image: 'badge2.png',
							caption: 'Coquetier identifié!'
						}],
						missions: [{
								id: 0,
								coordinate: {
									lng: 48.856614,
									lat: 2.3522219,
								},
								description: {
									title: 'Trouver 10 fruitiers',
									html: '<h1>Trouver 10 fruitiers</h1>'
								},
								status: 'done'
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
								id: 1,
								coordinate: {
									lng: 47.856614,
									lat: 2.522219,
								},
								description: {
									title: 'Trouver 10 chênes',
									html: '<h1>Trouver 10 chênes</h1>'
								},
									status: 'active'
							},
							{
								id: 2,
								coordinate: {
									lng: 48.856614,
									lat: 2.3522219,
								},
								description: {
									title: 'Trouver 10 jeunes pousses',
									html: '<h1>Trouver 10 jeunes pousse</h1>'
								},
									status: 'current'
							}]
						}
					)

					window.store = store
					return store
				}

			}).then(() => {
			console.log('client-side app has started');
		});