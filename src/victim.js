(function() {
   var Victim = function(game, camera) {
      this.camera = camera;
      this.stop = false;

      //init
      this.victimInstance = this.camera.create(TDG.GAME_WIDTH / 2, TDG.GAME_HEIGHT - 50, 'victim');
      this.victimInstance.anchor.setTo(0.5, 0.5);
      this.victimInstance.scale.setTo(1);
   };

   Victim.prototype = {
      move: function() {
         this.victimInstance.y -= .5;
      },
      currentHeight: function() {
         return this.victimInstance.y;
      }
   };

   TDG.Victim = Victim;
})();
