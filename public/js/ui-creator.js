export default class Ui_Creator {
    
  
    constructor() {
    }
  
    static init() {
        let commenting_system_tags = document.querySelectorAll('commenting-system');
        let temp_container = null;

        //Find all custom tags and replace it with div with unique id 
        [...commenting_system_tags].forEach(elm => { 

            temp_container = document.createElement('div');
            temp_container.id = 'commenting_system_container_' + Math.floor(Math.random() * 100);

            temp_container.appendChild(this.textarea()); 
            temp_container.appendChild(this.toolbar());  
            temp_container.appendChild(this.submit_button());  
            elm.replaceWith(temp_container);

        }); 
    } 

    static textarea() {
        let tmp = document.createElement('textarea');
        tmp.classList.add('comment_textarea');
        tmp.cols = "35";
        tmp.rows = "8";
        return tmp;
    }

    static submit_button(){
        let tmp = document.createElement('button');
        tmp.classList.add('submit_button');
        tmp.type = "button"
        tmp.innerHTML = "Submit";
        return tmp;
    } 

    static toolbar() {
        let tmp = document.createElement('div');
        tmp.innerHTML = '<button class="btn"><i class="fa fa-home"></i></button><button class="btn"><i class="fa fa-bars"></i></button>';
        return tmp;
    }

  
     
}

  
 