(function() {
   var Main = function() {};
   Main.prototype = {
      preload: function() {
         this.debugText = "";
         this.zoom = new TDG.Zoom(this.game);
         this.bullets = new TDG.Bullets(this.game);
         this.input = new TDG.Input(this.game, this.zoom, this.bullets);
         this.badGuys = new TDG.BadGuys(this.game);
      },
      create: function() {
         var background = this.game.add.image(0, TDG.GAME_HEIGHT, 'background');
         background.width = TDG.GAME_WIDTH;
         background.height = TDG.GAME_HEIGHT;
         background.anchor.y = 1;

         //had to create this group so that the bullets appear on top of background
         this.gameGroup = this.game.add.group();
         this.goodGuy = new TDG.GoodGuy(this.game, this.zoom);
         this.level = new TDG.Level();

         this.gameGroup.add(this.bullets.getBulletGroup());
         this.gameGroup.add(this.badGuys.getBadGuyGroup());

         this.game.input.onTap.add(this.input.onTap.bind(this.input));
      },
      hitSprite: function(sprite1, sprite2) {
         console.log("collision");
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

         this.game.physics.arcade.overlap(
            this.badGuys.getBadGuyGroup(), this.bullets.getBulletGroup(), this.hitSprite, null, this
         );

         //scales bullet's hitbox based on zoom 
         this.bullets.getBulletGroup().forEach(function(bullet) {
            if (TDG.ZOOMED_IN === false) {
               bullet.body.setSize(10, 10, 5, 5);
            } else {
               bullet.body.setSize(50, 50, -20, -20);
            }
         }, this.game.physics);
      },
      render: function() {
         //debug --------------------------------------------------------------
         // this.game.debug.cameraInfo(this.game.camera, 32, 32);
         // this.game.debug.text(this.game.input.activePointer.x, 32, 200);
         // this.game.debug.text(this.game.input.activePointer.worldX, 32, 220);
         // this.badGuys.getBadGuyGroup().forEach(function(singleEnemy) {
         //    this.game.debug.body(singleEnemy);
         // }, this.game.physics);

         // this.bullets.getBulletGroup().forEach(function(bullet) {
         //    this.game.debug.body(bullet);
         // }, this.game.physics);
      }
   };

   TDG.Main = Main;
})();