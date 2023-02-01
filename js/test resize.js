// Création de la classe Dessin

class Dessin{
    constructor(){

        this.sheet = document.querySelector("#feuille");
        this.ctx = this.sheet.getContext("2d");

        this.currentPos = {x:0 , y:0};
        this.isDrawing = false;
        this.isTextMode = false;
        this.text = '2';

        this.ctx.lineWidth = 2;
        
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas = document.getElementById("areaDraw");
        
    //J'écoute les différents événement de utilisateur pour dessiner
        
        this.sheet.addEventListener('mousedown', this.downDrawing.bind(this));

        this.sheet.addEventListener('mousemove', this.moveDrawing.bind(this));
        
        this.sheet.addEventListener('mouseup', this.upOrOutStopDrawing.bind(this));

        this.sheet.addEventListener('mouseout', this.upOrOutStopDrawing.bind(this));
    
    };

    // Fonction pour stocker les coordonnées X & Y

    position(e) {
        this.currentPos.x = e.offsetX;
        this.currentPos.y = e.offsetY;
        console.log(`x: ${this.currentPos.x}, y: ${this.currentPos.y}`);
    };

    // Fonction pour déssiner

    downDrawing(e){
        if(!this.isTextMode){ 
        this.isDrawing = true;
        this.position(e);
        }
    };

    moveDrawing(e) {
        if(this.isDrawing) {
            this.drawLine(this.ctx, this.currentPos.x, this.currentPos.y, e.offsetX, e.offsetY);
            this.position(e);
        }
    }

    upOrOutStopDrawing(e) {
        if(this.isDrawing){
            this.drawLine(this.ctx, this.currentPos.x, this.currentPos.y, e.offsetX, e.offsetY);
            this.isDrawing = false;
        }
    };

    drawLine(ctx, x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.strokeStyle = this.setColor();
        ctx.lineWidth = this.ctx.lineWidth;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
    };
    
    //Fonction pour le changement de couleurs
    
    setColor(color){ 
        this.ctx.strokeStyle = color;
    };
    
    //Fonction plus gros trait
    
    upSizing() {
        this.ctx.lineWidth ++;
    };
    
    //Fonction plus petit trait 
            
    downSizing() {this.ctx.lineWidth <= 1 ? this.ctx.lineWidth = 1 : this.ctx.lineWidth --;
    };

    //Fonction effacer 
    
    erase() {
        this.ctx.clearRect(0, 0, innerWidth, innerHeight);
    };

    drawText() {
        console.log("drawtext()");
        this.isTextMode = true ;
        this.sheet.addEventListener('click',this.position.bind(this));
        document.addEventListener('keydown', e => {
            if(this.isTextMode) {
                if(e.key === 'enter') {
                    console.log("text mode presse enter");
                    this.isTextMode = false;
                    this.ctx.fillText(this.text, this.currentPos.x, this.currentPos.y);
                    this.text = '';
                } else {
                    console.log("drawtext(+=)");
                    this.text += e.key
                }
            }
        });
    };
    
    // Fonction resize // ajouter un window.alert avec "attention tu vas perdre ton dessin !"

    resizeCanvas() {
        this.width = window.innerWidth * 0.8;
        this.height = window.innerHeight * 0.8;
        this.canvas.innerHTML = `
            <canvas id="feuille" width="${this.width}" height="${this.height}"></canvas>
            `
    };
}

///////////////////////////////////////////////// CODE PRINCIPALE ////////////////////////////////////////////////////////

// Création de mon objet canvas de la classe Dessin

let drawArea = new Dessin("#feuille");  

// Déclaration des fonctions

    // J'attribut le background suivant les couleurs choisit dans les <div> de mes couleurs prédéfinit

document.querySelectorAll("#palette div").forEach(color => {
        color.style.backgroundColor = color.dataset.color;
        
        //  Ici "j'écoute" la sélection de couleur pour modifier la couleur du pinceau

        color.addEventListener("click", () => {
            drawArea.setColor(color.dataset.color);
        });
});

window.onresize = () => {
    drawArea.resizeCanvas();
    drawArea = new Dessin("#feuille");
};

// Ecoute des événements & execution des != fonctions

document.querySelector("#plus").addEventListener("click", () => {
    drawArea.upSizing();
});

document.querySelector("#moins").addEventListener("click", () => {
    drawArea.downSizing();
});

document.querySelector("#gomme").addEventListener("click", () => {
    drawArea.setColor("white");
});

document.querySelector("#effacer").addEventListener("click", () => {
    drawArea.erase();
});

document.querySelector("#text").addEventListener("click", () => {
    drawArea.drawText();
});


keydown(e)
{
    console.log("troisieme etape")
    if(this.isTextMode) {
        if(e.key === 'Enter') {
            this.isTextMode = false;
            this.ctx.font = '48px serif';
            this.ctx.fillText(this.text, this.currentPos.x, this.currentPos.y);
            this.text = '';
        } else {
            this.text += e.key
        };
    };
}

goTextDraw()
{
    console.log("deuxieme etape")
    this.position(this);
    if(this.isTextMode) {
        document.addEventListener('keydown', this.keydown());
    } this.canvas.removeEventListener('click', this.goTextDraw.bind(this));
    console.log("ici j'ai enlever l'écouteur d'événement")
}

drawText()
{
    console.log("premiere etape")
    this.isTextMode = true ;
    this.canvas.addEventListener('click', this.goTextDraw.bind(this))
}

//////////////////////////////////////////// UN CARRE /////////////////////////////////////////////

let startX, startY;

canvas.addEventListener('mousedown', event => {
  startX = event.offsetX;
  startY = event.offsetY;
});

canvas.addEventListener('mouseup', event => {
  const endX = event.offsetX;
  const endY = event.offsetY;
  
  context.beginPath();
  context.rect(startX, startY, endX - startX, endY - startY);
  context.stroke();
});

//////////////////////////////////////// UN TRIANGLE /////////////////////////////////////////////////


let startX, startY;

canvas.addEventListener('mousedown', event => {
  startX = event.offsetX;
  startY = event.offsetY;
});

canvas.addEventListener('mouseup', event => {
  const endX = event.offsetX;
  const endY = event.offsetY;
  
  context.beginPath();
  context.moveTo(startX, startY);
  context.lineTo(startX + (endX - startX) / 2, endY);
  context.lineTo(endX, startY);
  context.closePath();
  context.stroke();
});


///////////////////////////////////////// UN CERCLE //////////////////////////////////////////////////


let startX, startY;

canvas.addEventListener('mousedown', event => {
  startX = event.offsetX;
  startY = event.offsetY;
});

canvas.addEventListener('mouseup', event => {
  const endX = event.offsetX;
  const endY = event.offsetY;
  
  const radius = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
  
  context.beginPath();
  context.arc(startX, startY, radius, 0, 2 * Math.PI);
  context.stroke();
});