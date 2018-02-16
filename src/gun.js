(function() {
   var Gun = function(game, camera) {
      this.game = game;
      this.camera = camera;
      this.bullets;
      this.fireRate = 100; // probably safe to not let them spam too many per second
      this.nextFire = 0;
   };

   Gun.prototype = {
      create: function() {
         this.game.physics.startSystem(Phaser.Physics.ARCADE);

         this.bullets = this.game.add.group();
         this.bullets.enableBody = true;
         this.bullets.physicsBodyType = Phaser.Physics.ARCADE;

         this.bullets.createMultiple(50, 'bullet');
         this.bullets.setAll('checkWorldBounds', true);
         this.bullets.setAll('outOfBoundsKill', true);
      },
      fire: function() {
         if (this.game.time.now > this.nextFire && this.bullets.countDead() > 0) {
            this.nextFire = this.game.time.now + this.fireRate;

            var bullet = this.bullets.getFirstDead();

            //reset bullet and scale
            bullet.reset(TDG.GAME_WIDTH / 2, TDG.GAME_HEIGHT - 20);
            bullet.scale.setTo(2, 2);

            this.game.physics.arcade.moveToPointer(bullet, 1000); // speed

            this.game.add.tween(bullet.scale).to({
               x: .1,
               y: .1
            }, 2000, Phaser.Easing.Linear.None, true, 0, Number.MAX_VALUE, false);
         }
      }
   };

   TDG.Gun = Gun;
})();