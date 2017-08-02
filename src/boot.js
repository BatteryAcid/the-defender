(function() {
   var Boot = function(game) {
      this.zoomed = false;
      this.debugText = "";

      if (window.innerWidth * window.devicePixelRatio > window.innerHeight * window.devicePixelRatio) {
         this.gameWidth = window.innerWidth * window.devicePixelRatio;
         this.gameHeight = window.innerHeight * window.devicePixelRatio;
      } else {
         this.gameWidth = window.innerHeight * window.devicePixelRatio;
         this.gameHeight = window.innerWidth * window.devicePixelRatio;
      }
      console.log("w: " + this.gameWidth + ", h: " + this.gameHeight);

      this.main = undefined;
   };
   Boot.prototype = {
      init: function() {
         this.input.maxPointers = 1;

         this.scale.pageAlignHorizontally = true;
         this.scale.pageAlignVertically = true;

         if (!this.game.device.desktop) {
            this.scale.forceOrientation(true, false);
            this.scale.setResizeCallback(this.gameResized, this);
            this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
            this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
         }
      },
      preload: function() {
         this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; 
         this.game.load.image('guy', 'images/guy.png');
         this.game.load.image('background', 'images/background.png');
         this.main = new TDG.Main(this.game);
      },
      create: function() {
         this.main.create(this.gameWidth, this.gameHeight);
      },
      update: function() {
         this.main.update();
      },
      gameResized: function(width, height) {
         //  This could be handy if you need to do any extra processing if the game resizes.
         //  A resize could happen if for example swapping orientation on a device or resizing the browser window.
         //  Note that this callback is only really useful if you use a ScaleMode of RESIZE and place it inside your main game state.
      },
      enterIncorrectOrientation: function() {
         TDG.orientated = false;
         document.getElementById('orientation').style.display = 'block';
      },
      leaveIncorrectOrientation: function() {
         TDG.orientated = true;
         document.getElementById('orientation').style.display = 'none';
      },
      render: function() {
         // game.debug.text("Click to toggle! Sorting enabled: " + sorted, 2, 36, "#ffffff");
         this.game.debug.text((this.game.time.fps || '--') + this.gameWidth + ", " + this.gameHeight, 2, 14,
            "#a7aebe");

         //debug points
         // var point = new Phaser.Rectangle( game.world.centerX, game.world.centerY, 25, 25 ) ;
         // game.debug.geom( point, 'rgba(255,0,0,1)' ) ;

         // var point = new Phaser.Rectangle( 200.5, 400.5, 25, 25 ) ;
         // game.debug.geom( point, 'rgb(56, 230, 154)' ) ;

         // var point = new Phaser.Rectangle( 0, 0, 25, 25 ) ;
         // this.game.debug.geom( point, 'rgb(71, 111, 241)' ) ;

         // var point = new Phaser.Rectangle( 0, this.gameHeight-25, 25, 25 ) ;
         // this.game.debug.geom( point, 'rgb(71, 111, 241)' ) ;
      }
   };

   TDG.Boot = Boot;
})();