## Ambyint Development Exercise

- [R2-D2 Adventure](./r2-d2-adventure)

## Retrospective of Exercise

**Why did I pick this one?**
I picked this one because it looked interesting, who doesn’t love Star wars themed tasks! 

**What was ‘fun’?**
Yeah, I had never done a node app that would require continual input from the user.  Typically it is dealing with a database or an API.  So this was fun as to how do I do this…

**What was challenging?**
Meh, not overly.  But it did keep me engaged.
The most challenging part was finding a ‘clean’ way to ensure that R2-D2 didn’t fall off the board when moved.  
The part that I still don’t like is the switch statements to determine what will occur on the rotate/move commands, I am sure there is a cleaner way of doing this but I couldn’t think of it at the time.

**How long did it take me?**
All in about 3 hours.

**Would I change things now?**
Really I would likely find a design pattern that replaces the switch statement, but that might be overkill.   
Probably should have wrote more unit tests, figured it was overkill because one could write lots of them to cover all the scenarios, but right now my two year old is sitting on my lap. 


** How to run it. ** 
Download the start.js file and run node .\start.js from a command line

Example output:
```
PS C:\Development\coding-challenges\ambyint-full-stack-coding-challenge\r2-d2-adventure> node .\start.js
Commands:
    Land: Lands Obi Wan and R2-D2 on the grid.
    Move x: Moves R2-D2 x spaces in the direction it is facing.
    Left: Rotates the droid 90 degrees left.
    Right: Rotates the droid 90 degrees right.
    Report: Reports the location of Obi Wan and R2-D2
>report
They are in Space...out there... in a galaxy far far away ... we have not yet landed on the planet, so really... space
>land
R2-D2 is at 43, 60 facing West
Obi Wan Kenobi is at 74, 88
>right
>move 28
>report
R2-D2 is at 43, 88 facing North
Obi Wan Kenobi is at 74, 88
>right
>report
R2-D2 is at 43, 88 facing East
Obi Wan Kenobi is at 74, 88
>move 31
Congratulations, you've saved the Rebellion!
PS C:\Development\coding-challenges\ambyint-full-stack-coding-challenge\r2-d2-adventure>
```

** How to test it. **

clone repo then run command in ambyint-full-stack-coding-challenge/r2-d2-adventure/ 
```
npm install
npm run test
```
