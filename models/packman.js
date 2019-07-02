"use strict";
var Common_1 = require('../models/Common');
var Packman = (function () {
    function Packman(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.validate();
    }
    Packman.prototype.place = function (x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.validate();
    };
    Packman.prototype.move = function () {
        switch (this.direction) {
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
    };
    Packman.prototype.left = function () {
        var index = this.currentIndex();
        if (index === 0)
            index = Common_1.DIRECTIONS.length;
        this.direction = Common_1.DIRECTIONS[--index];
        this.validate();
    };
    Packman.prototype.right = function () {
        var index = this.currentIndex();
        if (index === Common_1.DIRECTIONS.length - 1) {
            index = 0;
        }
        else {
            index++;
        }
        this.direction = Common_1.DIRECTIONS[index];
        this.validate();
    };
    Packman.prototype.currentIndex = function () {
        return Common_1.DIRECTIONS.indexOf(this.direction);
    };
    Packman.prototype.validate = function () {
        if (this.x < 0)
            this.x = 0;
        if (this.x > 5)
            this.x = 5;
        if (this.y < 0)
            this.y = 0;
        if (this.y > 5)
            this.y = 5;
        if (!Common_1.DIRECTIONS.includes(this.direction))
            this.direction = Common_1.DEFAULTS.direction;
    };
    return Packman;
}());
exports.Packman = Packman;
//# sourceMappingURL=packman.js.map