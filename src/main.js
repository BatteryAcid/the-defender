(function() {
   var Main = function(game) {
      console.log("constructor");
      this.game = game;
      // this.debugText = "";
   };
   Main.prototype = {
      preload: function(game) {
         this.debugText = "";
         this.camera = new TDG.Camera(this.game);
         this.gun = new TDG.Gun(this.game, this.camera);
         this.gun.create();
         this.input = new TDG.Input(this.game, this.camera, this.gun);
         this.sprite, this.sprite2, this.sprite3;
      },
      create: function() {
         this.camera.x = 0;
         this.camera.y = 0;

         var background = this.camera.create(0, TDG.GAME_HEIGHT, 'background');
         background.width = TDG.GAME_WIDTH;
         background.height = TDG.GAME_HEIGHT;
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

         this.victim = new TDG.Victim(this.game, this.camera);

         this.level = new TDG.Level();

         this.game.input.onTap.add(this.input.onTap.bind(this.input));

         // this.debugText = this.game.add.text(20, 20, this.sprite.y, {
         //    fontSize: '50px'
         // });

      },
      update: function() {
         if (!this.level.levelEnded(this.victim.currentHeight())) {
            this.victim.move();
         } else {
            this.game.state.start('level-complete-menu');
         }

         // this.debugText.setText(this.sprite.y);
      }
   };

   TDG.Main = Main;
})();