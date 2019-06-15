import inView from 'in-view';

import instagram from './modules/instagram';
import Tilt from './modules/Tilt';

// https://www.instagram.com/p/BlQQkKCg7_P/
// https://www.instagram.com/p/BnCAuIPH2z3/
// https://www.instagram.com/p/Bk5DG2BgC0G/
// https://www.instagram.com/p/BmioRpCgBJy/
// https://www.instagram.com/p/BhDJvn8gF6m/

const gramImgs = [
  { link: "https://www.instagram.com/p/BZj3obMgBS7/", url: "https://www.dropbox.com/s/j1y0cehcswmqzst/21981035_1501343663260556_5889828514319826944_n.jpg?raw=1" },
  { link: "https://www.instagram.com/p/BnCAuIPH2z3/", url: "https://www.dropbox.com/s/t4iqt0fxavcfjwl/28152730_180970015851378_7202708357809963008_n.jpg?raw=1" },
  { link: "https://www.instagram.com/p/Bk5DG2BgC0G/", url: "https://www.dropbox.com/s/u71sphh1khh5wkd/36037900_2075261822691192_7024576453224169472_n.jpg?raw=1" },
  { link: "https://www.instagram.com/p/BmioRpCgBJy/", url: "https://www.dropbox.com/s/4p1euuq2m9cxm5s/38474840_276167649641269_6388022833502486528_n.jpg?raw=1" },
  { link: "https://www.instagram.com/p/BhDJvn8gF6m/", url: "https://www.dropbox.com/s/in51ntioywsg8o8/29400802_162112241167182_3740008524369887232_n.jpg?raw=1" },
];

// INSTAGRAM
instagram('.gram__photo', gramImgs);

const hero = new Tilt({
  el: document.querySelector(".hero__inner"),
  max: 7,
  rotateX: 1,
  rotateY: -1
});

// IN-VIEW
inView('.watch-vis')
  .on('enter', (el) => {
    el.classList.add('is-visible');
  })
  .on('exit', (el) => {
    el.classList.remove('is-visible');
  });
