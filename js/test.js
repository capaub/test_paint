////////////////////////////// CLASSE DESSIN ///////////////////////////////////


class Test {
    constructor(){

        this.drawMode = {
            "rectangle": this.drawRectangle,
            "triangle": this.drawTriangle,
            "circle": this.drawCircle,
            "pen": this.drawLine,
            "text": this.drawText,
            "gum": this.gum
        };

        this.isMode = {
            "gum": false,
            "rectangle": false,
            "triangle": false,
            "circle": false,
            "pen": false,
            "text": false
        };

        this.sheet = document.querySelector("#sheet");
        this.ctx = this.sheet.getContext("2d");
        this.ctx.lineWidth = 2;
        
        this.color = document.getElementById("colorSet")            
        this.color.addEventListener("change", this.setColor(colorSet.value))

        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas = document.getElementById("areaDraw");

        this.currentPos = {x: 0 , y: 0};
        this.firstPos = {x:0 , y: 0};
        this.secondPos = {x: 0, y: 0};

        this.text ='';


        // this.sheet.addEventListener('mousedown', this.currentPosition.bind(this));
        //                         //////// TEST ///////
        this.sheet.addEventListener('mousedown', function(){
            console.log(this.isMode[gum]);

            switch (true) {
                case this.isMode.gum:
                    this.drawMode.gum();
                    break;
                case this.isMode.rectangle:
                    this.drawMode.rectangle();
                    break;
                case this.isMode.triangle:
                    this.drawMode.triangle();
                    break;
                case this.isMode.circle:
                    this.drawMode.circle();
                    break;
                case this.isMode.pen:
                    this.drawMode.pen();
                    break;
                case this.isMode.text:
                    this.drawMode.text();
                    break;
                default:
            }
        });

        this.sheet.addEventListener('mousemove', function(){

            switch (true) {
                case this.isMode.gum:
                    this.drawMode.gum();
                    break;
                case this.isMode.rectangle:
                    this.drawMode.rectangle();
                    break;
                case this.isMode.triangle:
                    this.drawMode.triangle();
                    break;
                case this.isMode.circle:
                    this.drawMode.circle();
                    break;
                case this.isMode.pen:
                    this.drawMode.pen();
                    break;
                case this.isMode.text:
                    this.drawMode.text();
                    break;
                default:
            }
        });

        this.sheet.addEventListener('mouseup', function(){

            switch (true) {
                case this.isMode.gum:
                    this.drawMode.gum();
                    break;
                case this.isMode.rectangle:
                    this.drawMode.rectangle();
                    break;
                case this.isMode.triangle:
                    this.drawMode.triangle();
                    break;
                case this.isMode.circle:
                    this.drawMode.circle();
                    break;
                case this.isMode.pen:
                    this.drawMode.pen();
                    break;
                case this.isMode.text:
                    this.drawMode.text();
                    break;
                default:
            }
        });

        this.sheet.addEventListener('mouseout', function(){

            switch (true) {
                case this.isMode.gum:
                    this.drawMode.gum();
                    break;
                case this.isMode.rectangle:
                    this.drawMode.rectangle();
                    break;
                case this.isMode.triangle:
                    this.drawMode.triangle();
                    break;
                case this.isMode.circle:
                    this.drawMode.circle();
                    break;
                case this.isMode.pen:
                    this.drawMode.pen();
                    break;
                case this.isMode.text:
                    this.drawMode.text();
                    break;
                default:
            }
        });
    };



    gum(){
        
    };

    downDrawing(e){
        if(this.isMode.pen){
        this.currentPosition(e);
        }
    };

    moveDrawing(e) {
        if(this.isMode.pen){
            this.drawLine(this.ctx, this.currentPos.x, this.currentPos.y, e.offsetX, e.offsetY);
            this.currentPosition(e);
        }
    };

    stopDrawing(e) {
            this.drawLine(this.ctx, this.currentPos.x, this.currentPos.y, e.offsetX, e.offsetY);
            this.isMode.pen = false;

    };
    
    //////// TEST ///////

    currentPosition(e) {
        this.currentPos.x = e.offsetX;
        this.currentPos.y = e.offsetY;
    };

    firstPosition(e) {
        this.firstPos.x = e.offsetX;
        this.firstPos.y = e.offsetY;
    };

    secondPosition(e) {
        this.secondPos.x = e.offsetX;
        this.secondPos.y = e.offsetY;
    }

////////////////////////////// LES FONCTIONS "tools" ////////////////////////////

    setColor(color){ 
        this.ctx.strokeStyle = color;
    };
    
    upSizing() {
        this.ctx.lineWidth ++;
    };
            
    downSizing() {this.ctx.lineWidth <= 1 ? this.ctx.lineWidth = 1 : this.ctx.lineWidth --;
    };
    
    erase() {
        this.ctx.clearRect(0, 0, innerWidth, innerHeight);
    };

///////////////////////////  LES FONCTIONS DE DESSINS ///////////////////////////
    
    drawRectangle( x1, y1, x2, y2) {
        this.ctx.beginPath();
        this.ctx.rect(x1, y1, x2 - x1, y2 - y1);
        this.ctx.stroke();
    };

    drawTriangle(x1, y1, x2, y2, x3, y3) {
        this.ctx.strokeStyle = this.setColor();
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.lineTo(x3, y3);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
    };

    drawCircle(x, y, radius) {
        this.ctx.strokeStyle = this.setColor();
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.stroke();
    };

    drawLine(ctx, x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.strokeStyle = this.setColor(colorSet.value);
        ctx.lineWidth = this.ctx.lineWidth;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
    };

    drawText() {
        this.isMode.text = true ;
        this.sheet.addEventListener('click',this.position.bind(this));
        document.addEventListener('keydown', e => {
            if(this.isTextMode) {
                if(e.key === 'Enter') {
                    this.isMode.text = false;
                    this.ctx.fillText(this.text, this.currentPos.x, this.currentPos.y);
                    this.ctx.beginPath();
                    this.text = '';
                } else {
                    this.text += e.key
                };
            };
        });
    };

////////////////////////////// FONCTION RESIZE /////////////////////////////////

resizeCanvas() {
    this.width = window.innerWidth * 0.8;
    this.height = window.innerHeight * 0.8;
    this.canvas.innerHTML = `
        <canvas id="feuille" width="${this.width}" height="${this.height}"></canvas>
        `
    };

};

/////////////////////////////////////////////////////////////////////////////////
///////////////////////////// SCRIPT PRINCIPALE /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/*




let draw = new Draw('#sheet');

window.onresize = () => {
draw.resizeCanvas();
draw = new Dessin("#sheet");
};


//////////////////////////////// OBJET tools ///////////////////////////////////

const tools = {
    color: document.querySelector('#colorSet'),
    more: document.querySelector("#more"),
    less: document.querySelector("#less"),
    gum: document.querySelector("#gum"),
    erase: document.querySelector("#erase"),
    rectangle: document.querySelector("#rectangle"),
    triangle: document.querySelector("#triangle"),
    circle: document.querySelector("#circle"),
    text: document.querySelector("#text"),
    pen: document.querySelector("#pen")
};

tools.more.addEventListener("click", () => {
    dessin.upSizing();
    console.log(dessin.isMode)
});

tools.less.addEventListener("click", () => {
    dessin.downSizing();
    console.log(dessin.isMode)});

tools.gum.addEventListener("click", () => {
    dessin.isMode.gum = true;
    console.log(dessin.isMode)});

tools.erase.addEventListener("click", () => {
    dessin.erase();
    console.log(dessin.isMode)});

tools.rectangle.addEventListener("click", () => {
    dessin.drawRectangle();
    console.log(dessin.isMode)});

tools.triangle.addEventListener("click", () => {
    dessin.isMode.triangle = true;
    console.log(dessin.isMode)});

tools.circle.addEventListener("click", () => {
    dessin.isMode.circle = true;
    console.log(dessin.isMode)});

tools.text.addEventListener("click", () => {
    dessin.isMode.text = true;
    console.log(dessin.isMode)});

tools.pen.addEventListener("click", () => {
    dessin.isMode.pen = true;
    console.log(dessin.isMode)});

    */