(function() {
   var Victim = function(game, camera, gameWidth, gameHeight) {
      this.camera = camera;
      this.gameHeight = gameHeight;
      this.gameWidth = gameWidth;
      this.stop = false;

      //init
      this.victimInstance = this.camera.create(gameWidth / 2, gameHeight - 50, 'victim');
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
