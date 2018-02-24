(function() {
   var Level = function() {
      //var LEVEL_COUNT = 5;
      this.MAX_LEVEL_KEY = 'max-level';
      var maxLevel = localStorage.getItem(this.MAX_LEVEL_KEY);
      if (maxLevel == undefined || maxLevel === '') {
         maxLevel = 1;
      }
      this.currentLevel = parseInt(maxLevel);
      this.levelHeight = 50;
   };

   Level.prototype = {
      getCurrentLevel: function() {
         return this.currentLevel;
      },
      setMaxLevel: function() {
         localStorage.setItem(this.MAX_LEVEL_KEY, this.currentLevel + 1 + "");
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