class Draggable {

    constructor(config) {
        this.dragging = false;
        this.rollover = false;

        if(config.x) {
            this.x = config.x;
        }

        if(config.y) {
            this.y = config.y;
        }

        if(config.w){
            this.w  = config.w;
        }

        if(config.h) {
            this.h = config.h;
        }

    }

    show() {
        stroke(0);
        if(this.dragging) {
            fill(50);
        } else if(this.rollover) {
            fill(100);
        } else {
            fill(175, 200);
        }

        console.log("x:" + this.x +"y: " + this.y + "w: " + this.w)
        rect(this.x, this.y, this.w, this.h);
    }

    over() {
        // is mouse over object?
        if(mouseX > this.x && mouseX < this.x + this.w
            && mouseY > this.y && mouseY < this.y + this.h) {
                this.rollover = true;
            } else {
                this.rollover = false;
            }
    }

    update() {
       if(this.dragging) {
           this.x = mouseX + this.offsetX;
           this.y = mouseY + this.offsetY;
       }
    }

    pressed() {
        if(mouseX > this.x && mouseX < this.x + this.w
            && mouseY > this.y && mouseY < this.y + this.h) {
                this.dragging = true;

                this.offsetX = this.x - mouseX;
                this.offsetY = this.y - mouseY;
            }
    }

    released() {
        this.dragging = false;
    }

}