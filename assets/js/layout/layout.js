class ModalScreen{
    constructor(){}
}
class ContentScreen{
    constructor(){}
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
        this.active = true;
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
            this.active = false;
            sounds.switchSound(this.active);
            select('#volume_icon').removeClass('fa-volume-up');
            select('#volume_icon').addClass('fa-volume-off');

        }else{
            this.active = true;
            sounds.switchSound(this.active);
            select('#volume_icon').removeClass('fa-volume-off');
            select('#volume_icon').addClass('fa-volume-up');
        }
    }
    getNode(){
        return this.button;
    }
}
class MenuButtons{
    constructor(text, action, color){
    }
    getNode(){
    }
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
        this.logo = 'assets/images/logo.png';
        this.loadText = loadText;
        this.content;
        this.contentChild;
        this.loadBar;
        this.text;
    }
    createBar(){
        this.contentChild = createDiv().addClass("skills");
        this.content.child(this.contentChild);
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
        return this.content;
    }
    createScreen(){
        this.content = createDiv().addClass("load_content");
        this.content.child(createImg(this.logo, "logo").addClass("load_logo"));
        this.contentChild = createDiv().addClass("skills");
        this.text = createP(this.loadText+' 5%').addClass("load_text").id("#load_text");
        this.content.child(this.contentChild);
        this.loadBar = createDiv().addClass("load_bar").id("#load_bar");
        this.loadBar.child(createDiv().addClass("clear"));
        this.contentChild.child(this.loadBar);
        this.contentChild.child(this.text);
        this.content.hide();
    }
    showScreen(){
        this.content.show();
    }
    hideScreen(){
        this.content.hide();
    }
}