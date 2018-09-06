import inView from 'in-view';
import VanillaTilt from 'vanilla-tilt';

import instagram from './modules/instagram';

// https://www.instagram.com/p/BlQQkKCg7_P/
// https://www.instagram.com/p/BnCAuIPH2z3/
// https://www.instagram.com/p/Bk5DG2BgC0G/
// https://www.instagram.com/p/BmioRpCgBJy/
// https://www.instagram.com/p/BhDJvn8gF6m/

const gramImgs = [
  { link: "https://www.instagram.com/p/BlQQkKCg7_P/", url: "https://scontent-sea1-1.cdninstagram.com/vp/bf2b563282b05d8a01aabb3cac341cb0/5C25D250/t51.2885-15/e15/36521905_906628876175401_2951109799024001024_n.jpg" },
  { link: "https://www.instagram.com/p/BnCAuIPH2z3/", url: "https://scontent-sea1-1.cdninstagram.com/vp/cd19cf735ef2b77c0ae12985d8ce8589/5C21758C/t51.2885-15/sh0.08/e35/p640x640/39871801_449464662128440_449618513942806528_n.jpg" },
  { link: "https://www.instagram.com/p/Bk5DG2BgC0G/", url: "https://scontent-sea1-1.cdninstagram.com/vp/6f6938d9068c1ba87ccf06b10cea6572/5C31BD90/t51.2885-15/e15/36037900_2075261822691192_7024576453224169472_n.jpg" },
  { link: "https://www.instagram.com/p/BmioRpCgBJy/", url: "https://scontent-sea1-1.cdninstagram.com/vp/854e68aaf68d6069162f8b886a03af26/5C2F62E9/t51.2885-15/e15/s640x640/38474840_276167649641269_6388022833502486528_n.jpg" },
  { link: "https://www.instagram.com/p/BhDJvn8gF6m/", url: "https://scontent-sea1-1.cdninstagram.com/vp/c7faebd8ba5e1c72328f4d41cea4e4a1/5C1693A5/t51.2885-15/e15/29400802_162112241167182_3740008524369887232_n.jpg" },
];

// INSTAGRAM
instagram('.gram__photo', gramImgs);

// Tilt
VanillaTilt.init(document.querySelector(".hero__inner"), {
  max: 10,
  speed: 400,
  // glare:true,
  // "max-glare": 0.25
});

// IN-VIEW
inView('.watch-vis')
  .on('enter', (el) => {
    el.classList.add('is-visible');
  })
  .on('exit', (el) => {
    el.classList.remove('is-visible');
  });
