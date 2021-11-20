export default class Comment {
    cText = '';
    cThreadId ='';
    cParentId = '';
    cChildrenIds = [];
    cToolbar = [];
    cOwner = {
        userId:'',
        userAwatarUrl:'',
        userName:'',
        userProfileLink:'',
        isLoggedin: ''
    };
    cUI = '';

  
    constructor(brand) {
        this.cUI = brand;
    }
  
    get cUI() {
        return 
            `<div   data-threadId=${this.cThreadId} 
                    data-parentId=${this.cParentId} 
                    data-childrenIds=${this.cChildrenIds}                    
            >
                <p>${this.cText}</p>
                <tool-bar></tool-bar>
                <img src="${this.cOwner.userAwatarUrl}" alt="${this.cOwner.userName}" width="100" height="100">
                <span data-userId="${thhis.cOwner.userId}" data-isLoggedIn="${this.cOwner.isLoggedin}">${this.cOwner.userName}</span>

            </div>`;
    }

    // static hello() {
    //     return "Hello!!";
    // }
  
    //get something() {} // getter method
   // set something() {} // setter method
  
    //[Symbol.iterator]() {}  
  }

  
//   class Model extends Car {
//     constructor(brand, mod) {
//       super(brand);
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }
//   } 