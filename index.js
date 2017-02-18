const episodes = [
  { id: 's06e01', title: 'The Red Woman' },
  { id: 's06e02', title: 'Home' },
  { id: 's06e03', title: 'Oathbreaker' },
  { id: 's06e04', title: 'Book of the Stranger' },
  { id: 's06e05', title: 'The Door' },
  { id: 's06e06', title: 'Blood of My Blood' },
  { id: 's06e07', title: 'The Broken Man' },
  { id: 's06e08', title: 'No One' },
  { id: 's06e09', title: 'Battle of the Bastards' },
];

const finaleEpisode = { id: 's06e10', title: 'The Winds of Winter' };

const getNextEpisodeInPlaylist = playlist => playlist[0];

const addToPlaylist = (playlist,episode) => {
 return [...playlist,episode] ;
  
};
const removeFromPlaylist = (playlist,episode) => {
	let p=Array.from(playlist)

  p.splice(p.indexOf(episode), 1); 
  return p 
};

function  bingeWatch(playlist) { 
  if (playlist.length >0){
   let p= removeFromPlaylist(playlist,getNextEpisodeInPlaylist)
   return bingeWatch(p)
  }
  return 'Please let there be more!'
}
