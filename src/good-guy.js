(function() {
   var GoodGuy = function(game) {
      var goodGuyInstance = game.add.image(TDG.GAME_WIDTH / 2, TDG.GAME_HEIGHT - 50, 'goodguy');
      goodGuyInstance.anchor.setTo(0, 0.1); //makes sure the bad guys always go to goodGuys center
      goodGuyInstance.scale.setTo(1);

      this.enableBody = true;
      this.physicsBodyType = Phaser.Physics.ARCADE;

      this.currentHeight = function() {
         return goodGuyInstance.y;
      }

      this.getGoodGuyInstance = function() {
         return goodGuyInstance;
      }

      this.move = function() {
         goodGuyInstance.y -= TDG.GOOD_GUY_SPEED;
      }
   };

   GoodGuy.prototype = {};

   TDG.GoodGuy = GoodGuy;
})();