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
         this.bullets = new TDG.Bullets(this.game);
         this.input = new TDG.Input(this.game, this.camera, this.bullets);
         this.badGuys = new TDG.BadGuys(this.game);
      },
      create: function() {
         this.camera.x = 0;
         this.camera.y = 0;

         var background = this.camera.create(0, TDG.GAME_HEIGHT, 'background');
         background.width = TDG.GAME_WIDTH;
         background.height = TDG.GAME_HEIGHT;
         background.anchor.y = 1;

         this.goodGuy = new TDG.GoodGuy(this.game, this.camera);

         this.level = new TDG.Level();

         this.game.input.onTap.add(this.input.onTap.bind(this.input));

         this.camera.add(this.badGuys.getBadGuyGroup());

         // this.debugText = this.game.add.text(20, 20, this.sprite.y, {
         //    fontSize: '50px'
         // });
      },
      hitSprite: function(sprite1, sprite2) {
         //debug: console.log("collision");
         // remove bullet and bad guy
         sprite1.kill();
         sprite2.kill();
      },
      update: function() {
         if (!this.level.levelEnded(this.goodGuy.currentHeight())) {
            this.goodGuy.move();
            this.badGuys.pursueGoodGuy(this.goodGuy);
         } else {
            this.game.state.start('level-complete-menu');
         }

         this.game.physics.arcade.collide(this.badGuys.getBadGuyGroup(), this.bullets.getBulletGroup(), this.hitSprite,
            null, this);
      },
      render: function() {
         //debug:
         // this.badGuys.getBadGuyGroup().forEach(function(singleEnemy) {
         //    this.game.debug.body(singleEnemy);
         //    }, this.game.physics);
      }
   };

   TDG.Main = Main;
})();