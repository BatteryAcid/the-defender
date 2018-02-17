(function() {
   var BadGuys = function(game) {
      var badGuyGroup = game.add.group();
      badGuyGroup.enableBody = true;
      badGuyGroup.physicsBodyType = Phaser.Physics.ARCADE;

      for (var i = 0; i < 50; i++) {
         var badGuy = badGuyGroup.create(game.world.randomX, game.world.randomY, 'guy');
         badGuy.body.setSize(200, 200, 20, 0);
         game.debug.body(badGuy);
      }

      this.pursueGoodGuy = function(goodGuy) {
         badGuyGroup.forEach(function(singleEnemy) {
            var radians = game.physics.arcade.angleBetween(singleEnemy, goodGuy.getGoodGuyInstance());
            var degrees = radians * (180 / Math.PI);
            game.physics.arcade.velocityFromAngle(degrees, 50, singleEnemy.body.velocity);
         }, game.physics);
      }

      this.getBadGuyGroup = function() {
         return badGuyGroup;
      }
   };

   BadGuys.prototype = {};

   TDG.BadGuys = BadGuys;
})();