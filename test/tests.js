var Packman = require('../models/packman');
var assert = require('assert');

describe('Packman class', () => {

    it('should return initialized properties', () => {
        const packman = new Packman.Packman(0, 0, 'NORTH');
        assert.equal(packman.x, 0);
        assert.equal(packman.y, 0);
        assert.equal(packman.direction, 'NORTH');
    });

    it('should return max values after validation', () => {
        const packman = new Packman.Packman(10, 10, 'SOMEWHERE');
        assert.equal(packman.x, 5);
        assert.equal(packman.y, 5);
        assert.equal(packman.direction, 'EAST');
    });

    it('should stay on grid after MOVE SOUTH', () => {
        const packman = new Packman.Packman(0, 0, 'SOUTH');
        packman.move();
        assert.equal(packman.x, 0);
        assert.equal(packman.y, 0);
        assert.equal(packman.direction, 'SOUTH');
    });

    it('should stay on grid after MOVE WEST', () => {
        const packman = new Packman.Packman(0, 0, 'WEST');
        packman.move();
        assert.equal(packman.x, 0);
        assert.equal(packman.y, 0);
        assert.equal(packman.direction, 'WEST');
    });

    it('should stay on grid after MOVE NORTH', () => {
        const packman = new Packman.Packman(5, 5, 'NORTH');
        packman.move();
        assert.equal(packman.x, 5);
        assert.equal(packman.y, 5);
        assert.equal(packman.direction, 'NORTH');
    });

    it('should stay on grid after MOVE EAST', () => {
        const packman = new Packman.Packman(5, 5, 'EAST');
        packman.move();
        assert.equal(packman.x, 5);
        assert.equal(packman.y, 5);
        assert.equal(packman.direction, 'EAST');
    });

    it('should MOVE 1 position EAST', () => {
        const packman = new Packman.Packman(0, 0, 'EAST');
        packman.move();
        assert.equal(packman.x, 1);
        assert.equal(packman.y, 0);
        assert.equal(packman.direction, 'EAST');
    });

    it('should MOVE 1 position NORTH', () => {
        const packman = new Packman.Packman(0, 0, 'NORTH');
        packman.move();
        assert.equal(packman.x, 0);
        assert.equal(packman.y, 1);
        assert.equal(packman.direction, 'NORTH');
    });

    it('should rotate to the LEFT', () => {
        const packman = new Packman.Packman(0, 0, 'EAST');
        packman.left();
        assert.equal(packman.direction, 'NORTH');
    });

    it('should rotate to the RIGHT', () => {
        const packman = new Packman.Packman(0, 0, 'EAST');
        packman.right();
        assert.equal(packman.direction, 'SOUTH');
    });

    it('should rotate to the RIGHT Full', () => {
        const packman = new Packman.Packman(0, 0, 'EAST');
        packman.right();
        packman.right();
        packman.right();
        packman.right();
        assert.equal(packman.direction, 'EAST');
    });

    it('should rotate to the LEFT Full', () => {
        const packman = new Packman.Packman(0, 0, 'WEST');
        packman.left();
        packman.left();
        packman.left();
        packman.left();
        assert.equal(packman.direction, 'WEST');
    });

});