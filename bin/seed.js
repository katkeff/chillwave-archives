const {db, Album, Artist, Song} = require ('../db')

const seed = async () => {

  await db.sync({force: true})

  const tycho = await Artist.create({name: 'Tycho'})
  const odesza = await Artist.create({name: 'Odesza'})

  const artists = {
    "Tycho": tycho,
    "Odesza": odesza
  }

  const albums = [
    {
      "name": 'dive',
      artworkUrl: 'https://m.media-amazon.com/images/I/71VvUGNpiUL._SL1130_.jpg'
    },
    {
      "name": "awake",
      artworkUrl: 'https://vistapointe.net/images/tycho-2.jpg'
    },
    {
      "name": "A Moment Apart",
      artworkUrl: 'https://m.media-amazon.com/images/I/91GCM+K392L._SL1500_.jpg'
    }
  ]

  
  const [dive, awake, aMomentApart] = await Promise.all(albums.map(album => Album.create({
    name: album.name,
    artworkUrl: album.artworkUrl
  })))

  dive.setArtist(tycho)
  awake.setArtist(tycho)
  aMomentApart.setArtist(odesza)


  console.log('ALBUM METHODS:', Object.keys(Album.prototype))
  console.log('ARTIST METHODS:', Object.keys(Artist.prototype))
  console.log('SONG METHODS:', Object.keys(Song.prototype))

  // const dive = await Album.create({
  //   name: 'Dive',
  //   artistId: tycho.id,
  //   artworkUrl: 'https://m.media-amazon.com/images/I/71VvUGNpiUL._SL1130_.jpg'
  // })
  

  const songs = [
    {
    "name": "A Walk",
    "artist": "Tycho",
    "album": "Dive"
  },
  {
    "name": "Hours",
    "artist": "Tycho",
    "album": "Dive"
  },
  {
    "name": "Daydream",
    "artist": "Tycho",
    "album": "Dive"
  },
  {
    "name": "Dive",
    "artist": "Tycho",
    "album": "Dive"
  },
  {
    "name": "Dive",
    "artist": "Tycho",
    "album": "Dive"
  },
  {
    "name": "Coastal Brake",
    "artist": "Tycho",
    "album": "Dive"
  },
  {
    "name": "Ascension",
    "artist": "Tycho",
    "album": "Dive"
  },
  {
    "name": "Melanine",
    "artist": "Tycho",
    "album": "Dive"
  },
  {
    "name": "Adrift",
    "artist": "Tycho",
    "album": "Dive"
  },
  {
    "name": "Epigram",
    "artist": "Tycho",
    "album": "Dive"
  },
  {
    "name": "Elegy",
    "artist": "Tycho",
    "album": "Dive"
  },
  {
    "name": "Awake",
    "artist": "Tycho",
    "album": "Awake"
  },
  {
    "name": "Intro",
    "artist": "Odesza",
    "album": "A Moment Apart"
  },
]

  const [aWalk, Hours, Daydream, Dive, coastalBrake, Ascension, Melanine, Adrift, Epigram, Elegy, Awake, Intro] = await Promise.all(songs.map(song => Song.create({
    name: song.name,
    artistId: artists[song.artist].id,
    // albumId: albums[song.album].id
  })))

  await aWalk.setAlbum(dive);
  await Hours.setAlbum(dive);
  await Daydream.setAlbum(dive);
  await Dive.setAlbum(dive);
  await coastalBrake.setAlbum(dive);
  await Ascension.setAlbum(dive);
  await Melanine.setAlbum(dive);
  await Adrift.setAlbum(dive);
  await Epigram.setAlbum(dive);
  await Elegy.setAlbum(dive);
  await Awake.setAlbum(awake)
  await Intro.setAlbum(aMomentApart)

db.close()

console.log('Seeding success!')

}

seed()

module.exports = seed;
