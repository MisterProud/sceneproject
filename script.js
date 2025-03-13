const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


const backgroundImg = new Image();
backgroundImg.src = 'images/background.jpg';

backgroundImg.onload = function() {
  ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);


  const foregroundImg1 = new Image();
  foregroundImg1.src = 'images/foreground1.png';

  foregroundImg1.onload = function() {
    ctx.drawImage(foregroundImg1, 10, 20, 20, 15);
  };

  const foregroundImg2 = new Image();
  foregroundImg2.src = 'images/foreground2.png';

  foregroundImg2.onload = function() {
    ctx.drawImage(foregroundImg2, 40, 30, 25, 20);
  };

  
  ctx.font = '40px Arial';
  ctx.fillStyle = 'white';
  ctx.fillText('Jason Proud', 50, 50);
  ctx.fillText('The X Zone', 50, 100);
};