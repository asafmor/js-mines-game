import {getRandomInt} from "./utils";
import {EmptyTile, MineTile, ObstacleTile, SlipperyTile, Tile} from "./tiles.class";

/**
 * A game of mines class.
 */
export class MinesGame {

    readonly boardSize: number;

    board: Tile[][];

    numberOfMines: number;

    playerPositionX: number;
    playerPositionY: number;
    score: number;
    gameOver: boolean;

    /**
     * Construct a new game of mines by supplying the size
     * of the game board.
     * @param boardSize number of tiles
     */
    constructor(boardSize: number) {
        this.boardSize = boardSize;
        this.score = 0;
    }

    /**
     * Starts a new round of this game with specified number of mines
     * and obstacles placed randomly on the game board.
     * @param numberOfMines
     * @param numberOfObstacles
     */
    start(numberOfMines: number, numberOfObstacles: number) {
        this.init();

        this.numberOfMines = numberOfMines;
        this.placeMines(numberOfMines);
        this.placeObstacles(numberOfObstacles);
        this.placeSlipperyTiles();

        console.log("Game Started!");
    }

    /**
     * Move the player one tile to the left.
     */
    stepLeft() {
        let success = this.step(0, -1);
        if (success) console.log("Stepped left.");
    }

    /**
     * Move the player one tile to the right.
     */
    stepRight() {
        let success = this.step(0, 1);
        if (success) console.log("Stepped right.");
    }

    /**
     * Move the player one tile up.
     */
    stepUp() {
        let success = this.step(-1, 0);
        if (success) console.log("Stepped up.");
    }

    /**
     * Move the player one tile down.
     */
    stepDown() {
        let success = this.step(1, 0);
        if (success) console.log("Stepped down.");
    }

    /**
     * Print out a textual representation of the current
     * state of the game.
     */
    dump() {
        //console.table(this.board);
        //console.log(`Player Position = [${this.playerPositionX}, ${this.playerPositionY}]`);

        let res = ``;
        for (let i: number = 0; i < this.boardSize; i++) {
            for (let j: number = 0; j < this.boardSize; j++) {
                if (this.playerPositionX == i && this.playerPositionY == j) {
                    res += `\tP\t`;
                } else {
                    res += `\t${this.board[i][j].toString()}\t`;
                }
            }
            res += `\n`;
        }
        console.log(res);

        console.log(`Score = ${this.score}`)
    }

    setTile(x: number, y: number, tile: Tile) {
        this.board[x][y] = tile;
    }

    getTile(x: number, y: number) {
        return this.board[x][y];
    }

    /**
     * Make it a 'game over'.
     */
    die() {
        this.gameOver = true;

        console.log("Game Over!");
    }

    setPlayerPosition(x: number, y: number) {
        this.playerPositionX = x;
        this.playerPositionY = y;
    }

    private createBoard(boardSize: number) {
        // create an empty board
        let board = [];
        for (let i: number = 0; i < boardSize; i++) {
            board[i] = [];
            for (let j: number = 0; j < boardSize; j++) {
                board[i][j] = new EmptyTile(this, i, j);
            }
        }
        return board;
    }

    private init() {
        this.score = 0;
        this.gameOver = false;

        // init an empty board
        this.board = this.createBoard(this.boardSize);

        // init player position to center of the board
        let center = Math.floor(this.boardSize / 2);
        this.setPlayerPosition(center, center);
        this.getTile(this.playerPositionX, this.playerPositionY).enter();
    }

    private placeMines(numberOfMines: number) {
        this.placeRandomly(numberOfMines, MineTile);
    }

    private placeObstacles(numberOfObstacles: number) {
        this.placeRandomly(numberOfObstacles, ObstacleTile);
    }

    private placeSlipperyTiles() {
        this.placeRandomly(2, SlipperyTile);
    }

    private placeRandomly(numberOTiles: number, tileType) {
        for (let i: number = 0; i < numberOTiles; i++) {
            let placed: boolean = false;
            while (!placed) {
                let x = getRandomInt(0, this.boardSize);
                let y = getRandomInt(0, this.boardSize);
                let tile = this.getTile(x, y);
                if (tile instanceof EmptyTile) {
                    this.setTile(x, y, new tileType(this, x, y));
                    placed = true;
                }
            }
        }
    }

    /**
     * Step from current tile to destination tile by specifying the
     * horizontal and vertical deltas.
     * @param deltaX
     * @param deltaY
     * @returns {boolean} 'true' upon successful step.
     */
    private step(deltaX: number, deltaY: number): boolean {
        if (this.gameOver) {
            return false;
        }

        let x = Math.min(Math.max(this.playerPositionX + deltaX, 0), this.boardSize - 1);
        let y = Math.min(Math.max(this.playerPositionY + deltaY, 0), this.boardSize - 1);

        if ((x != this.playerPositionX) || (y != this.playerPositionY)) {
            let from = this.getTile(this.playerPositionX, this.playerPositionY);
            let to = this.getTile(x, y);

            from.leave(to);
            to.enter(from);

            return true;
        }

        return false;
    }

}