import './style.css';
import image from './assets/logo.png';
import { displayList } from './modules/loadHomePage.js';
// import { getComments } from './modules/getComment.js';

const header = document.querySelector('.header');

const loadHeader = () => {
  const img = document.createElement('img');
  img.className = 'header-img';
  img.src = image;
  img.alt = 'logo image';
  return img;
};

header.appendChild(loadHeader());

document.addEventListener('DOMContentLoaded', () => {
  displayList();
});
