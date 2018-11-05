import * as sapper from '../__sapper__/client.js';
import { Store } from 'svelte/store.js';


sapper.start({
	target: document.querySelector('#sapper'),
	store: data => {
		// `data` is whatever was in the server-side store
		let store= new Store({mission:"new store data"});
		window.store=store
		return store
	  }
	
}).then(() => {
	console.log('client-side app has started');
  });