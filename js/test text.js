// Création de la classe Dessin

class Dessin{
    constructor(){
        
        this.sheet = document.querySelector("#feuille");
        this.ctx = this.sheet.getContext("2d");

        this.currentPos = {x:0 , y:0};
        // this.startPos = {x: 0, y: 0};
        this.endPos = {x: 0, y: 0};
        this.isDrawing = false;
        this.isTextMode = false;
        this.isRectMode = false;
        this.isCircleMode = false;
        this.isTriangleMode = false;
        this.text = '';

        this.ctx.lineWidth = 2;
        
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas = document.getElementById("areaDraw");
        console.log("drawMode : " + this.isDrawing, " textMode : " + this.isTextMode)
    //J'écoute les différents événement de utilisateur pour dessiner

    // sheet.addEventListener("mousedown", e =>{
        //     isDrawing = true;
        //     currentPos.x = e.offsetX;
        //     currentPos.y = e.offsetY;
        // });
        
        
        this.mouseDown = this.sheet.addEventListener('mousedown', this.downDrawing.bind(this));

        // this.sheet.addEventListener('mousemove', e =>{
        //     if (this.isDrawing){
        //         this.drawLine(this.ctx, currentPos.x, currentPos.y, e.offsetX, e.offsetY);
        //         currentPos.x = e.offsetX;
        //         currentPos.y = e.offsetY;
        //     };
        // });

        this.mouseMove = this.sheet.addEventListener('mousemove', this.moveDrawing.bind(this));

        // this.sheet.addEventListener('mouseup', e =>{
        //     if (this.isDrawing){
        //         this.drawLine(this.ctx, this.currentPos.x, this.currentPos.y, e.offsetX, e.offsetY);
        //         this.isDrawing = false;
        //     };
        // });
        
        this.mouseUp = this.sheet.addEventListener('mouseup', this.upOrOutStopDrawing.bind(this));

        // this.sheet.addEventListener('mouseout', e =>{
        //     if (this.isDrawing){
        //         this.drawLine(this.ctx, this.currentPos.x, this.currentPos.y, e.offsetX, e.offsetY);
        //         this.isDrawing = false;
        //     };
        // });

        this.mouseOut = this.sheet.addEventListener('mouseout', this.upOrOutStopDrawing.bind(this));
    
    };

    // Fonction pour stocker les coordonnées X & Y

    currentPosition(e) {
        this.currentPos.x = e.offsetX;
        this.currentPos.y = e.offsetY;
    };

    // startPosition(e) {
    //     this.startPos.x = e.offsetX;
    //     this.startPos.y = e.offsetY;
    // };

    endPostion(e) {
        this.endPos.x = e.offsetX;
        this.endPos.y = e.offsetY;
    };

    // Fonction pour déssiner

    downDrawing(e){
        if(!this.isTextMode){ 
            if(!this.isRectMode || !this.isCircleMode || !this.isTriangleMode) {
                this.isDrawing = true;
                this.currentPosition(e);
            } this.startPosition(e);
        };
    }

    moveDrawing(e) {
        if(!this.isTextMode){ 
            if(this.isDrawing) {
                this.drawLine(this.ctx, this.currentPos.x, this.currentPos.y, e.offsetX, e.offsetY);
                this.position(e);
            };
        };
    };

    upOrOutStopDrawing(e) {
        if(!this.isTextMode){
            if(!this.isRectMode || !this.isCircleMode || !this.isTriangleMode){
                if(this.isDrawing){
                    this.drawLine(this.ctx, this.currentPos.x, this.currentPos.y, e.offsetX, e.offsetY);
                    this.isDrawing = false;
                };
            } this.endPostion(e)
        }
    };

    drawRect()

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
    
    // --/-- écrite en ternaire --/-- prends moins de place mais apprends à marché avant de vouloir courir !!!!! (à utiliser seulement pour des conditions unique / simple)
    //stucture d'une condition ternaire : condition ? if : else ; 
    
    // downSizing(){
        //     if(this.ctx.lineWidth < 1){
            //         this.ctx.lineWidth = 1;
            //     } this.ctx.lineWidth --;
            // };
            
    downSizing() {this.ctx.lineWidth <= 1 ? this.ctx.lineWidth = 1 : this.ctx.lineWidth --;
    };

    //Fonction effacer 
    
    erase() {
        this.ctx.clearRect(0, 0, innerWidth, innerHeight);
    };

    keydown(e){
        console.log("troisieme etape")
        if(this.isTextMode) {
            if(e.key === 'Enter') {
                console.log("text mode presse enter");
                this.isTextMode = false;
                this.ctx.font = '48px serif';
                this.ctx.fillText(this.text, this.currentPos.x, this.currentPos.y);
                this.text = '';
                console.log(this.text)
            } else {
                console.log("je suis dans le else")
                console.log(this.text);
                this.text += e.key
                this.sheet.removeEventListener('click',this.position.bind(this));
            };
        };
    }
    
    // goTextDraw(){
    //     console.log("deuxieme etape")
    //     document.addEventListener('keydown', this.keydown(this));
    // }
    
    drawText() {
        console.log("premiere etape")
        this.isTextMode = true ;
        this.sheet.addEventListener('click', this.position.bind(this));
        console.log(this.currentPos.x, this.currentPos.y)
        document.addEventListener('keydown', this.keydown(this));
    }

    // drawText() {
    //     console.log("drawtext()");
    //     this.isTextMode = true ;
    //     this.sheet.addEventListener('click',this.position.bind(this));
    //     console.log(this.text);
    //     document.addEventListener('keydown', e => {
    //         if(this.isTextMode) {
    //             if(e.key === 'Enter') {
    //                 console.log("text mode presse enter");
    //                 this.isTextMode = false;
    //                 this.ctx.font = '48px serif';
    //                 this.ctx.fillText(this.text, this.currentPos.x, this.currentPos.y);
    //                 this.text = '';
    //                 console.log(this.text)
    //             } else {
    //                 console.log("je suis dans le else")
    //                 console.log(this.text);
    //                 this.text += e.key
    //                 this.sheet.removeEventListener('click',this.position.bind(this));
    //             };
    //         };
    //     });
    //     console.log(this.text);
    //     this.sheet.removeEventListener('click',this.position.bind(this));
    // };
    
    // Fonction resize // ajouter un window.alert avec "attention tu vas perdre ton dessin !"

    resizeCanvas() {
        this.width = window.innerWidth * 0.8;
        this.height = window.innerHeight * 0.8;
        this.canvas.innerHTML = `
            <canvas id="feuille" width="${this.width}" height="${this.height}"></canvas>
            `
    };

///////////////////////////////// NE BLOQUE PAS VRAIMENT LE REDIMENSIONNEMENT //////////////////////////////////////////////
    // resizeCanvas() {
    //     window.alert('Attention, vous allez perdre votre dessin en redimensionnant le canvas. Voulez-vous continuer ?');
    //     while (true) {
    //         if (window.confirm('Confirmez-vous le redimensionnement du canvas ?')) {
    //             this.width = window.innerWidth * 0.8;
    //             this.height = window.innerHeight * 0.8;
    //             this.canvas.innerHTML = `
    //                 <canvas id="feuille" width="${this.width}" height="${this.height}"></canvas>
    //                 `
    //                 break;
    //             }
    //     };
    // };
};

