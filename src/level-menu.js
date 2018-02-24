(function() {
   var LevelMenu = function(game) {
      this.game = game;
      // colors is actually the array of level pages
      var colors = ["0xac81bd", "0xff5050", "0xdab5ff", "0xb5ffda", "0xfffdd0", "0xcc0000", "0x54748b",
         "0x4b0082", "0x80ab2f", "0xff784e", "0xe500db", "0x223c4a", "0x223c4a", "0xf1290e", "0x648080",
         "0xbbc1c4", "0x6f98a2", "0x71717e"
      ];
      var WORKING_WIDTH = TDG.GAME_WIDTH * .9;
      var WORKING_HEIGHT = TDG.GAME_HEIGHT * .9;

      this.getWorkingWidth = function() {
         return WORKING_WIDTH;
      }
      this.getWorkingHeight = function() {
         return WORKING_HEIGHT;
      }
      this.getLevelColors = function() {
         return colors;
      }
   };

   LevelMenu.prototype = {
      preload: function() {
         this.game.load.image("levelthumb", "images/levelthumb.png");
         this.game.load.image("transp", "images/transp.png");
      },
      create: function() {
         // columns of thumbnails in each page
         var columns = 5;
         // rows of thumbnails in each page
         var rows = 3;
         // thumbnail width, in pixels
         var actualThumbWidth = 64;
         // space needed for title
         var titleSpace = TDG.GAME_HEIGHT * .1;

         var scaleRatio = (this.getWorkingWidth() / (actualThumbWidth * columns)) * .60;
         var thumbWidth = (scaleRatio) * actualThumbWidth;
         var thumbHeight = (scaleRatio) * actualThumbWidth;
         var spacingX = (this.getWorkingWidth() - (columns * thumbWidth)) / (columns - 1) * .6;
         var spacingY = ((this.getWorkingHeight() - titleSpace) - (rows * thumbHeight)) / (rows - 1) * .6;

         this.game.stage.backgroundColor = "#000044";
         this.pageText = this.game.add.text(this.getWorkingWidth() / 2, 20 * scaleRatio,
            "Select Level ( page 1 / " +
            this.getLevelColors().length + ")", {
               font: (scaleRatio * 16) + "px Arial",
               fill: "#ffffff"
            })
         this.pageText.anchor.set(0.5);

         this.scrollingMap = this.game.add.tileSprite(0, 0, this.getLevelColors().length * this.getWorkingWidth(),
            this.getWorkingHeight(),
            "transp");
         this.scrollingMap.inputEnabled = true;
         this.scrollingMap.input.enableDrag(false);
         this.scrollingMap.input.allowVerticalDrag = false;
         this.scrollingMap.input.boundsRect = new Phaser.Rectangle(this.getWorkingWidth() - this.scrollingMap.width,
            this.getWorkingHeight() -
            this.scrollingMap.height, this.scrollingMap.width * 2 - this.getWorkingWidth(), this.scrollingMap
            .height *
            2 - this.getWorkingHeight());
         this.currentPage = 0;

         var rowLength = (thumbWidth * columns) + (spacingX * (columns - 1));
         var leftMargin = (this.getWorkingWidth() - rowLength) / 2;
         var colHeight = (thumbHeight * rows) + (spacingY * (rows - 1));
         var topMargin = ((this.getWorkingHeight() - colHeight) / 2) + titleSpace;

         for (var k = 0; k < this.getLevelColors().length; k++) {
            for (var i = 0; i < columns; i++) {
               for (var j = 0; j < rows; j++) {

                  var thumb = this.game.add.image(k * this.getWorkingWidth() + leftMargin + i * (thumbWidth +
                        spacingX),
                     topMargin + j * (thumbHeight + spacingY), "levelthumb");

                  thumb.levelNumber = k * (rows * columns) + j * columns + i;
                  var levelText = this.game.add.text(0, 0, thumb.levelNumber, {
                     font: "36px Arial",
                     fill: "#000000"
                  })
                  thumb.addChild(levelText);

                  thumb.tint = this.getLevelColors()[k];
                  thumb.scale.setTo(1 * scaleRatio, 1 * scaleRatio);
                  this.scrollingMap.addChild(thumb);
               }
            }
         }

         this.scrollingMap.events.onDragStart.add(function() {
            this.scrollingMap.startPosition = this.scrollingMap.x;
            this.scrollingMap.currentPosition = this.scrollingMap.x;
         }, this);

         this.scrollingMap.events.onDragStop.add(function(event, pointer) {
            if (this.scrollingMap.startPosition == this.scrollingMap.x) {
               for (i = 0; i < this.scrollingMap.children.length; i++) {
                  var bounds = this.scrollingMap.children[i].getBounds();
                  if (bounds.contains(pointer.x, pointer.y)) {
                     alert("Play level " + this.scrollingMap.children[i].levelNumber);
                     break;
                  }
               }
            } else {
               if (this.scrollingMap.startPosition - this.scrollingMap.x > this.getWorkingWidth() / 8) {
                  this.changePage(1);
               } else {
                  if (this.scrollingMap.startPosition - this.scrollingMap.x < -this.getWorkingWidth() /
                     8) {
                     this.changePage(-1);
                  } else {
                     this.changePage(0);
                  }
               }
            }
         }, this);
      },
      changePage: function(page) {
         this.currentPage += page;
         this.pageText.text = "Select Level ( page " + (this.currentPage + 1).toString() + " / " +
            this.getLevelColors().length + ")";
         var tween = this.game.add.tween(this.scrollingMap).to({
            x: this.currentPage * -this.getWorkingWidth()
         }, 300, Phaser.Easing.Cubic.Out, true);
      },
      render: function() {

      }
   };

   TDG.LevelMenu = LevelMenu;
})();