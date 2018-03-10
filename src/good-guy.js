(function() {
   var GoodGuy = function(game, levels, levelNumber) {
      this.levelConfigs = levels.getLevelConfigs(levelNumber);

      var goodGuyInstance = game.add.sprite(this.levelConfigs.goodGuy.locationX(), this.levelConfigs.goodGuy.locationY(), 'goodguy-walk');
      game.physics.enable(goodGuyInstance, Phaser.Physics.ARCADE);
      goodGuyInstance.anchor.setTo(0, 0.1); //makes sure the bad guys always go to goodGuys center
      goodGuyInstance.scale.setTo(this.levelConfigs.goodGuy.scale);

      goodGuyInstance.animations.add('goodGuyWalk');
      goodGuyInstance.animations.play('goodGuyWalk', 30, true);

      this.currentHeight = function() {
         return goodGuyInstance.y;
      }

      this.getGoodGuyInstance = function() {
         return goodGuyInstance;
      }

      this.move = function() {
         this.levelConfigs.goodGuy.move(goodGuyInstance);

         if (TDG.ZOOMED_IN === false) {
            goodGuyInstance.body.setSize(75, 100, 0, -10);
         } else {
            goodGuyInstance.body.setSize(150, 250, 10, -10);
         }
      }
   };

   GoodGuy.prototype = {};

   TDG.GoodGuy = GoodGuy;
})();