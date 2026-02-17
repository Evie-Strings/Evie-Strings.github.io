function draw() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");


  ctx.fillStyle = "rgb(232, 213, 193)";
  ctx.fillRect(400, 200, 600, 700)  //Face

  ctx.fillRect(500, 900, 400, 200)  //Neck

  ctx.fillStyle = "rgb(66, 67, 97)";
  ctx.fillRect(275, 1050, 850, 700)  //Shirt

  ctx.beginPath(); //Left Shoulder
  ctx.arc(300, 1250, 250, Math.PI, Math.PI * 3/2, false);
  ctx.lineTo(300, 1250);
  ctx.lineTo(350, 1250);
  ctx.fill(); 

  ctx.fillRect(50, 1250, 250, 100) //Left Sleeve

  ctx.beginPath(); //Right Shoulder
  ctx.arc(1100, 1250, 250, Math.PI * 2, Math.PI * 3/2, true);
  ctx.lineTo(1100, 1250);
  ctx.lineTo(1150, 1250);
  ctx.fill();

  ctx.fillRect(1100, 1250, 250, 100) //Right Sleeve

  ctx.fillStyle = "rgb(50, 51, 74)";

  ctx.beginPath(); //Collar 
  ctx.arc(700, 1050, 190, Math.PI * 2, Math.PI, false);
  ctx.fill();

  ctx.fillStyle = "rgb(232, 213, 193)";

  ctx.beginPath(); //Collar Cutout
  ctx.arc(700, 1050, 150, Math.PI * 2, Math.PI, false);
  ctx.fill();

  ctx.fillRect(75, 1350, 200, 500) //Left Arm

  ctx.fillRect(1120, 1350, 200, 500) //Right Arm

  ctx.fillStyle = "rgb(59, 35, 8)";
  ctx.fillRect(250, 250, 200, 800) //Left Brown Hair

  ctx.fillRect(950, 250, 200, 800) //Right Brown Hair

  ctx.fillRect(450, 50, 500, 200) //Top Brown Hair

  ctx.beginPath(); //Left Brown Hair Top Arc
  ctx.arc(450, 250, 200, Math.PI, Math.PI * 3/2, false);
  ctx.lineTo(450, 250);
  ctx.lineTo(500, 250);
  ctx.fill(); 

  ctx.beginPath(); //Right Brown Hair Top Arc
  ctx.arc(950, 250, 200, Math.PI * 2, Math.PI * 3/2, true);
  ctx.lineTo(950, 250);
  ctx.lineTo(1000, 250);
  ctx.fill();

  ctx.beginPath(); //Left Brown Hair Bottom Arc
  ctx.arc(350, 1050, 100, Math.PI * 2, Math.PI, false);
  ctx.lineTo(250, 1050);
  ctx.lineTo(300, 1050);
  ctx.fill();

  ctx.beginPath(); //Right Brown Hair Bottom Arc
  ctx.arc(1050, 1050, 100, Math.PI * 2, Math.PI, false);
  ctx.lineTo(1050, 1050);
  ctx.lineTo(1100, 1050);
  ctx.fill();

  ctx.fillStyle = "rgb(240, 189, 208)"; //Left Pink Hair
  ctx.fillRect(450, 250, 100, 800)

  ctx.fillStyle = "rgb(240, 189, 208)"; //Right Pink Hair
  ctx.fillRect(850, 250, 100, 800)

  ctx.beginPath(); //Left Pink Hair Bottom Arc
  ctx.arc(500, 1050, 50, Math.PI * 2, Math.PI, false);
  ctx.lineTo(500, 950);
  ctx.lineTo(550, 950);
  ctx.fill();

  ctx.beginPath(); //Right Pink Hair Bottom Arc
  ctx.arc(900, 1050, 50, Math.PI * 2, Math.PI, false);
  ctx.lineTo(900, 950);
  ctx.lineTo(950, 950);
  ctx.fill();

  ctx.fillStyle = "rgb(59, 35, 8)";

  ctx.beginPath(); //Left Brown Bangs
  ctx.arc(450, 200, 260, Math.PI * 2, Math.PI/2, false);
  ctx.lineTo(450, 200);
  ctx.lineTo(500, 200);
  ctx.fill();

  ctx.beginPath(); //Right Brown Bangs
  ctx.arc(950, 200, 260, Math.PI, Math.PI/2, true);
  ctx.lineTo(950, 200);
  ctx.lineTo(1000, 200);
  ctx.fill();

  ctx.fillStyle = "rgb(38, 19, 3)";

  ctx.beginPath(); //Left Eye
  ctx.arc(610, 500, 50, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.beginPath(); //Right Eye
  ctx.arc(790, 500, 50, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.beginPath(); //Mouth
  ctx.arc(700, 750, 100, Math.PI, Math.PI * 2, true);
  ctx.stroke();

}
draw();