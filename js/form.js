class Form
{
    constructor()
    {
        this.input=createInput("").attribute("placeholder","enter your name");
        this.playButton=createButton("play");
        this.titleImg=createImg("assets/title.png","game title");
        this.greeting=createElement("h2");
    }
    setElementsPositions(){
        this.titleImg.position(120,50);
        this.input.position(width/2-110,height/2-80);
        this.playButton.position(width/2-90,height/2-20);
        this.greeting.position(width/2-300,height/2-100);
    }
    setElementsStyle(){
     this.titleImg.class("gameTitle");
     this.playButton.class("customButton");   
     this.greeting.class("cgreeting");  
     this.input.class("customInput");  
    }
    hide(){
        this.greeting.hide();
        this.playButton.hide();
        this.input.hide();
    }
    handleMousePressed(){
        this.playButton.mousePressed(()=>{
            this.input.hide();
            this.playButton.hide();
            var message = `
            hello ${this.input.value()}
            </br>wait for another player to join...`;
            this.greeting.html(message);
        })
    }
    display()
    {
        this.setElementsPositions();
        this.setElementsStyle();
        this.handleMousePressed();

    }
}