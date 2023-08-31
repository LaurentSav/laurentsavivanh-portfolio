export class Symbole{
    characters: string;
    x: number;
    y: number;
    fontSize: number;
    text: string;
    canvasHeight: number;
    constructor(x: number, y: number, fontSize: number, canvasHeight: number){
        this.characters = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン"
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.text = '';
        this.canvasHeight = canvasHeight;
    }
    draw(context: CanvasRenderingContext2D){
        this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length))
        context.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--matrix-letter');
        context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
        if(this.y * this.fontSize > this.canvasHeight && Math.random() > 0.999){
            this.y = 0;
        }else{
            this.y += 1
        }
    }
}

export class Effect{
    canvasWidth: number;
    canvasHeight: number;
    fontSize: number;
    columns: number;
    symbols: Symbole[];
    constructor(canvasWidth: number, canvasHeight: number){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.fontSize = 14;
        this.columns = this.canvasWidth / this.fontSize;
        this.symbols = [];
        this.#initialize();
        console.log(this.symbols);
    }
    #initialize(){
        for(let i = 0; i < this.columns; i++){
            this.symbols[i] = new Symbole(i, 0, this.fontSize, this.canvasHeight);
        }
    }
}

