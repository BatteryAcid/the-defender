//setup global namespace
var TDG = function(game) {
   orientated: false
};
window.onload = function() {
   (function() {
      // create required divs for game
      var gameContainerDiv = document.createElement('div');
      gameContainerDiv.id = 'gameContainer';
      var orientationDiv = document.createElement('div');
      orientationDiv.id = 'orientation';
      document.getElementsByTagName('body')[0].appendChild(gameContainerDiv);
      document.getElementsByTagName('body')[0].appendChild(orientationDiv);

      //get correct game height and width
      var gameWidth = this.gameWidth = window.innerHeight * window.devicePixelRatio;
      var gameHeight = this.gameHeight = window.innerWidth * window.devicePixelRatio;
      if (window.innerWidth * window.devicePixelRatio > window.innerHeight * window.devicePixelRatio) {
         gameWidth = window.innerWidth * window.devicePixelRatio;
         gameHeight = window.innerHeight * window.devicePixelRatio;
      }

      //create game
      var game = new Phaser.Game(gameWidth, gameHeight,
         Phaser.CANVAS, 'gameContainer', null, true, false);
      game.state.add('Boot', TDG.Boot);
      game.state.start('Boot');
   })();
};