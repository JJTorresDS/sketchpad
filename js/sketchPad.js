class SketchPad{
    constructor(container, size =400){
        this.canvas = document.createElement("canvas");
        this.canvas.width = size;
        this.canvas.height = size;
        this.canvas.style = `
            background-color:white;
            box-shadow: 0px 0px 10px 2px black;
            `;
        container.appendChild(this.canvas);

        this.ctx = this.canvas.getContext("2d");

        this.path = [];
        this.isDrawing = false;

        // the # makes it a private method
        this.#addEventListeners();
    }

    #addEventListeners(){
        this.canvas.onmousedown = (evt) => {
            
            const mouse = this.#getMouse(evt);

            this.path = [mouse];
            this.isDrawing = true;
        }

        this.canvas.onmousemove = (evt) => {
            if(this.isDrawing){
                const mouse = this.#getMouse(evt);

                this.path.push(mouse);
                console.log(this.path.length)  
            }
        }

        this.canvas.onmouseup = () => {
            // end drawing when mouse is up
            this.isDrawing = false;
        }
    }

    #getMouse=(evt)=>{
        const rect = this.canvas.getBoundingClientRect();
        return [
            Math.round(evt.clientX - rect.left,0),
            Math.round(evt.clientY - rect.top,0)
        ];
    }
}