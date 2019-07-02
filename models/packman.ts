import { DIRECTIONS, DEFAULTS } from '../models/Common'

class Packman {
    x: number;
    y: number;
    direction: string;

    constructor(x: number, y: number, direction: string) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.validate();
    }

    place(x: number, y: number, direction: string) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.validate();
    }

    move() {
        switch(this.direction) {
            case 'EAST':
                this.x++;
                break;
            case 'WEST':
                this.x--;
                break;
            case 'NORTH':
                this.y++;
                break;
            case 'SOUTH':
                this.y--;
                break;

        }
        this.validate();
    }

    left() {
        let index = this.currentIndex();
        if (index === 0) index = DIRECTIONS.length;
        this.direction = DIRECTIONS[--index];
        this.validate();
    }

    right() {
        let index = this.currentIndex();
        if (index === DIRECTIONS.length - 1) {
            index = 0;
        } else {
            index++;
        }
        this.direction = DIRECTIONS[index];
        this.validate();
    }

    currentIndex() {
        return DIRECTIONS.indexOf(this.direction);
    }

    validate() {
        if (this.x < 0) this.x = 0;
        if (this.x > 5) this.x = 5;

        if (this.y < 0) this.y = 0;
        if (this.y > 5) this.y = 5;

        if (!DIRECTIONS.includes(this.direction)) this.direction = DEFAULTS.direction;
    }
}

export { Packman }