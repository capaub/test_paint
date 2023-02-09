////////////////////////////// CLASSE DESSIN ///////////////////////////////////


class Test {
    constructor(){



        this.sheet = document.querySelector("#sheet");
        this.ctx = this.sheet.getContext("2d");
        this.lineWidth = 2;
        
        this.color = document.getElementById("colorSet");

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.canvas = document.getElementById("areaDraw");

        this.currentPos = {x: 0, y: 0};
        this.startPos = {x: 0, y: 0};
        // this.firstPos = {x:0, y: 0};
        // this.secondPos = {x: 0, y: 0};

        this.text ='';


        // this.sheet.addEventListener('mousedown', this.currentPosition.bind(this));
        //                         //////// TEST ///////
        this.sheet.addEventListener('mousedown', this.downDrawing.bind(this));

        this.sheet.addEventListener('mousemove', event => this.moveDrawing(event));

        this.sheet.addEventListener('mouseup', event => this.stopDrawing(event));

        this.sheet.addEventListener('mouseout', this.stopDrawing.bind(this));


        this.drawMode = {
            pen : this.drawLine(this.startPos.x, this.startPos.y, this.currentPos.x, this.currentPos.y),
            text: this.drawText,
            // rectangle : this.drawRectangle,
            // circle : this.drawCircle,
            // triangle : this.drawTriangle,
        }

        this.isMode = {
            gum : false,
            pen : false,
            text : false,
            // rectangle : false,
            // circle : false,
            // triangle : false,
        }
    }

    // => stock les coordonne de depart
    downDrawing(e){
        console.log("downdrawing");
        switch (this.isMode) {
            case this.isMode.gum:
                console.log("downdrawing.gum");
                this.drawMode.gum();
                break;
            case this.isMode.pen:
                console.log("downdrawing.pen");
                this.drawMode.pen;
                break;
            case this.isMode.text:
                console.log("downdrawing.text");
                this.drawMode.text();
                break;
            // case this.isMode.rectangle:
            //     this.drawMode.rectangle();
            //     break;
            // case this.isMode.circle:
            //     this.drawMode.circle();
            //     break;
            // case this.isMode.triangle:
            //     this.drawMode.triangle();
            //     break;
            default:
                console.log("coucou ca marche pas !");
        }
    }

    // => utilise les differentes fonctions switch case true / false
    moveDrawing(e) {

        switch (this.isMode) {
            case this.isMode.gum:
                console.log("downdrawing.gum")
                this.drawMode.gum();
                break;
            case this.isMode.pen:
                console.log("downdrawing.pen")
                this.currentPos.x = e.offsetX;
                this.currentPos.y = e.offsetY;
                this.drawMode.pen();
                break;
            case this.isMode.text:
                console.log("downdrawing.text")
                this.drawMode.text();
                break;
            // case this.isMode.rectangle:
            //     this.drawMode.rectangle();
            //     break;
            // case this.isMode.circle:
            //     this.drawMode.circle();
            //     break;
            // case this.isMode.triangle:
            //     this.drawMode.triangle();
            //     break;
            default:
                console.log("coucou ca marche pas !");
        }
    }
    // => stop le trait mais ne sort pas du mode
    stopDrawing(e) {
        console.log("stopdrawing")
        switch (this.isMode) {
            case this.isMode.gum:
                console.log("downdrawing.gum")
                this.drawMode.gum();
                break;
            case this.isMode.pen:
                console.log("downdrawing.pen")
                this.drawMode.pen();
                break;
            case this.isMode.text:
                console.log("downdrawing.text")
                this.drawMode.text();
                break;
            // case this.isMode.rectangle:
            //     this.drawMode.rectangle();
            //     break;
            // case this.isMode.circle:
            //     this.drawMode.circle();
            //     break;
            // case this.isMode.triangle:
            //     this.drawMode.triangle();
            //     break;
            default:
                console.log("coucou ca marche pas !");
        }


    }
    
    //////// les fonction pour stocker les positions  ///////

    currentPosition(e) {
        this.currentPos.x = e.offsetX;
        this.currentPos.y = e.offsetY;
    }

    // firstPosition(e) {
    //     this.firstPos.x = e.offsetX;
    //     this.firstPos.y = e.offsetY;
    // }

    // secondPosition(e) {
    //     this.secondPos.x = e.offsetX;
    //     this.secondPos.y = e.offsetY;
    // }

////////////////////////////// LES FONCTIONS "tools" ////////////////////////////
    
    upSizing() {
        this.ctx.lineWidth ++;
    }
            
    downSizing() {this.ctx.lineWidth <= 1 ? this.ctx.lineWidth = 1 : this.ctx.lineWidth --;
    }
    
    erase() {
        this.ctx.clearRect(0, 0, innerWidth, innerHeight);
    }

    // gum() {
    //     this.isMode.gum = true;
    // }

///////////////////////////  LES FONCTIONS DE DESSINS ///////////////////////////
    
    // drawRectangle( x1, y1, x2, y2) {
    //     this.ctx.beginPath();
    //     this.ctx.rect(x1, y1, x2 - x1, y2 - y1);
    //     this.ctx.stroke();
    // }

    // drawTriangle(x1, y1, x2, y2, x3, y3) {
    //     this.ctx.strokeStyle = this.color.value;
    //     this.ctx.beginPath();
    //     this.ctx.moveTo(x1, y1);
    //     this.ctx.lineTo(x2, y2);
    //     this.ctx.lineTo(x3, y3);
    //     this.ctx.fill();
    //     this.ctx.stroke();
    //     this.ctx.closePath();
    // }

    // drawCircle(x, y, radius) {
    //     this.ctx.strokeStyle = this.color.value;
    //     this.ctx.beginPath();
    //     this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
    //     this.ctx.fill();
    //     this.ctx.stroke();
    // }

    drawLine(x1, y1, x2, y2) {

        // if(this.isMode.gum){
        //     console.log("coucou")
        //     this.ctx.strokeStyle = "#FFFFFF";
        // }
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color.value;
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.lineCap = "round";
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
        this.ctx.closePath();
        return this;
    }

    drawText() {
        this.isMode.text = true ;
        this.sheet.addEventListener('click',this.position.bind(this));
        document.addEventListener('keydown', e => {
            if(this.isMode.text) {
                if(e.key === 'Enter') {
                    this.isMode.text = false;
                    this.ctx.fillText(this.text, this.currentPos.x, this.currentPos.y);
                    this.ctx.beginPath();
                    this.text = '';
                } else {
                    this.text += e.key
                }
            }
        });
    }

////////////////////////////// FONCTION RESIZE /////////////////////////////////

// resizeCanvas() {
//     this.width = window.innerWidth * 0.8;
//     this.height = window.innerHeight * 0.8;
//     this.canvas.innerHTML = `
//         <canvas id="feuille" width="${this.width}" height="${this.height}"></canvas>
//         `
//     }

}

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