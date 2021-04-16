class FormUtil {
    constructor(config) {
        //super();
        this.scene = config.scene;  
    } 
    scaleToGameW(elName, per) {
        var el = document.getElementById(elName);
        el.style.width = per + "px";
    }
    scaleToGameH(elName, per) {
        var el = document.getElementById(elName);
        el.style.height = per + "px";
    }
    placeElementAt(elName) {

        //get the element
        var el = document.getElementById(elName);
        //set the position to absolute
        el.style.position = "absolute";
        //get the width of the element
        el.style.display = "block";
        
        
    }
  
    //add a change callback
    addChangeCallback(elName, fun, scope = null) {
        var el = document.getElementById(elName);
        if (scope == null) {
            el.onchange = fun;
        } else {
            el.onchange = fun.bind(scope);
        }
    }
    getTextAreaValue(elName) {
        var el = document.getElementById(elName);
        return el.value;
    }
    getTextValue(elName) {        
        var el = document.getElementById(elName);
        return el.value;
    }
    getDelete(elName){
        document.getElementById(elName).parentNode.removeChild(document.getElementById(elName));
    }
}