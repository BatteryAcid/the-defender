(function() {
   var Input = function(camera) {
      this.zoomed = false;
      this.camera = camera;
   };
   Input.prototype = {
      onTap: function(pointer, doubleTap) {
         this.zoomed = !this.zoomed;
         if (this.zoomed !== true) {
            this.camera.zoomTo(4, pointer);
         } else {
            this.camera.zoomTo(1, pointer);
         }
      }
   };

   TDG.Input = Input;
})();