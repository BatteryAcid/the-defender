(function() {
   var BadGuys = function(game) {
      var badGuyGroup = game.add.group();
      badGuyGroup.enableBody = true;
      badGuyGroup.physicsBodyType = Phaser.Physics.ARCADE;

      //TODO: consider using config files for bad guy placement instead of random
      for (var i = 0; i < TDG.BAD_GUY_COUNT; i++) {
         var badGuy = badGuyGroup.create(game.world.randomX, game.world.randomY, 'guy');
      }

      badGuyGroup.setAll('anchor.x', 0.5);
      badGuyGroup.setAll('anchor.y', 0.5);

      this.pursueGoodGuy = function(goodGuy) {
         badGuyGroup.forEach(function(singleEnemy) {
            setBadGuyVelocity(goodGuy, singleEnemy);
            setHitBoxSizeBasedOnZoom(singleEnemy);
         }, game.physics);
      }

      function setBadGuyVelocity(goodGuy, singleEnemy) {
         var radians = game.physics.arcade.angleBetween(singleEnemy, goodGuy.getGoodGuyInstance());
         //TODO: the number here may cause some interesting behavior, test out 
         var degrees = radians * (100 / Math.PI);
         //number is speed here
         game.physics.arcade.velocityFromAngle(degrees, TDG.CHASE_SPEED, singleEnemy.body.velocity);
      }

      function setHitBoxSizeBasedOnZoom(singleEnemy) {
         if (TDG.ZOOMED_IN === false) {
            singleEnemy.body.setSize(50, 80, 13, 0);
         } else {
            singleEnemy.body.setSize(150, 250, -40, -90);
         }
      }

      this.getBadGuyGroup = function() {
         return badGuyGroup;
      }
   };

   BadGuys.prototype = {};

   TDG.BadGuys = BadGuys;
})();