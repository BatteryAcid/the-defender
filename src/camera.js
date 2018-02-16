(function() {
   var Camera = function(game) {
      Phaser.Group.call(this, game); //required
      this.scale.setTo(1, 1);
      this.previous = 1;
      this.clickX, this.clickY, this.startPosX, this.startPosY;
   };
   Camera.prototype = Object.create(Phaser.Group.prototype);
   Camera.prototype.zoomTo = function(scale, pointer) {
      if (this.previous != scale) {
         if (this.previous < scale) {
            this.clickX = pointer.x;
            this.clickY = pointer.y;

            // console.log(this.centerX + ', ' + this.centerY);
            // console.log(this.position.x + ', ' + this.position.y);
            this.startPosX = this.position.x;
            this.startPosY = this.position.y;

            var tweenScale = this.game.add.tween(this.scale).to({
               x: scale,
               y: scale
            }, 10, Phaser.Easing.Linear.None, true, 0, 0, false);

            tweenScale.onComplete.add(function() {
               // console.log(this.centerX + ', ' + this.centerY);
               // console.log(this.position.x + ', ' + this.position.y);

               var u = ((1 - this.scale.x) * this.clickX) + this.startPosX;
               var v = ((1 - this.scale.y) * this.clickY) + this.startPosY;

               this.game.add.tween(this.position).to({
                     x: this.position.x + u,
                     y: this.position.y + v
                  },
                  10, Phaser.Easing.Linear.None, true, 0, 0, false);
            }, this);

         } else {
            //zoom back out
            var u = ((1 - this.scale.x) * this.clickX) + this.startPosX;
            var v = ((1 - this.scale.y) * this.clickY) + this.startPosY;

            var scaleDown = this.game.add.tween(this.scale).to({
               x: 1,
               y: 1
            }, 10, Phaser.Easing.Linear.None, true, 0, 0, false);
            scaleDown.onComplete.add(function() {
               this.game.add.tween(this.position).to({
                     x: this.position.x - u,
                     y: this.position.y - v
                  },
                  10, Phaser.Easing.Linear.None, true, 0, 0, false);
            }, this);
         }
         this.previous = scale;
      }
   };

   TDG.Camera = Camera;
})();
