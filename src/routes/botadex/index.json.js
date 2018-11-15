import botadex from './_posts.js';

const contents = JSON.stringify(botadex.map(item => {
	return {
		specie: item.specie,
        commonName: item.commonName,
        img:item.img,
        txt:item.txt,
        found:item.found,
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}