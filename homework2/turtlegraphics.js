let grid = [
    ['.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.']
    ];

    class Turtle {

      constructor(y, x) {
        this.x = x;
        this.y = y;
        this.screen = grid;
        this.turtleSymbol = '*';
        this.placeTurtle();
        this.record;
        this.firstCommand = 0;
      }
      placeTurtle() {
        this.screen[this.y][this.x] = this.turtleSymbol;
      }

      drawScreen() {
        console.log(this.screen.map((e)=> e.join(' ')).join('\n'));
      }

      forward(n) {
        if (this.record === 'right' || this.firstCommand === 0){
          for(let i = 0; i < n; i += 1){
          this.x = this.x + 1;
          this.placeTurtle();
          this.firstCommand += 1;
         }
        }else if (this.record === 'left'){
          for(let i = 0; i < n; i += 1){
          this.y = this.y + 1;
          this.placeTurtle();
        }
      }
      return this;
    }

      right(n = 1) {
       for(let i = 0; i < n; i += 1){
          this.y = this.y;
          this.record = 'left';
        }
        return this;
     }

     left(n = 1) {
       for(let i = 0; i < n; i += 1){
          this.x = this.x;
          this.record = 'right';
        }
        return this;
     }
    }
    
    const turtle = new Turtle(0, 0);
turtle.forward(3).right().forward(2).right().forward(2).drawScreen();
