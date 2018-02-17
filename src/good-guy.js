(function() {
   var GoodGuy = function(game, camera) {
      var goodGuyInstance = camera.create(TDG.GAME_WIDTH / 2, TDG.GAME_HEIGHT - 50, 'goodguy');
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
         goodGuyInstance.y -= .1;
      }
   };

   GoodGuy.prototype = {};

   TDG.GoodGuy = GoodGuy;
})();