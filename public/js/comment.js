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

  
    constructor(brand) {
        this.carname = brand;
    }
  
    present() {
        return 'I have a ' + this.carname;
    }

    static hello() {
        return "Hello!!";
    }
  
    //get something() {} // getter method
   // set something() {} // setter method
  
    [Symbol.iterator]() {}  
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