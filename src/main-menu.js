//TODO: add params here: to indicate success/failure of play
// http://www.html5gamedevs.com/topic/4702-states-with-parameters/
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

         var topMargin = TDG.GAME_HEIGHT * .20;
         this.game.add.button(this.game.world.centerX - 95, topMargin, 'button', this.beginPlay, this, 2, 1, 0);
         this.game.add.button(this.game.world.centerX - 95, topMargin + 120, 'button', this.showLevelMenu, this, 2, 1, 0);
      },
      beginPlay: function() {
         this.game.state.start('main', true, false, this.gameWidth, this.gameHeight);
      },
      showLevelMenu: function() {
         this.game.state.start('level-menu', true, false, this.gameWidth, this.gameHeight);
      }
   };

   TDG.MainMenu = MainMenu;

})();