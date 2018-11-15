// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const botadex = [
	{
		specie: 'Salix babylonica',
		commonName: 'Saule pleureur',
		img:'saule.jpeg',
		found:true,
		txt:"Le saule pleureur (Salix babylonica) est une espèce d'arbre de la famille des Salicaceae. Son port retombant est caractéristique et en fait une espèce très appréciée comme arbre d'ornement notamment au bord des pièces d'eau. Ses longues branches-lianes pendantes sont la cause de son appellation de pleureur. Une autre explication de cette dénomination est liée au fait que de la sève ou encore de l'eau de condensation peuvent s'écouler des feuilles et des branches en quantité abondante.",
	},

	{
		specie: 'Quercus Lepidobalanus',
		commonName: 'Chêne blanc',
		img:'chene.jpg',
		found:true,
		txt:"Chêne est le nom vernaculaire de nombreuses espèces d'arbres et d'arbustes appartenant au genre Quercus. "
	},

	{
		specie: 'Why the name?',
		found:false,
		img: 'notfound.jpg',
		txt: "<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>",
	},

	{
		specie: 'Why the name?',
		found:false,
		img: 'notfound.jpg',
		txt: "<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>",
	},

	{
		specie: 'Why the name?',
		found:false,
		img: 'notfound.jpg',
		txt: "<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>",
	},
	{
		specie: 'Why the name?',
		found:false,
		img: 'notfound.jpg',
		txt: "<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>",
	},
	{
		specie: 'Why the name?',
		found:false,
		img: 'notfound.jpg',
		txt: "<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>",
	},
	{
		specie: 'Why the name?',
		found:false,
		img: 'notfound.jpg',
		txt: "<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>",
	},
	{
		specie: 'Why the name?',
		found:false,
		img: 'notfound.jpg',
		txt: "<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>",
	},
	{
		specie: 'Why the name?',
		found:false,
		img: 'notfound.jpg',
		txt: "<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>",
	},

];

botadex.forEach(post => {
	//botadex.html = botadex.html.replace(/^\t{3}/gm, '');
});

export default botadex;