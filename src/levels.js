(function() {
   var Levels = function(game) {

      var levelConfigs = {
         0: {
            badGuyLocationX: function(count) {
               return TDG.GAME_WIDTH * .05;
            },
            badGuyLocationY: function(count) {
               return TDG.GAME_HEIGHT * .6;
            },
            badGuys: {
               count: 1,
               scale: 1,
               image: 'badguy-walk',
               animation: 'badGuyWalk',
               speed: 25
            },
            goodGuy: {
               scale: 1,
               locationX: function() {
                  return TDG.GAME_WIDTH * .1;
               },
               locationY: function() {
                  return TDG.GAME_HEIGHT * .75;
               },
               move: function(goodGuyInstance) {
                  goodGuyInstance.x += .3;
               },
               successX: TDG.GAME_WIDTH - (TDG.GAME_WIDTH * .1),
               successY: TDG.GAME_HEIGHT * .1
            },
            background: "bg1.png",
            menuColor: "0x00CC99"
         },
         1: {
            badGuyLocationX: function(count) {
               return TDG.GAME_WIDTH * .1 + (count * game.rnd.integerInRange(100, 200));
            },
            badGuyLocationY: function(count) {
               return TDG.GAME_HEIGHT * .6;
            },
            badGuys: {
               count: 2,
               scale: 1,
               image: 'badguy-walk',
               animation: 'badGuyWalk',
               speed: 40
            },
            goodGuy: {
               scale: 1,
               locationX: function() {
                  return TDG.GAME_WIDTH * .3;
               },
               locationY: function() {
                  return TDG.GAME_HEIGHT * .75;
               },
               move: function(goodGuyInstance) {
                  goodGuyInstance.x += .3;
               },
               successX: TDG.GAME_WIDTH - (TDG.GAME_WIDTH * .01),
               successY: TDG.GAME_HEIGHT * .1
            },
            background: "bg1.png",
            menuColor: "0xff5050"
         },
         2: {
            badGuyLocationX: function(count) {
               return TDG.GAME_WIDTH * .3 + (count * game.rnd.integerInRange(100, 200));
            },
            badGuyLocationY: function(count) {
               return TDG.GAME_HEIGHT * .6;
            },
            badGuys: {
               count: 3,
               scale: 1,
               image: 'badguy-walk',
               animation: 'badGuyWalk',
               speed: 40
            },
            goodGuy: {
               scale: 1,
               locationX: function() {
                  return TDG.GAME_WIDTH * .5;
               },
               locationY: function() {
                  return TDG.GAME_HEIGHT * .75;
               },
               move: function(goodGuyInstance) {
                  goodGuyInstance.x += .3
               },
               successX: TDG.GAME_WIDTH - (TDG.GAME_WIDTH * .01),
               successY: TDG.GAME_HEIGHT * .1
            },
            background: "bg1.png",
            menuColor: "0xff5050"
         },
         3: {
            badGuyLocationX: function(count) {
               return TDG.GAME_WIDTH * .4 + (count * game.rnd.integerInRange(100, 200));
            },
            badGuyLocationY: function(count) {
               return TDG.GAME_HEIGHT * .6;
            },
            badGuys: {
               count: 4,
               scale: 1,
               image: 'badguy-walk',
               animation: 'badGuyWalk',
               speed: 50
            },
            goodGuy: {
               scale: 1,
               locationX: function() {
                  return TDG.GAME_WIDTH * .7;
               },
               locationY: function() {
                  return TDG.GAME_HEIGHT * .75;
               },
               move: function(goodGuyInstance) {
                  goodGuyInstance.x += .3
               },
               successX: TDG.GAME_WIDTH - (TDG.GAME_WIDTH * .01),
               successY: TDG.GAME_HEIGHT * .1
            },
            background: "bg1.png",
            menuColor: "0xff5050"
         },
         4: {
            badGuyLocationX: function(count) {
               return TDG.GAME_WIDTH * .4 + (count * game.rnd.integerInRange(100, 200));
            },
            badGuyLocationY: function(count) {
               return TDG.GAME_HEIGHT * .5;
            },
            badGuys: {
               count: 5,
               scale: 1,
               image: 'badguy-walk',
               animation: 'badGuyWalk',
               speed: 50
            },
            goodGuy: {
               scale: 1,
               locationX: function() {
                  return TDG.GAME_WIDTH * .8;
               },
               locationY: function() {
                  return TDG.GAME_HEIGHT * .7;
               },
               move: function(goodGuyInstance) {
                  goodGuyInstance.x += .3;
               },
               successX: TDG.GAME_WIDTH - (TDG.GAME_WIDTH * .01),
               successY: TDG.GAME_HEIGHT * .1
            },
            background: "bg1.png",
            menuColor: "0xff5050"
         }

      };

      this.getLevels = function() {
         return levelConfigs;
      }

      this.getLevelConfigs = function(levelNumber) {
         return levelConfigs[levelNumber];
      }
   };

   Levels.prototype = {};

   TDG.Levels = Levels;
})();