const images = [
  'Beta Key Art_VALORANT.jpg',
  'China_PreRegistration_KV.jpg',
  'Valorant_CloseBeta_Final_design.jpg',
  'Ep8a1_Defiance_Riot Client Login Page 1440p.png',
  'Valorant_EP-8-Teaser_The-arrival.jpg',
  'Valorant_EP8_Teaser_Cypher Reborn.jpg',
  'Valorant_EP8_Teaser_Omen and the Outlaw.png'
];

let index = 0;
const hero = document.getElementById('hero');

setInterval(() => {
  index = (index + 1) % images.length;
  hero.style.backgroundImage = `url('${images[index]}')`;
}, 3000);

window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
