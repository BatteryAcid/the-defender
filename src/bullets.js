(function() {
   var Bullets = function(game) {
      this.game = game;
      var fireRate = 100; // probably safe to not let them spam too many per second
      var nextFire = 0;

      var bulletGroup = this.game.add.group();
      bulletGroup.enableBody = true;
      bulletGroup.physicsBodyType = Phaser.Physics.ARCADE;

      bulletGroup.createMultiple(50, 'bullet');
      bulletGroup.setAll('checkWorldBounds', true);
      bulletGroup.setAll('outOfBoundsKill', true);

      this.getBulletGroup = function() {
         return bulletGroup;
      }

      this.getFireRate = function() {
         return fireRate;
      }

      this.getNextFire = function() {
         return nextFire;
      }

      this.setNextFire = function(nextFireToSet) {
         nextFire = nextFireToSet;
      }
   };

   Bullets.prototype = {
      fire: function() {
         if (this.game.time.now > this.getNextFire() && this.getBulletGroup().countDead() > 0) {
            this.setNextFire(this.game.time.now + this.getFireRate());

            var bullet = this.getBulletGroup().getFirstDead();

            //reset bullet and scale
            bullet.reset(TDG.GAME_WIDTH / 2, TDG.GAME_HEIGHT - 20);
            bullet.scale.setTo(2, 2);
            bullet.anchor.setTo(0.5, 0.5);

            this.game.physics.arcade.moveToPointer(bullet, 2000); //speed

            this.game.add.tween(bullet.scale).to({
               x: .1,
               y: .1
            }, 2000, Phaser.Easing.Linear.None, true, 0, 0, false);
         }
      }
   };

   TDG.Bullets = Bullets;
})();