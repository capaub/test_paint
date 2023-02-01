// Création de la classe Draw


class Draw {

    constructor() {

        this.sheet = document.querySelector("#sheet");
        this.ctx = this.sheet.getContext("2d");

        this.color = document.getElementById("colorSet");

        console.log(this.color.value);

        this.currentPos = {x: 0, y: 0};
        this.isDrawing = false;
        this.isTextMode = false;
        this.isGumMode = false;
        // this.isRectMode = false;
        this.text = '';

        this.startX = 0;
        this.startY = 0;


        this.lineWidth = 2;


        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas = document.getElementById("areaDraw");

        //Ecoute les différents événement de l'utilisateur pour dessiner

        this.sheet.addEventListener('mousedown', event => this.downDrawing(event));

        this.sheet.addEventListener('mousemove', this.moveDrawing.bind(this));

        this.sheet.addEventListener('mouseup', this.upOrOutStopDrawing.bind(this));

        this.sheet.addEventListener('mouseout', event => this.upOrOutStopDrawing(event));

    }

    drawRect() {
        // this.isRectMode = false;
        this.isDrawing = false;
        this.sheet.addEventListener('mousedown', event => {
            this.startX = event.offsetX;
            this.startY = event.offsetY;
        });
        this.sheet.addEventListener('mousemove', event => {
            if (this.isDrawing) {
                let endX = event.offsetX;
                let endY = event.offsetY;

                this.ctx.clearRect(0, 0, this.sheet.width, this.sheet.height);
                this.ctx.beginPath();
                this.ctx.rect(this.startX, this.startY, endX - this.startX, endY - this.startY);
                this.ctx.stroke();
            }
        });
        this.sheet.addEventListener('mouseup', event => {
            let endX = event.offsetX;
            let endY = event.offsetY;

            this.ctx.beginPath();
            this.ctx.rect(this.startX, this.startY, endX - this.startX, endY - this.startY);
            this.ctx.stroke();
        });
    }

    // Fonction pour stocker les coordonnées X & Y

    position(e) {
        this.currentPos.x = e.offsetX;
        this.currentPos.y = e.offsetY;
    }

    // Fonction pour déssiner

    downDrawing(e) {
        if (!this.isTextMode) {
            this.isDrawing = true;
            this.position(e);
        }
    }

    moveDrawing(e) {
        if (!this.isTextMode) {
            if (this.isDrawing) {
                this.drawLine(this.currentPos.x, this.currentPos.y, e.offsetX, e.offsetY);
                this.position(e);
            }
        }
    }

    upOrOutStopDrawing(e) {
        if (this.isDrawing) {
            this.drawLine(this.currentPos.x, this.currentPos.y, e.offsetX, e.offsetY);
            this.isDrawing = false;
        }
    }

    /**
     *
     * @param x1
     * @param y1
     * @param x2
     * @param y2
     * @param color
     */
    drawLine(x1, y1, x2, y2) {
        this.ctx.beginPath();

        if(!this.isGumMode){
            console.log("coucou")
            this.ctx.strokeStyle = "#FFFFFF";
        }this.ctx.strokeStyle = this.color.value;

        this.ctx.lineWidth = this.lineWidth;
        this.ctx.lineCap = "round";
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    //Fonction pour le changement de couleurs

    // setColor(color = this.color.value){
    //     return color;
    // }

    //Fonction plus gros trait

    upSizing() {
        this.lineWidth++;
    }

    //Fonction plus petit trait 

    downSizing() {
        this.lineWidth <= 1 ? this.lineWidth = 1 : this.lineWidth--;
    }

    //Fonction effacer le contenue du canvas

    erase() {
        this.ctx.clearRect(0, 0, innerWidth, innerHeight);
    }

    drawText() {
        this.isTextMode = true;
        this.sheet.addEventListener('click', this.position.bind(this));
        if (this.isTextMode) {
            addEventListener('keydown', e => {
                if (e.key === 'Enter') {
                    removeEventListener('keydown',event);
                    this.isTextMode = false;
                    this.ctx.font = '48px sans-serif';
                    this.ctx.fillText(this.text, this.currentPos.x, this.currentPos.y);
                    this.text = '';

                } else {
                    this.text += e.key
                }
            });
        }
    }

    // Fonction resize __ perte du dessin en cours !"

    resizeCanvas() {
        this.width = window.innerWidth * 0.8;
        this.height = window.innerHeight * 0.8;
        this.canvas.innerHTML = `
            <canvas id="sheet" width="${this.width}" height="${this.height}"></canvas>
            `
    }

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


}

