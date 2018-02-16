(function() {
   var Main = function(game) {
      console.log("constructor");
      this.game = game;
      // this.debugText = "";
      //testing only
      //this.gameHeight = window.innerHeight * window.devicePixelRatio;
   };
   Main.prototype = {
      init: function(gameWidth, gameHeight) {
         console.log("init"); // can't pass game here
         this.gameHeight = gameHeight;
         this.gameWidth = gameWidth;
      },
      preload: function(game) {
         this.debugText = "";
         this.camera = new TDG.Camera(this.game);
         this.input = new TDG.Input(this.camera);
         this.sprite, this.sprite2, this.sprite3;
      },
      create: function(){
         this.camera.x = 0;
         this.camera.y = 0;

         var background = this.camera.create(0, this.gameHeight, 'background');
         background.width = this.gameWidth;
         background.height = this.gameHeight;
         background.anchor.y = 1;

         this.sprite = this.camera.create(700, 800, 'guy');
         this.sprite2 = this.camera.create(1000, 700, 'guy');
         this.sprite3 = this.camera.create(1200, 800, 'guy');

         this.sprite.anchor.setTo(0.5, 0.5);
         this.sprite2.anchor.setTo(0.5, 0.5);
         this.sprite3.anchor.setTo(0.5, 0.5);
         this.sprite.scale.setTo(1);
         this.sprite2.scale.setTo(1);
         this.sprite3.scale.setTo(1);

         this.victim = new TDG.Victim(this.game, this.camera, this.gameWidth, this.gameHeight);

         this.level = new TDG.Level(this.gameHeight);

         this.game.input.onTap.add(this.input.onTap.bind(this.input));

         // this.debugText = this.game.add.text(20, 20, this.sprite.y, {
         //    fontSize: '50px'
         // });

      },
      update: function() {
         //testing only
         // if (this.sprite.world.y < (this.gameHeight)) {
         //    this.sprite.y += .5;
         // }

         if (!this.level.levelEnded(this.victim.currentHeight())) {
            this.victim.move();
         } else {
            this.game.state.start('level-complete-menu', true, false, this.gameWidth, this.gameHeight);
         }

         // this.debugText.setText(this.sprite.y);
      }
   };

   TDG.Main = Main;
})();
