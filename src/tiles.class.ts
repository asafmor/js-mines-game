import {MinesGame} from "./minesGame.class";

export abstract class Tile {

    constructor(protected game: MinesGame, public x: number, public y: number) {
    }

    leave(to: Tile = null) {

    }

    enter(from: Tile = null) {
        this.game.setPlayerPosition(this.x, this.y);
    }

    toString() {
        return '';
    }
}

export class EmptyTile extends Tile {

    protected score: number = 1;

    constructor(game: MinesGame, x: number, y: number) {
        super(game, x, y);
    }

    leave(to: Tile = null) {

    }

    enter(from: Tile = null) {
        super.enter(from);

        this.game.setTile(this.x, this.y, new VisitedTile(this.game, this.x, this.y));
        this.game.score += this.score;
    }

    toString() {
        return '-';
    }
}

export class VisitedTile extends Tile {

    constructor(game: MinesGame, x: number, y: number) {
        super(game, x, y);
    }

    leave(to: Tile = null) {

    }

    enter(from: Tile = null) {
        super.enter(from);

        this.game.die();
    }

    toString() {
        return '*';
    }
}

export class MineTile extends Tile {

    constructor(game: MinesGame, x: number, y: number) {
        super(game, x, y);
    }

    leave(to: Tile = null) {

    }

    enter(from: Tile = null) {
        super.enter(from);

        this.game.die();
    }

    toString() {
        return 'x';
    }
}

export class ObstacleTile extends Tile {

    constructor(game: MinesGame, x: number, y: number) {
        super(game, x, y);
    }

    leave(to: Tile = null) {

    }

    enter(from: Tile = null) {
        //don't go there. block
    }

    toString() {
        return '#';
    }
}


export class SlipperyTile extends Tile {

    protected score: number = 2;

    constructor(game: MinesGame, x: number, y: number) {
        super(game, x, y);
    }

    leave(to: Tile = null) {

    }

    enter(from: Tile = null) {
        super.enter(from);

        this.game.setTile(this.x, this.y, new VisitedTile(this.game, this.x, this.y));
        this.game.score += this.score;

        //Slip through
        if (from.x < this.x) {
            this.game.stepDown();
            console.log("Slipped down");
        } else if (from.x > this.x) {
            this.game.stepUp();
            console.log("Slipped up");
        } else if (from.y < this.y) {
            this.game.stepRight();
            console.log("Slipped right");
        } else if (from.y > this.y) {
            this.game.stepLeft();
            console.log("Slipped left");
        }
    }

    toString() {
        return '+';
    }
}