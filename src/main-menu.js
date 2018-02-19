(function() {
   var MainMenu = function(game) {
      this.game = game;
   };
   MainMenu.prototype = {
      init: function(gameWidth, gameHeight) {
         this.gameHeight = gameHeight;
         this.gameWidth = gameWidth;

         this.titleText = this.game.make.text(this.game.world.centerX, 100, "Game Title", {
            //font: 'bold 60pt TheMinion',
            fill: '#FDFFB5',
            align: 'center'
         });
         this.titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
         this.titleText.anchor.set(0.5);
         this.optionCount = 1;
      },

      create: function() {
         this.game.stage.disableVisibilityChange = true;
         this.game.add.sprite(0, 0, 'menu-bg');
         this.game.add.existing(this.titleText);

         this.game.add.button(this.game.world.centerX - 95, 400, 'button', this.actionOnClick, this, 2, 1, 0);

         // this.addMenuOption('Start', function() {
         //    // this.game.state.start("main");
         //    this.game.state.start('main', true, false, this.gameWidth, this.gameHeight);
         // });
         // this.addMenuOption('Options', function() {
         //    this.game.state.start("Options");
         // });
         // this.addMenuOption('Credits', function() {
         //    this.game.state.start("Credits");
         // });
      },
      actionOnClick: function() {
         this.game.state.start('main', true, false, this.gameWidth, this.gameHeight);
      }
   };

   TDG.MainMenu = MainMenu;

})();