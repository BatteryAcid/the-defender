(function() {
   var Level = function() {
      //var LEVEL_COUNT = 5;
      this.currentLevel = 1;
      //this.levels = [];
      this.levelHeight = 50;
   };

   Level.prototype = {
      getCurrentLevel: function() {
         return this.currentLevel;
      },
      levelEnded: function(goodGuyCurrentHeight) {
         if (goodGuyCurrentHeight > this.levelHeight) {
            return false;
         } else {
            return true;
         }
      }
   };

   TDG.Level = Level;
})();
