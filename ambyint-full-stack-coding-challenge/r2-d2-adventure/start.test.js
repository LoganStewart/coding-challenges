var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai

var sut = require('./start');

describe('adventure', () => {
    it('initial state', () => {
      expect(sut.r2d2).eql({ name: 'R2-D2' });
      expect(sut.obi_wan).eql({ name: 'OBi Wan' });
      expect(sut.GRID).eql({ MAX_X: 100, MAX_Y: 100 });
    });

    it('lands', () => {
      var object = {};
      
      sut.land(object);

      expect(object.x).to.be.ok;
      expect(object.x).greaterThan(-1);
      expect(object.x).lessThan(sut.GRID.MAX_X +1);
      expect(object.y).to.be.ok;
      expect(object.y).greaterThan(-1);
      expect(object.y).lessThan(sut.GRID.MAX_Y +1);
      expect(object.landed).to.be.true;
      expect(object.orientation).to.be.oneOf(["North", "South", "East", "West"]);
      
    });

    it("rotates", () => {
        var object = {orientation:"North"};

        sut.rotate(object, false);
        expect(object.orientation).eql("East");
        sut.rotate(object, false);
        expect(object.orientation).eql("South");
        sut.rotate(object, false);
        expect(object.orientation).eql("West");
        sut.rotate(object, false);
        expect(object.orientation).eql("North");

        sut.rotate(object, true);
        expect(object.orientation).eql("West");
        sut.rotate(object, true);
        expect(object.orientation).eql("South");
        sut.rotate(object, true);
        expect(object.orientation).eql("East");
        sut.rotate(object, true);
        expect(object.orientation).eql("North");
    });

    it("set x", () => {
        sut.r2d2.x = 0;
        sut.setx(1);
        expect(sut.r2d2.x).eql(1);

        sut.setx(101);
        expect(sut.r2d2.x).eql(1);

        sut.setx(-1);
        expect(sut.r2d2.x).eql(1);

        sut.setx(100);
        expect(sut.r2d2.x).eql(100);
        
        sut.setx(0);
        expect(sut.r2d2.x).eql(0);
    });
    it("set y", () => {
        sut.r2d2.x = 0;
        sut.sety(1);
        expect(sut.r2d2.y).eql(1);

        sut.sety(101);
        expect(sut.r2d2.y).eql(1);

        sut.sety(-1);
        expect(sut.r2d2.y).eql(1);

        sut.sety(100);
        expect(sut.r2d2.y).eql(100);
        
        sut.sety(0);
        expect(sut.r2d2.y).eql(0);
    });

    it("moves", () => {
        
        sut.r2d2.x = 0;
        sut.r2d2.y = 0;
        sut.r2d2.orientation = "North";

        sut.move(1);
        expect(sut.r2d2.y, "Should be 1 after valid move").eql(1);
        expect(sut.r2d2.x, "Should have remained same").eql(0);

        sut.move(100);
        expect(sut.r2d2.y, "Should be 1 after invalid move").eql(1);
        expect(sut.r2d2.x, "Should have remained same after invalid move").eql(0);
    });
  });