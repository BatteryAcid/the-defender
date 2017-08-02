(function() {
	var Main = function(game) {
   	this.debugText = "";
   	this.game = game;
   	this.camera = new TDG.Camera(this.game);
   	this.input = new TDG.Input(this.camera);
   	this.sprite, this.sprite2, this.sprite3;

   	//testing only
   	//this.gameHeight = window.innerHeight * window.devicePixelRatio;
   };
   Main.prototype = {
      create: function(gameWidth, gameHeight) {
         this.camera.x = 0;
         this.camera.y = 0;

         var background = this.camera.create(0, gameHeight, 'background');
         background.width = gameWidth;
         background.height = gameHeight;
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

      	// this.debugText.setText(this.sprite.y);
      }
   };

   TDG.Main = Main;
})();