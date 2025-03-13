window.onload = function () {
  
    let canvas = document.getElementById("sceneCanvas");
    let ctx = canvas.getContext("2d");

    
    let background = new Image();
    background.src = "Images/background.jpg"; // Make sure the path is correct

  
    let foreground1 = new Image();
    foreground1.src = "Images/foreground1.png";

    let foreground2 = new Image();
    foreground2.src = "Images/foreground2.png";

   
    background.onload = function () {
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        foreground1.onload = function () {
            ctx.drawImage(foreground1, 50, 200, 150, 150); 
            drawText(); 
        };

        foreground2.onload = function () {
            ctx.drawImage(foreground2, 300, 250, 200, 200);
        };
    };

   
    function drawText() {
        ctx.font = "24px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("Jason Proud - The X zone", 20, 40); 
    }
};
