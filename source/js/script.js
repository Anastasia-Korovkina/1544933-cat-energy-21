function Click() {
  document.getElementById('scr').src = (document.getElementById('typ').checked)?
  'img/mobile-after.png' : 'img/mobile-before.png'
}

const slider = document.getElementById('slider');
const beforeImage = document.getElementById('before');

slider.addEventListener('input', function() {
  beforeImage.style.width = slider.value + '%';
});
