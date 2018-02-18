(function() {
   var Input = function(game, camera, bullets) {
      this.game = game;
      this.zoomedIn = false;
      this.camera = camera;
      this.bullets = bullets;
   };
   Input.prototype = {
      onTap: function(pointer, doubleTap) {
         if (doubleTap === true) {
            this.zoomedIn = !this.zoomedIn;
            if (this.zoomedIn === true) {
               this.camera.zoomTo(4, pointer);
               TDG.ZOOMED_IN = true;
            } else {
               this.camera.zoomTo(1, pointer);
               TDG.ZOOMED_IN = false;
            }
         } else {
            if (this.zoomedIn === true && this.game.input.activePointer.isDown) {
                // if (this.game.input.activePointer.isDown) {
               this.bullets.fire(pointer);
            }
         }
      }
   };

   TDG.Input = Input;
})();