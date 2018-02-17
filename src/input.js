(function() {
   var Input = function(game, camera, gun) {
      this.game = game;
      this.zoomedIn = false;
      this.camera = camera;
      this.gun = gun;
   };
   Input.prototype = {
      onTap: function(pointer, doubleTap) {
         if (doubleTap === true) {
            this.zoomedIn = !this.zoomedIn;
            if (this.zoomedIn === true) {
               this.camera.zoomTo(4, pointer);
            } else {
               this.camera.zoomTo(1, pointer);
            }
         } else {
            if (this.zoomedIn === true && this.game.input.activePointer.isDown) {
               //debug: if (this.game.input.activePointer.isDown) {
               this.gun.fire();
            }
         }
      }
   };

   TDG.Input = Input;
})();