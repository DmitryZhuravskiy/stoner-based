import './App.css';
import React from "react";

const base =
  [
    {
      "id": 0,
      "title": "Bipolar",
      "bandName": "Void Droid",
      "image": "./images/void-droid--bipolar.jpg",
      "year": 2020,
      "country": "Greece",
      "tracklist": [
        {
          "id": "01",
          "trackName": "Super Ego Villain",
          "duration": "04:56"
        },
        {
          "id": "02",
          "trackName": "Zarathustra",
          "duration": "05:59 "
        },
        {
          "id": "03",
          "trackName": "Milkaholic",
          "duration": "06:27 "
        },
        {
          "id": "04",
          "trackName": "Somen Mask",
          "duration": "06:06 "
        },
        {
          "id": "05",
          "trackName": "The Mars March",
          "duration": "03:47"
        },
        {
          "id": "06",
          "trackName": "The Venus Effect",
          "duration": "06:19"
        },
        {
          "id": "07",
          "trackName": "Clockface",
          "duration": "04:31"
        },
        {
          "id": "08",
          "trackName": "Bipolar",
          "duration": "02:34"
        },
        {
          "id": "09",
          "trackName": "Puer Blue",
          "duration": "09:06 "
        }
      ],
      "artists": [
        {
          "name": "AK",
          "role": "vocal, guitar"
        },
        {
          "name": "Bill Herra",
          "role": "guitar"
        },
        {
          "name": "Aggelos Ulmo",
          "role": "bass"
        },
        {
          "name": "Haris",
          "role": "drums"
        }
      ],
      "reviews": [
        {
          "author": "dave ross",
          "text": "Great sonics great vocals sometimes harsh mostly clean. My initial feeling was Corey Taylor ditching Slipknot to join the Palm Desert scene "
        },
        {
          "author": "051R158",
          "text": "Thanks for this Album. It had to grow on me. I Love it.eh Milkaholic seriously ? Is about drinking Milk !? i dont know if this is something to sing about. maybe you could explain it to me. "
        }
      ]
    },
    {
      "id": 1,
      "title": "Terrestrial",
      "bandName": "Void Droid",
      "image": "./images/void-droid--terrestrial.jpg",
      "year": 2016,
      "country": "Greece",
      "tracklist": [
        {
          "id": "01",
          "trackName": "Terrestrial",
          "duration": "00:22"
        },
        {
          "id": "02",
          "trackName": "Flying Jesus",
          "duration": "04:36"
        },
        {
          "id": "03",
          "trackName": "Praying Mantis",
          "duration": "04:36"
        },
        {
          "id": "04",
          "trackName": "The Watermaker",
          "duration": "07:19"
        },
        {
          "id": "05",
          "trackName": "Chameleon White",
          "duration": "08:14"
        },
        {
          "id": "06",
          "trackName": "Kua Fu",
          "duration": "06:06"
        },
        {
          "id": "07",
          "trackName": "Jack In The Box",
          "duration": "08:11"
        },
        {
          "id": "08",
          "trackName": "Martian Architect",
          "duration": "06:33"
        },
        {
          "id": "09",
          "trackName": "Mokujin",
          "duration": "04:22"
        },
        {
          "id": "10",
          "trackName": "Stray Dog Rolly",
          "duration": "06:28"
        }
      ],
      "artists": [
        {
          "name": "AK",
          "role": "vocal, guitar"
        },
        {
          "name": "Bill Herra",
          "role": "guitar"
        },
        {
          "name": "Aggelos Ulmo",
          "role": "bass"
        },
        {
          "name": "Haris",
          "role": "drums"
        }
      ],
      "reviews": [
        {
          "author": "Harry Harrison",
          "text": "Well it looks like the second outing from Void Droid has given us a unanimous decision on their genre of choice……………Stoner Groove Metal it is. They remind me of an angrier version of their countrymen, ‘Planet of Zeus’ or a sped-up version of ‘Soundcrawler’. Whatever the comparisons, it sounds good. Not the music you take home to Mum though. Favorite track: Martian Architect. "
        }
      ]
    },
    {
      "id": 2,
      "title": "Void Droid",
      "bandName": "Void Droid",
      "image": "./images/void-droid--void-droid.jpg",
      "year": 2013,
      "country": "Greece",
      "tracklist": [
        {
          "id": "01",
          "trackName": " Mokujin",
          "duration": "04:30"
        },
        {
          "id": "02",
          "trackName": "Praying Mantis",
          "duration": "04:57"
        },
        {
          "id": "03",
          "trackName": " Little Droid's Blues",
          "duration": "04:44"
        }
      ],
      "artists": [
        {
          "name": "Antreas K.",
          "role": "vocal, guitar"
        },
        {
          "name": "Bill T.",
          "role": "guitar"
        },
        {
          "name": "Aggelos A.",
          "role": "bass"
        },
        {
          "name": "Haris A.",
          "role": "drums"
        }
      ],
      "reviews": [
        {
          "author": "Harry Harrison",
          "text": "One part Stoner Groove Metal! One part Stoner Metal Grunge! One part Stoner……err……Ballard? The upside is that it’s 3 parts awesome and that’s 100% goodness. As Void Droid’s first outing, it feels like a band finding their way in their sonic journey. It doesn’t really matter which way they go, they’re equally talented in all those genres. No pigeonholing at the moment. Let's see were they go with this. Favorite track: Praying Mantis."
        },
        {
          "author": "Soshanna ♥",
          "text": "Two tracks of heavy hitting stoner metal, and one track, the last song is a haunting, stunningly beautiful vocal & guitar arrangement that leaves me breathless and goosebumps all over. What a voice this guy has! Bravo! Favorite track: Little Droid's Blues."
        },
        {
          "author": "Morts",
          "text": "Riff-o-rama!! While it's possible for someone to think this may be just another stoner/groove metal release, by really giving this a listen you realise how bloody great the delivery is, how full of feeling and enthusiasm! Belying the band's name, this music is anything but empty or robotic. Check it out and enjoy! Favorite track: Praying Mantis. "
        },
        {
          "author": "FDJ",
          "text": "Hard hitting retro-rock from Greece with some nice riffs and a good vocal. Greece is really turning out some good stoner bands of late! Favorite track: Praying Mantis."
        }
      ]
    },
    {
      "id": 3,
      "title": "Modern Panic",
      "bandName": "Deaf Radio",
      "image": "./images/deaf-radio--modern-panic.jpg",
      "year": 2019,
      "country": "Greece",
      "tracklist": [
        {
          "id": "01",
          "trackName": "Intro",
          "duration": "01:05"
        },
        {
          "id": "02",
          "trackName": "Death Club",
          "duration": "03:36"
        },
        {
          "id": "03",
          "trackName": "Animals",
          "duration": "05:43"
        },
        {
          "id": "04",
          "trackName": "Dance Like a Reptile",
          "duration": "04:11"
        },
        {
          "id": "05",
          "trackName": "Astypalea",
          "duration": "05:25"
        },
        {
          "id": "06",
          "trackName": "Modern Panic",
          "duration": "05:39"
        },
        {
          "id": "07",
          "trackName": "Colours",
          "duration": "04:44"
        },
        {
          "id": "08",
          "trackName": "Fossils",
          "duration": "06:31"
        },
        {
          "id": "09",
          "trackName": "Gas Station People",
          "duration": "05:22"
        }
      ],
      "artists": [
        {
          "name": "Panos Gklinos",
          "role": "vocal, guitar"
        },
        {
          "name": "Dimitris Sakellariou",
          "role": "vocal, guitar"
        },
        {
          "name": "George Diathesopoulos",
          "role": "bass"
        },
        {
          "name": "Dimitris Georgopoulos",
          "role": "drums"
        }
      ],
      "reviews": [
        {
          "author": "I'm joining a cult.",
          "text": "Like QotSA, but with lamb meat gyros. Favorite track: Modern Panic."
        },
        {
          "author": "tyler97 ",
          "text": "Excellent Album! Please don't change your style, I love the hard hitting and catchy songs. Favorite track: Dance Like a Reptile."
        }
      ]
    }
  ]
  const bandName = "Void Droid";

class App extends React.Component {
  // в компонент приходит значение группы, по ним происходит сортировка в самом компоненте.
  render() {
    return (
      <div className="discography">
        <h2>Discography of {bandName}</h2>
        <ul>
          {base.filter(x => x.bandName === bandName).map(album => (
            <li>
              <img src={album.image} width="150" height="150" alt="Album Cover"/>
              <p>{album.title}</p>
              <p>{album.year}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App;
