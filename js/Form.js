class Form {
  constructor() {
    this.titleImg=createImg("./assets/title.png","gameTitle")
    this.input=createInput("").attribute("placeholder","Enter your name")
    this.playButton=createButton("Play")
    this.greeting=createElement("h2")
  }
setElementsPosition(){
  this.titleImg.position(120, 100);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);

}

handleMousePressed(){
  this.playButton.mousePressed(()=>{
    this.input.hide();
    this.playButton.hide()
    var message = `
      Hello ${this.input.value()}
      </br>Wait for another player to join...`;
      this.greeting.html(message)

  })
}

hide(){
  this.input.hide()
  this.playButton.hide()
  this.greeting.hide()
}

display(){
  this.setElementsPosition();
  this.handleMousePressed();
}


}

/*

function name(){

}

function (){

}

()=>{

}

//Anonymous functions


name=()=>{

}



*/