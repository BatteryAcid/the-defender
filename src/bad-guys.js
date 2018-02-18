(function() {
   var BadGuys = function(game) {
      var badGuyGroup = game.add.group();
      badGuyGroup.enableBody = true;
      badGuyGroup.physicsBodyType = Phaser.Physics.ARCADE;
      var BAD_GUY_COUNT = 1;

      for (var i = 0; i < BAD_GUY_COUNT; i++) {
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
         var degrees = radians * (180 / Math.PI);
         //number is speed here
         game.physics.arcade.velocityFromAngle(degrees, 10, singleEnemy.body.velocity);
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