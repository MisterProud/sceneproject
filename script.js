const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const backgroundImg = new Image();
backgroundImg.src = 'images/background.jpg';

backgroundImg.onload = function() {
  console.log('Background image loaded'); 
  ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);

  
  const foregroundImg1 = new Image();
  foregroundImg1.src = 'images/foreground1.png';

  foregroundImg1.onload = function() {
    console.log('Foreground image 1 loaded'); 
    ctx.drawImage(foregroundImg1, 100, 200, 200, 150);
  };

  const foregroundImg2 = new Image();
  foregroundImg2.src = 'images/foreground2.png';

  foregroundImg2.onload = function() {
    console.log('Foreground image 2 loaded'); 
    ctx.drawImage(foregroundImg2, 400, 300, 250, 200);
  };

  
  ctx.font = '40px Arial';
  ctx.fillStyle = 'white';
  ctx.fillText('Jason Proud', 50, 50);
  ctx.fillText('The Infinity Zone', 50, 100);
};

backgroundImg.onerror = function() {
  console.error('Failed to load background image'); 
};