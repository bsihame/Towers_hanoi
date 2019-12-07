let readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("What is your name? ", (answer)=>{
  console.log(`Hi ${answer} Welcome to Towers Game!!`);
});

class TowerGame {
  constructor(player, moves, rods){
    this.player = player,
    this.moves = moves;
    this.rods = [1, 2, 3];
    this.discs = [s, m, l];
    this.currentMoves = [];
  }


}



