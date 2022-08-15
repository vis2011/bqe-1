class Htp{
    constructor(){
    backButton = createImg("back arrow.png", "bb");;
    this.title = createElement("h1");
    }

    
    setElementsStyle() {
    this.title.class("tthtp");
    backButton.class("bhtp");
  }


  hide(){
    this.title.hide();
    backButton.hide();
  }


    hide() {
    this.title.hide();
    backButton.hide();
  }

  display(){
    var text = `How to Play`;
    this.title.html(text);
        this.setElementsStyle();

        backButton.mousePressed(() =>{
             this.hide();
             body.style.background='url("splash.gif")';
             body.style.backgroundSize="190vh";
             play.show();
             how.show();
             about.show();
        })
  }
}