class LoadBar{
    constructor(){
        this.content;
        this.contentChild;
        this.loadBar;
        this.text;
    }
    createBar(){
        this.contentChild = createDiv().addClass("skills");
        this.content.child(this.contentChild);
        this.loadBar = createDiv().id("#load_bar");
        this.text = createP('Loading 5%').id("#load_text");
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
        this.text.html('Loading '+int(value)+'%');
        this.loadBar.style('width', int(value)+'%');
    }
    getNode(){
        return this.content;
    }
    createScreen(){
        this.content = createDiv().addClass("load_content");
        this.content.child(createImg('assets/img/logo.png', "logo").addClass("load_logo"));
        this.contentChild = createDiv().addClass("skills");
        this.text = createP('Loading 5%').addClass("load_text").id("#load_text");
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