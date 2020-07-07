//
//Gaming Interface
//
class PointMark{
    constructor(text, x, y){
        this.x = x;
        this.y = y;
        this.text = text;
        this.value = 0;
    }
    draw(){
        let txt = this.text+': '+this.value;
        textFont(fontFiles[0]);
        fill(255);
        textSize(20);
        text(txt, this.x, this.y);
    }
    update(value){
        this.value = value;
    }
}
class HearthGroup{
    constructor(quantityTotal){
        this.quantityTotal = quantityTotal;
        this.actualHave = this.quantityTotal;
    }
    draw(){
        let diference = this.quantityTotal - this.actualHave;
        for(let i = 1; i <= this.actualHave; i++){
            image(iconsSpiteFiles['one_hearth_more'], 50*i, 50, 50, 50);
        }
        for(let i = 1; i <= diference; i++){
            image(iconsSpiteFiles['one_hearth_less'], 50*(i+this.actualHave), 50, 50, 50);
        }
    }
    update(actualHave){
        this.actualHave = actualHave;
    }
}
class PauseButton{
    constructor(){
        this.button = createButton('<i class="fa fa-pause" id="volume_icon"></i>').addClass('float_button pause_button');
        this.button.mousePressed(this.onClicked);
        this.button.hide();
    }
    show(){
        this.button.show();
    }
    hide(){
        this.button.hide();
    }
    onClicked(action){
        this.button.mousePressed(action);
    }
    getNode(){
        return this.button;
    }
}
class VolumeButton{
    constructor(){
        this.active = false;
        this.button = createButton('<i class="fa fa-volume-up" id="volume_icon"></i>').addClass('float_button');
        this.button.mousePressed(this._onClicked);
        this.button.hide();
    }
    show(){
        this.button.show();
    }
    hide(){
        this.button.hide();
    }
    _onClicked(){
        if(this.active){
            mute(this.active);
        }else{
            speaking(this.active);
        }
        this.active = !this.active;
        sounds.switchSound(this.active);

        //Local functions
        function mute(){
            select('#volume_icon').removeClass('fa-volume-up');
            select('#volume_icon').addClass('fa-volume-off');
        }
        function speaking(){
            select('#volume_icon').removeClass('fa-volume-off');
            select('#volume_icon').addClass('fa-volume-up');
        }
    }
    getNode(){
        return this.button;
    }
}
//
//Screens
//
class ModalScreen{
    constructor(){}
}
class ContentScreen{
    constructor(){}
}
class PauseMenu{
    constructor(title = 'Menu'){
        this.logo = 'assets/images/logo.png';
        this.title = title;
        this.content;
    }
    createMenu(buttonsArray){
        let buttons = buttonsArray;
        this.content = createDiv().addClass('pause_menu_content');
        this.content.child(createImg(this.logo, "logo").addClass("pause_menu_logo"));

        //Menu Box
        this.box_content = createDiv().addClass('volume');
        this.title_content = createDiv().addClass('price');
        this.title_content.child(createP(this.title).id('#pause_menu_title'));
        this.box_content.child(this.title_content);
        this.button_content = createDiv().addClass('volume_desc');
        buttons.forEach((element) => {
            let inp = createButton(element[0]);
            inp.mousePressed(element[1]);
            let bt = createDiv().addClass('but_5');
            bt.child(inp);
            this.button_content.child(bt);
        });
        this.box_content.child(this.button_content);
        this.content.child(this.box_content);
        this.content.hide();
    }
    showMenu(){
        this.content.show();
    }
    hideMenu(){
        this.content.hide();
    }
}
class MainMenu{
    constructor(title = 'Menu'){
        this.logo = 'assets/images/logo.png';
        this.title = title;
        this.content;
    }
    createMenu(buttonsArray){
        let buttons = buttonsArray;
        this.content = createDiv().addClass('menu_content');
        this.content.child(createImg(this.logo, "logo").addClass("menu_logo"));

        //Menu Box
        this.box_content = createDiv().addClass('volume');
        this.title_content = createDiv().addClass('price');
        this.title_content.child(createP(this.title).id('#menu_title'));
        this.box_content.child(this.title_content);
        this.button_content = createDiv().addClass('volume_desc');
        buttons.forEach((element) => {
            let inp = createButton(element[0]);
            inp.mousePressed(element[1]);
            let bt = createDiv().addClass('but_5');
            bt.child(inp);
            this.button_content.child(bt);
        });
        this.box_content.child(this.button_content);
        this.content.child(this.box_content);
        this.content.hide();
    }
    showMenu(){
        this.content.show();
    }
    hideMenu(){
        this.content.hide();
    }
}
class LoadBar{
    constructor(loadText = 'Carregando'){
        this.loadText = loadText;
        this.content;
        this.contentChild;
        this.loadBar;
        this.text;
    }
    createBar(){
        this.contentChild = createDiv().addClass("skills");
        this.loadBar = createDiv().id("#load_bar");
        this.text = createP(this.loadText+' 5%').id("#load_text");
        this.loadBar.child(this.text);
        this.loadBar.child(createDiv().addClass("clear"));
        this.contentChild.child(this.loadBar);
        this.contentChild.hide();
    }
    hideBar(){
        this.contentChild.hide();
    }
    showBar(){
        this.contentChild.show();
    }
    update(value){
        this.text.html(this.loadText+' '+int(value)+'%');
        this.loadBar.style('width', int(value)+'%');
    }
    getNode(){
        return this.contentChild;
    }
}
class LoadScreen{
    constructor(){
        this.loadBar = new LoadBar();
        this.logo = 'assets/images/logo.png';
        this.loadBar.createBar();
        this.loadBar.showBar();
    }
    createScreen(){
        this.content = createDiv().addClass("load_content");
        this.content.child(createImg(this.logo, "logo").addClass("load_logo"));

        this.content.child(this.loadBar.getNode());

        this.content.hide();
    }
    showScreen(){
        this.content.show();
    }
    hideScreen(){
        this.content.hide();
    }
    update(value){
        this.loadBar.update(value);
    }
    getNode(){
        return this.content;
    }
}