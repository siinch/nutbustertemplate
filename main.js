console.log("Hello from main");

// set up game window
canvas = document.createElement("canvas");
canvas.height = 400;
canvas.width = 800;
canvas.style.border = "5px solid gray";
canvas = document.body.appendChild(canvas);

// create a new nut object
let nut1 = new Nut({x: 300, y: 200}, {x: 5, y: 2}, 50, "red");
let nut2 = new Nut({x: 50, y: 200}, {x: 2, y: 5}, 50, "blue");
let nut3 = new Nut({x: 150, y: 250}, {x: 2, y: 5}, 25, "green");

// refresh game 60 times each second
function gameloop () {
  //clear the canvas
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

  //draw and move nuts
  nut1.draw();
  nut2.draw();
  nut3.draw();
  nut1.move();
  nut2.move();
  nut3.move();
  nut1.collide(nut2);
  nut1.collide(nut3);
  nut2.collide(nut3);
}
setInterval(gameloop, 1000/60)

//testing git in vscode
//testing again