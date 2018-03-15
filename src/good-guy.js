(function() {
   var GoodGuy = function(game, levels, levelNumber) {
      this.levelConfigs = levels.getLevelConfigs(levelNumber);

      var goodGuyInstance = game.add.sprite(this.levelConfigs.goodGuy.locationX(), this.levelConfigs.goodGuy.locationY(), 'goodguy-walk');
      game.physics.enable(goodGuyInstance, Phaser.Physics.ARCADE);
      goodGuyInstance.scale.setTo(this.levelConfigs.goodGuy.scale);

      goodGuyInstance.animations.add('goodGuyWalk');
      goodGuyInstance.animations.play('goodGuyWalk', 30, true);

      this.currentHeight = function() {
         return goodGuyInstance.y;
      }

      this.currentWidth = function() {
         return goodGuyInstance.x;
      }

      this.getGoodGuyInstance = function() {
         return goodGuyInstance;
      }

      this.move = function() {
         this.levelConfigs.goodGuy.move(goodGuyInstance);

         if (TDG.ZOOMED_IN === false) {
            goodGuyInstance.body.setSize(goodGuyInstance.width, goodGuyInstance.height);
         } else {
            goodGuyInstance.body.setSize(goodGuyInstance.width * TDG.SCALE_FOR_ZOOM, goodGuyInstance.height * TDG.SCALE_FOR_ZOOM);
         }
      }
   };

   GoodGuy.prototype = {};

   TDG.GoodGuy = GoodGuy;
})();