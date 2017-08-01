(function() {
   var Boot = function(game) {
   	this.zoomed = false;
      this.debugText = "";
   	this.gameWidth = window.innerWidth * window.devicePixelRatio;
   	this.gameHeight = window.innerHeight * window.devicePixelRatio;
   	this.main = undefined;
   };
   Boot.prototype = {
      preload: function() {
         // game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
         this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; //TODO: what to set this as
         //game.scale.setMinMax(400, 300, window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio); //TODO: what to set this as
         this.game.load.image('guy', '/images/guy.png');
         this.game.load.image('floor', '/images/background.png');
         this.main = new TDG.Main(this.game);
      },
      create: function() {
      	this.main.create();
      },
      update: function() {
      	this.main.update();
      },
      render: function() {
         // game.debug.text("Click to toggle! Sorting enabled: " + sorted, 2, 36, "#ffffff");
         this.game.debug.text((this.game.time.fps || '--') + this.gameWidth + ", " + this.gameHeight, 2, 14, "#a7aebe");

         //debug points
         // var point = new Phaser.Rectangle( game.world.centerX, game.world.centerY, 25, 25 ) ;
         // game.debug.geom( point, 'rgba(255,0,0,1)' ) ;

         // var point = new Phaser.Rectangle( 200.5, 400.5, 25, 25 ) ;
         // game.debug.geom( point, 'rgb(56, 230, 154)' ) ;

         // var point = new Phaser.Rectangle( 300, 700, 25, 25 ) ;
         // game.debug.geom( point, 'rgb(71, 111, 241)' ) ;
      }
   };

   TDG.Boot = Boot;
})();