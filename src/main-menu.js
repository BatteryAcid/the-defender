(function() {
   var MainMenu = function(game) {
      this.game = game;
   };
   MainMenu.prototype = {
      init: function(state) {
         this.gameWidth = TDG.GAME_WIDTH;
         this.gameHeight = TDG.GAME_HEIGHT;

         var textHeightY = TDG.GAME_HEIGHT * .08;
         var textScale = textHeightY / 80;
         var textSize = textScale * 100;

         this.levelManager = new TDG.LevelManager();

         this.titleText = this.game.make.text(this.game.world.centerX, TDG.GAME_HEIGHT * .1 + 20,
            "The Defender", {
               font: textSize + "px Arial",
               fill: '#e65100',
               align: 'center'
            });

         this.titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
         this.titleText.anchor.set(0.5);

         function determineStateText() {
            var stateTextContent = "Choose an option";
            if (state === TDG.LEVEL_START_STATE) {
               //leave as default for now
            } else if (state === TDG.LEVEL_COMPLETE_STATE) {
               stateTextContent = "Success!";
            } else if (state === TDG.LEVEL_FAILED_STATE) {
               stateTextContent = "Failed!";
            }
            return stateTextContent;
         }

         this.stateText = this.game.make.text(this.game.world.centerX, TDG.GAME_HEIGHT * .1 + textHeightY + 30,
            determineStateText(), {
               font: .6 * textSize + "px Arial",
               fill: '#FFFFFF',
               align: 'center'
            });

         this.stateText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
         this.stateText.anchor.set(0.5);

         this.getState = function() {
            return state;
         }
      },
      create: function() {
         this.game.stage.disableVisibilityChange = true;
         var background = this.game.add.image(0, TDG.GAME_HEIGHT, 'menu-bg');
         background.width = TDG.GAME_WIDTH;
         background.height = TDG.GAME_HEIGHT;
         background.anchor.y = 1;

         this.game.add.existing(this.titleText);
         this.game.add.existing(this.stateText);

         var buttonHeightY = TDG.GAME_HEIGHT * .08;
         var buttonScale = buttonHeightY / 71;

         var playButton = this.game.add.button(this.game.world.centerX, TDG.GAME_HEIGHT * .5, 'start-button',
            this.beginPlay,
            this, 2, 1,
            0);
         var levelButton = this.game.add.button(this.game.world.centerX, TDG.GAME_HEIGHT * .5 + buttonHeightY +
            10, 'levels-button', this.showLevelMenu,
            this, 2, 1, 0);

         playButton.scale.setTo(buttonScale, buttonScale);
         playButton.anchor.setTo(0.5, 0.5);

         levelButton.scale.setTo(buttonScale, buttonScale);
         levelButton.anchor.setTo(0.5, 0.5);

         if (this.getState() !== undefined && this.getState() !== 0) {
            var playAgain = this.game.add.button(this.game.world.centerX, TDG.GAME_HEIGHT * .7, 'playagain-button',
               this.playAgain,
               this, 2, 1,
               0);
            playAgain.scale.setTo(buttonScale, buttonScale);
            playAgain.anchor.setTo(0.5, 0.5);
         }
      },
      beginPlay: function() {
         this.game.state.start('main', true, false);
      },
      showLevelMenu: function() {
         this.game.state.start('level-menu', true, false);
      },
      playAgain: function() {
         var currentLevel = this.levelManager.getSelectedLevel();
         if (this.getState() === TDG.LEVEL_COMPLETE_STATE) {
            if (parseInt(this.levelManager.getSelectedLevel()) !== this.levelManager.getLevelCount() - 1) {
               // don't change if max level
               currentLevel -= 1;
            }
         }
         this.levelManager.setSelectedLevel(currentLevel);
         this.game.state.start('main', true, false);
      }
   };

   TDG.MainMenu = MainMenu;

})();