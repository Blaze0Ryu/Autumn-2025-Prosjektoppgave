
//testing..
//const { Component } = require("react");

var mygGamePiece;

function startGame() {
    mygGamePiece= new component(30,30, "Yellow", 10, 120);
    myGameArea.start();
}


var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function () {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.canvas.style.cursor = "none"; //hiding the original cursor
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('mousemove', function (e) {
            myGameArea.x = e.pageX;
            myGameArea.y = e.pageY;
        })
    },
    clear : function(){
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    }
}

    function getMousePos(canvas, evt) {
        
    }


    function component(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;
        this.x = x;
        this.y = y;
        this.update = function() {
            ctx = myGameArea.context;
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    function updateGameArea() {
        myGameArea.clear();
        if (myGameArea.x && myGameArea.y) {
            mygGamePiece.x = myGameArea.x;
            mygGamePiece.y = myGameArea.y;
        }
        mygGamePiece.update();
    }

