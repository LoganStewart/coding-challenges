const readline = require('readline');

module.exports = {

    r2d2: {
        name: "R2-D2"
    },
    obi_wan: {
        name: "OBi Wan"
    },

    GRID: {
        MAX_X: 100,
        MAX_Y: 100,
    },

    getRandomInteger: function (max) {
        return Math.floor((Math.random() * max) + 1);
    },

    land: function (obj) {
        obj.x = this.getRandomInteger(this.GRID.MAX_X);
        obj.y = this.getRandomInteger(this.GRID.MAX_Y);
        switch (this.getRandomInteger(4)) {
            case 1:
                obj.orientation = "North"
                break;
            case 2:
                obj.orientation = "East"
                break;
            case 3:
                obj.orientation = "South"
                break;
            case 4:
                obj.orientation = "West"
                break;
        }
        obj.landed = true;
    },

    rotate: function (obj, rotateLeft) {
        switch (obj.orientation) {
            case "North":
                obj.orientation = rotateLeft ? "West" : "East"
                break;
            case "East":
                obj.orientation = rotateLeft ? "North" : "South"
                break;
            case "South":
                obj.orientation = rotateLeft ? "East" : "West"
                break;
            case "West":
                obj.orientation = rotateLeft ? "South" : "North"
                break;
        }
    },

    move: function (number) {
        //If I am heading N (y+number) or E (x+number) It will be added to the number I have 
        //If I am heading S (y-number) or W (x-number) it will be subtracted from the number I have 
        switch (this.r2d2.orientation) {
            case "North":
                this.sety(this.r2d2.y + number);
                break;
            case "East":
                this.setx(this.r2d2.x + number);
                break;
            case "South":
                this.sety(this.r2d2.y - number);
                break;
            case "West":
                this.setx(this.r2d2.x - number);
                break;
        }
    },

    setx: function (number) {
        if (number >= 0 && number <= this.GRID.MAX_X)
            this.r2d2.x = number;
    },

    sety: function (number) {
        if (number >= 0 && number <= this.GRID.MAX_Y)
            this.r2d2.y = number;
    },

    report: function () {
        if (this.r2d2.landed) {
            console.log(`R2-D2 is at ${this.r2d2.x}, ${this.r2d2.y} facing ${this.r2d2.orientation}`);
            console.log(`Obi Wan Kenobi is at ${this.obi_wan.x}, ${this.obi_wan.y}`);
        } else {
            console.log("They are in Space...out there... in a galaxy far far away ... we have not yet landed on the planet, so really... space");
        }
    },

    processCommand: function (command) {
        switch (command.toUpperCase()) {
            case 'LAND':
                if (!this.r2d2.landed) {
                    this.land(this.r2d2);
                    this.land(this.obi_wan);
                    this.report();
                }
                break;
            case 'LEFT':
                this.rotate(this.r2d2, true);
                break;
            case 'RIGHT':
                this.rotate(this.r2d2, false);
                break;
            case 'REPORT':
                this.report();
                break;
            default:
                var subcommand = command.toUpperCase().split(' ');
                //This was the most challening part of this exerise - may not be the best way I did this either.
                //I wanted to be able to move him negative but 
                if (subcommand.length == 2 && subcommand[0] === 'MOVE' && Number.isInteger(parseInt(subcommand[1], 10)))
                    this.move(Math.abs(parseInt(subcommand[1], 10)));
        }
    },

    keepLooking: function () {
        if (this.r2d2.landed && this.obi_wan.landed && this.r2d2.x === this.obi_wan.x && this.r2d2.y === this.obi_wan.y) {
            console.log("Congratulations, you've saved the Rebellion!")
            return false;
        }
        return true;
    },

    getInput: async function () {
        return new Promise(resolve => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            rl.question('>', (answer) => {
                rl.close();
                resolve(answer);
            });
        });
    },

    run: async function () {

        console.log('Commands:');
        console.log('    Land: Lands Obi Wan and R2-D2 on the grid (100x100).');
        console.log('    Move x: Moves R2-D2 x spaces in the direction it is facing.');
        console.log('    Left: Rotates the droid 90 degrees left.');
        console.log('    Right: Rotates the droid 90 degrees right.');
        console.log('    Report: Reports the location of Obi Wan and R2-D2');

        while (this.keepLooking()) {

            var command = await this.getInput();
            this.processCommand(command);
        }
    }

};



if (!module.parent) {
    module.exports.run();
  } 