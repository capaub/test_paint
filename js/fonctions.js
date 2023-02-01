class Line{
    constructor(ctx, x1, y1, x2, y2, setColor, lineWidth){
        this.lineWidth = lineWidth;
        this.setColor = setColor;
        this.ctx = ctx;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    drawLine() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.setColor;
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.moveTo(this.x1, this.y1);
        this.ctx.lineTo(this.x2, this.y2);
        this.ctx.stroke();
        this.ctx.closePath();
    };

}

