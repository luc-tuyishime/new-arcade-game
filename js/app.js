// Enemies our player must avoid
var Enemy = function(x, y,size) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = Math.floor(Math.random() * 500) + 500;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};


Enemy.prototype.update = function(dt) {
    this.x = this.x + this.speed * dt;
    if (this.x >= 505) {
        this.x = 0;
    }
       CollisionPossibilities(this); 
};



// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};




// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y,size){
  this.x = x;
  this.y = y;
  this.size = size;
  this.speed =  Math.floor(Math.random() * 100) + 100;
  this.sprite = 'images/char-horn-girl.png';
};

Player.prototype.update = function() {
    // function not needed right now
    const enemy = new Enemy(0, Math.floor(Math.random() * 200) + 40);
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  ScoreAndLevel(score, level);
};

Player.prototype.handleInput = function(keyCode) {
    if (keyCode === "left") {
        player.x = player.x - player.speed;
    }

    else if (keyCode === "right") {
        player.x = player.y + player.speed;
    }

    else if (keyCode === "up") {
        player.y = player.y - player.speed - 10;
    }

    else if (keyCode === "down") {
        player.y = player.y + player.speed - 20;
    }
    else
    {
      console.log("the key code is undefined");
    }

};

var ScoreAndLevel = function(theScore, theLevel) {
    var canvas2D = document.getElementsByTagName('canvas');
    var object = canvas2D[0];
    DisplayscoreLevel.innerHTML = "Score: "+ theScore + " | " + "Level: " + theLevel;
    document.body.insertBefore(DisplayscoreLevel, object[0]);
};


var increaseEnemy = function(NumberofEnemies) {
    allEnemies.length = 0;
    for (var a = 0; a <= NumberofEnemies; a++) {
      const enemy = new Enemy(0, Math.floor(Math.random() * 200) + 40);
        allEnemies.push(enemy);
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var player = new Player(202.5,383,50);
var DisplayscoreLevel = document.getElementById('score-display');
var score = 0;
var level = 1;
const enemy = new Enemy(0, Math.floor(Math.random() * 200) + 40);

allEnemies.push(enemy);


var CollisionPossibilities = function(totheEnemy) {
    if (
        player.y + 133   >= totheEnemy.y + 88 && player.x + 29 <= totheEnemy.x + 70 && player.y + 60 <= totheEnemy.y + 115 && player.x + 76 >= totheEnemy.x + 11)
        {

        console.log('Sorry the collision is made');

        player.x = 202.5;
        player.y = 383;
    }


    else if (player.y > 383 ) {
        player.y = 383;
    }
    else if (player.x > 402.5) {
        player.x = 402.5;
    }
    else if (player.x < 2.5) {
        player.x = 2.5;
    }

    else if (player.y + 63 <= 0) {
        player.x = 202.5;
        player.y = 383;
        console.log('you made it!');
        score += 1;
        level += 1;
        console.log('the current score is: ' + score + ',and  current level is: ' + level);
        increaseEnemy(score);
    }
    else{
      console.log("start playing...");
    }
};


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);

});
