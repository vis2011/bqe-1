class Level1{
    constructor(){
    this.backButton = createImg("back arrow.png", "bb");
    this.q1=createImg("japan.png" ,"japan");
    this.opt11=createButton("South Korea");
    this.opt12=createButton("Japan");
    this.opt13=createButton("Sweden");
    this.opt14=createButton("Oman");
    this.title = createElement("h1");
    this.timer = createElement("h1");
    }

    
    setElementsStyle() {
    this.title.class("tthtp-1");
    this.backButton.class("bhtp");
    this.q1.class("qimg");
    this.opt11.class("opt1");
    this.opt12.class("opt2");
    this.opt13.class("opt3");
    this.opt14.class("opt4");
    this.timer.class("timer");
  }


  hide(){
    this.title.hide();
    this.backButton.hide();
    this.q1.hide();
    this.opt11.hide();
        this.opt12.hide();
            this.opt13.hide();
                        this.opt14.hide();
  }

  display(){
    var text = `Play`;
    this.title.html(text);
        this.setElementsStyle();

        this.backButton.mousePressed(() =>{
             this.hide();
             body.style.background='url("splash.gif")';
             body.style.backgroundSize="190vh";
             play.show();
             how.show();
             about.show();
                 this.title.hide();
    this.backButton.hide();
    this.q1.hide();
    this.opt11.hide();
        this.opt12.hide();
            this.opt13.hide();
                        this.opt14.hide();
        })
            var ttext=`Timer :${timeSecond}`;
            this.timer.html(ttext)
          const countDown =  setInterval (()=>{
            timeSecond--;
            var ttext=`Timer :${timeSecond}`;
            this.timer.html(ttext)
            if(timeSecond<=0 || timeSecond < 1){
            clearInterval(countDown);
            }
          } , 1000)
  }
}