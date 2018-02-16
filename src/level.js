(function() {
   var Level = function(gameHeight) {
      var LEVEL_COUNT = 5;
      this.currentLevel = 1;
      this.levels = [];
      this.levelHeight = (gameHeight / LEVEL_COUNT);
      //console.log("game height: " + gameHeight);
      //console.log("level height: " + this.levelHeight);

      var nextLevelHeight = gameHeight - this.levelHeight;

      for (var i = 0; i < LEVEL_COUNT; i++) {
         //console.log("next height: " + nextLevelHeight);
         this.levels.push(nextLevelHeight);
         nextLevelHeight -= this.levelHeight;
      }
   };

   Level.prototype = {
      getCurrentLevel: function() {
         return this.currentLevel;
      },
      levelEnded: function(victimCurrentHeight) {
         if (victimCurrentHeight > this.levels[this.currentLevel - 1]) {
            return false;
         } else {
            return true;
         }
      }
   };

   TDG.Level = Level;
})();
