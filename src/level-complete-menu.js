(function() {
   var LevelCompleteMenu = function(game) {
      this.game = game;
   };
   LevelCompleteMenu.prototype = {
      init: function(gameWidth, gameHeight) {
         this.gameHeight = gameHeight;
         this.gameWidth = gameWidth;

         this.titleText = this.game.make.text(this.game.world.centerX, 100, "Level Complete!", {
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
      },
      actionOnClick: function() {
         this.game.state.start('main', true, false, this.gameWidth, this.gameHeight);
      }
   };

   TDG.LevelCompleteMenu = LevelCompleteMenu;

})();