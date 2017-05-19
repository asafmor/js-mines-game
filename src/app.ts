import {MinesGame} from "./minesGame.class";
import {drawCube} from "./webgl.cube";

drawCube();

let game = new MinesGame(11);

// Level 1
let mines = 5;
let obstacles = 8;
game.start(mines, obstacles);

game.dump();

game.stepLeft();
game.stepLeft();
game.stepLeft();
game.stepLeft();
game.stepUp();
game.stepUp();
game.stepUp();
game.stepUp();
game.stepUp();
game.stepRight();
game.stepRight();
game.stepRight();
game.stepRight();

game.dump();





