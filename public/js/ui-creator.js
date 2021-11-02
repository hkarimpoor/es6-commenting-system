export default class Ui_Creator {
    
    static comment_list_container = this.comment_list();;
  
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

            temp_container.appendChild(this.comment_list_container);  
            temp_container.appendChild(this.comments_main_container());


            this.inject_comments(temp_container,elm.getAttribute('data-comments-url'));

            elm.replaceWith(temp_container);

        }); 
    } 

    static comments_main_container() {
        let tmp = document.createElement('ul');
        tmp.classList.add('comments_main_container');
        return tmp;
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

    
    static comment_list(){
        let tmp = document.createElement('div');
        tmp.classList.add('comment_list');
        return tmp;
    } 

    static inject_comments(_temp_container, _url){
        fetch(_url)
        .then(response => response.json())
        .then(json => {
            this.comment_list_container.appendChild(this.get_thread_template(json));
        });
    } 

    static get_comment_template(_aComment){
        let tmp = document.createElement('p');
        tmp.innerHTML = _aComment.commentText;
        return tmp;
    }

    static get_thread_template(_comment_list){
        let tmp = document.createElement('ul');
        Object.entries(_comment_list).forEach((aComment) => {
            const [key, comment] = aComment; 
            let itemList = document.createElement('li');
            itemList.appendChild(this.get_comment_template(comment));
            tmp.appendChild(itemList); 
          }); 
        
        return tmp;
    }
     
}

  
 