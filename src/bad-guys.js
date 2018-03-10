(function() {
   var BadGuys = function(game, levels) {
      var levelConfigs;
      var badGuyGroup = game.add.group();
      badGuyGroup.enableBody = true;
      badGuyGroup.physicsBodyType = Phaser.Physics.ARCADE;

      this.setupBadGuysForLevel = function(levelNumber) {
         levelConfigs = levels.getLevelConfigs(levelNumber);
         
         for (var i = 0; i < levelConfigs.badGuys.count; i++) {
            var badGuy = badGuyGroup.create(levelConfigs.badGuyLocationX(i), levelConfigs.badGuyLocationY(i),
               levelConfigs.badGuys.image);
            badGuy.scale.setTo(levelConfigs.badGuys.scale);
            badGuy.animations.add(levelConfigs.badGuys.animation);
            badGuy.animations.play(levelConfigs.badGuys.animation, 30, true);
         }

         badGuyGroup.setAll('anchor.x', 0.5);
         badGuyGroup.setAll('anchor.y', 0.5);
      }

      this.pursueGoodGuy = function(goodGuy) {
         badGuyGroup.forEach(function(singleEnemy) {
            setBadGuyVelocity(goodGuy, singleEnemy);
            setHitBoxSizeBasedOnZoom(singleEnemy);
         }, game.physics);
      }

      this.badGuysDefeated = function() {
         return badGuyGroup.countDead() === levelConfigs.badGuys.count;
      }

      function setBadGuyVelocity(goodGuy, singleEnemy) {
         var radians = game.physics.arcade.angleBetween(singleEnemy, goodGuy.getGoodGuyInstance());
         //TODO: the number here may cause some interesting behavior, test out 
         var degrees = radians * (180 / Math.PI);
         //number is speed here
         game.physics.arcade.velocityFromAngle(degrees, levelConfigs.badGuys.speed, singleEnemy.body.velocity);
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