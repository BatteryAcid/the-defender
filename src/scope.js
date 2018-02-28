(function() {
   var Scope = function(game) {
      this.game = game;
      Phaser.Sprite.call(this, game, game.world.centerX, game.world.centerY, 'scope');

      game.physics.enable(this, Phaser.Physics.ARCADE);
      this.anchor.setTo(.5);
      // this.scale.setTo(1, 1);
      this.visible = false;
      game.add.existing(this);

      this.centerOnLocation = function(pointer) {
         this.x = pointer.x;
         this.y = pointer.y;
      }
   };
   // Scope.prototype = {};
   Scope.prototype = Object.create(Phaser.Sprite.prototype);
   Scope.prototype.update = function() {

      if (TDG.ZOOMED_IN === true) {
         this.visible = true;
      } else {
         this.visible = false;
      }

      if (TDG.ZOOMED_IN === true && this.game.input.activePointer.isDown) {
         //  400 is the speed it will move towards the mouse
         // this.game.physics.arcade.moveToPointer(this.scope, 400);
         this.game.physics.arcade.moveToXY(this, this.game.input.activePointer.worldX / TDG.SCALE_FOR_ZOOM,
            this.game.input
            .activePointer.worldY / TDG.SCALE_FOR_ZOOM, 500);

         // stop the scope from moving based on tolerance
         if ((Math.abs(this.world.x - this.game.input.activePointer.worldX) <= 80) && (Math.abs(this.world.y -
               this.game.input.activePointer.worldY) <= 80)) {
            this.body.velocity.setTo(0, 0);
         }
      } else {
         this.body.velocity.setTo(0, 0);
      }

      TDG.SCOPE = {
         x: this.world.x,
         y: this.world.y
      };
   };

   TDG.Scope = Scope;
})();